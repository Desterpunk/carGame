package co.com.sofka.carGame.domain.driver.events;

import co.com.sofka.carGame.domain.driver.values.Distance;
import co.com.sofka.carGame.domain.driver.values.HorsemanId;
import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.domain.generic.DomainEvent;

public class HorsemanMoved extends DomainEvent {
    private final Status status;
    private final Distance distanceToAdd;

    public HorsemanMoved(Status status, Distance distanceToAdd) {
        super("sofka.horseman.horsemoved");
        this.distanceToAdd = distanceToAdd;
        this.status = status;
    }

    public Distance getDistanceToAdd() {
        return distanceToAdd;
    }

    public Status getStatus() {
        return status;
    }
}
