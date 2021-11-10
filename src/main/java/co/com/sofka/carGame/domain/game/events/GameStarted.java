package co.com.sofka.carGame.domain.game.events;

import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.carGame.domain.game.values.GameId;
import co.com.sofka.domain.generic.DomainEvent;

public class GameStarted extends DomainEvent {
    private final Status status;

    public GameStarted(Status status) {
        super("sofka.game.started");
        this.status = status;
    }

    public Status getStatus() {
        return status;
    }
}
