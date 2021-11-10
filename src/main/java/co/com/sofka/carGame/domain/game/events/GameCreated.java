package co.com.sofka.carGame.domain.game.events;

import co.com.sofka.carGame.domain.horseman.values.HorsemanId;
import co.com.sofka.carGame.domain.game.values.GameId;
import co.com.sofka.domain.generic.DomainEvent;

import java.util.List;

public class GameCreated extends DomainEvent {
    private final GameId entityId;
    private final List<HorsemanId> players;

    public GameCreated(GameId entityId, List<HorsemanId> players) {
        super("sofka.game.created");
        this.entityId = entityId;
        this.players = players;
    }

    public GameId getEntityId() {
        return entityId;
    }

    public List<HorsemanId> getPlayers() {
        return players;
    }
}
