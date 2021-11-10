package co.com.sofka.carGame.domain.driver;

import co.com.sofka.carGame.domain.driver.entities.Horse;
import co.com.sofka.carGame.domain.driver.entities.Line;
import co.com.sofka.carGame.domain.driver.entities.Track;
import co.com.sofka.carGame.domain.driver.events.DiceThrown;
import co.com.sofka.carGame.domain.driver.events.HorsemanCreated;
import co.com.sofka.carGame.domain.driver.events.HorsemanMoved;
import co.com.sofka.carGame.domain.driver.events.RaceFinished;
import co.com.sofka.carGame.domain.driver.values.*;
import co.com.sofka.carGame.domain.generic.values.Position;
import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.domain.generic.AggregateEvent;
import co.com.sofka.domain.generic.DomainEvent;

import java.util.List;

public class Horseman extends AggregateEvent<HorsemanId> {
    public static Status IN_PROGRESS = new Status("IN PROGRESS");
    public static Status DONE = new Status("DONE");

    protected Nickname nickname;
    protected Status status;
    protected Position position;
    protected Horse horse;
    protected Line line;
    protected Track track;

    public Horseman(HorsemanId entityId, Nickname nickname, Color horseColor, Distance
                    distance, Location location) {
        super(entityId);
        appendChange(new HorsemanCreated(entityId, nickname, horseColor, distance, location,
                IN_PROGRESS)).apply();
    }

    private Horseman(HorsemanId horsemanId)
    {
        super(horsemanId);
        subscribe(new HorsemanEventChange(this));
    }

    public static Horseman from(HorsemanId horsemanId, List<DomainEvent> events)
    {
        var horseman = new Horseman(horsemanId);
        events.forEach(horseman::applyEvent);
        return horseman;
    }

    public void move(Distance distanceToAdd)
    {
        appendChange(new HorsemanMoved(IN_PROGRESS, distanceToAdd)).apply();
    }

    public void throwDice(DiceFace diceFace)
    {
        appendChange(new DiceThrown(diceFace)).apply();
    }

    public void finishRace(Position position)
    {
        appendChange(new RaceFinished(DONE, position)).apply();
    }
}
