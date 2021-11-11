package co.com.sofka.carGame.infrastructure.commandhandlers;

import co.com.sofka.business.generic.UseCase;
import co.com.sofka.business.generic.UseCaseHandler;
import co.com.sofka.business.repository.DomainEventRepository;
import co.com.sofka.business.support.RequestCommand;
import co.com.sofka.carGame.application.CreateGameUseCase;
import co.com.sofka.carGame.domain.game.commands.CreateGameCommand;
import co.com.sofka.infraestructure.asyn.SubscriberEvent;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

@ApplicationScoped
public class CreateGameCommandHandler {
    @Inject
    private DomainEventRepository repository;
    @Inject
    private SubscriberEvent subscriberEvent;
    private final CreateGameUseCase useCase;

    public CreateGameCommandHandler(CreateGameUseCase useCase) {
        this.useCase = useCase;
    }

    @ConsumeEvent(value = "sofka.game.create")
    public void createGame(CreateGameCommand createGameCommand)
    {
        useCase.addRepository(repository);
        UseCaseHandler.getInstance()
                .setIdentifyExecutor(createGameCommand.getEntityId())
                .asyncExecutor(useCase,  new RequestCommand<>(createGameCommand))
                .subscribe(subscriberEvent);
    }
}
