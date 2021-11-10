package co.com.sofka.carGame.domain.horseman.events;

import co.com.sofka.carGame.domain.generic.values.Position;
import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.domain.generic.DomainEvent;

public class RaceFinished extends DomainEvent {
    private final Status status;
    private final Position position;

    public RaceFinished(Status status, Position position) {
        super("sofka.horseman.racefinished");
        this.status = status;
        this.position = position;
    }

    public Status getStatus() {
        return status;
    }

    public Position getPosition() {
        return position;
    }
}
