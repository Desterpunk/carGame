package co.com.sofka.carGame.domain.driver.events;

import co.com.sofka.carGame.domain.driver.values.*;
import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.domain.generic.DomainEvent;

public class HorsemanCreated extends DomainEvent {
    private final HorsemanId entityId;
    private final Nickname nickname;
    private final Color horseColor;
    private final Distance distance;
    private final Location location;
    private final Status status;

    public HorsemanCreated(HorsemanId entityId, Nickname nickname, Color horseColor, Distance distance,
                           Location location, Status status) {
        super("sofka.horseman.created");
        this.entityId = entityId;
        this.nickname = nickname;
        this.horseColor = horseColor;
        this.distance = distance;
        this.location = location;
        this.status = status;
    }

    public HorsemanId getEntityId() {
        return entityId;
    }

    public Nickname getNickname() {
        return nickname;
    }

    public Color getHorseColor() {
        return horseColor;
    }

    public Distance getDistance() {
        return distance;
    }

    public Location getLocation() {
        return location;
    }

    public Status getStatus() {
        return status;
    }
}
