package co.com.sofka.carGame.application;

import co.com.sofka.business.generic.UseCase;
import co.com.sofka.business.generic.UseCaseHandler;
import co.com.sofka.business.support.RequestCommand;
import co.com.sofka.business.support.ResponseEvents;
import co.com.sofka.carGame.domain.game.Game;
import co.com.sofka.carGame.domain.game.commands.CreateGameCommand;
import co.com.sofka.carGame.domain.game.events.GameCreated;
import co.com.sofka.carGame.domain.game.values.GameId;

import co.com.sofka.carGame.domain.horseman.Horseman;
import co.com.sofka.carGame.domain.horseman.events.HorsemanCreated;
import co.com.sofka.carGame.domain.horseman.values.*;
import co.com.sofka.domain.generic.DomainEvent;
import com.google.common.collect.Streams;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class CreateGameUseCase extends UseCase<RequestCommand<CreateGameCommand>,
        ResponseEvents>
{

    @Override
    public void executeUseCase(RequestCommand<CreateGameCommand> createGameCommandRequestCommand) {
        var command = createGameCommandRequestCommand.getCommand();
        List<DomainEvent> events = new ArrayList<>();
        command.setEntityId(new GameId().value());

       var game  = new Game(GameId.of(command.getEntityId()),Streams.zip(command.getNickanames().stream(), command.getHorseColors().stream(),
                (nickname, horseColor)->
                {
                    var horseman = new Horseman(new HorsemanId(), new Nickname(nickname),
                                    new Color(horseColor), new Distance(command.getDistance()),
                                    new Location(command.getCountry(), command.getPlace()));
                    return horseman.getUncommittedChanges();
                }
                )
                .map(domainEvents->
                {
                    events.addAll(domainEvents);
                    var horsemanCreatedEvent = (HorsemanCreated)domainEvents.get(0);
                    return horsemanCreatedEvent.getEntityId();
                }).collect(Collectors.toList()));

       events.add(game.getUncommittedChanges().get(0));
       emit().onResponse(new ResponseEvents(events));
    }

}
