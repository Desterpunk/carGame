package co.com.sofka.carGame.domain.game;

import co.com.sofka.carGame.domain.game.entities.Podio;
import co.com.sofka.carGame.domain.game.events.GameCreated;
import co.com.sofka.carGame.domain.game.events.GameFinished;
import co.com.sofka.carGame.domain.game.events.GameStarted;
import co.com.sofka.carGame.domain.game.events.PodioCreated;
import co.com.sofka.carGame.domain.game.values.PodioId;
import co.com.sofka.domain.generic.EventChange;

public class GameEventChange extends EventChange {
    public GameEventChange(Game game) {
        apply((GameCreated event)->
        {
            game.players = event.getPlayers();
        });
        apply((GameStarted event)->
        {
            game.status = event.getStatus();
        });
        apply((GameFinished event)->
        {
            game.status = event.getStatus();
        });
        apply((PodioCreated event)->
        {
            game.podio = new Podio(new PodioId());
            game.podio.addWinners(event.getFirst(), event.getSecond(), event.getThird());
        });
    }
}
