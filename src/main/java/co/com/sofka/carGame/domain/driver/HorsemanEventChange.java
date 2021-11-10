package co.com.sofka.carGame.domain.driver;

import co.com.sofka.carGame.domain.driver.entities.Horse;
import co.com.sofka.carGame.domain.driver.entities.Line;
import co.com.sofka.carGame.domain.driver.entities.Track;
import co.com.sofka.carGame.domain.driver.events.DiceThrown;
import co.com.sofka.carGame.domain.driver.events.HorsemanCreated;
import co.com.sofka.carGame.domain.driver.events.HorsemanMoved;
import co.com.sofka.carGame.domain.driver.events.RaceFinished;
import co.com.sofka.carGame.domain.driver.values.Distance;
import co.com.sofka.carGame.domain.driver.values.HorseId;
import co.com.sofka.carGame.domain.driver.values.LineId;
import co.com.sofka.carGame.domain.driver.values.TrackId;
import co.com.sofka.domain.generic.EventChange;

public class HorsemanEventChange extends EventChange {
    public HorsemanEventChange(Horseman horseman) {
        apply((HorsemanCreated event)->{
            horseman.nickname = event.getNickname();
            horseman.horse = new Horse(new HorseId(),event.getHorseColor());
            horseman.line = new Line(new LineId());
            horseman.line.assignDistance(event.getDistance());
            horseman.track = new Track(new TrackId());
            horseman.track.assignLocation(event.getLocation());
        });
        apply((HorsemanMoved event)->{
            var distance = new Distance(event.getDistanceToAdd().value() +
                    horseman.horse.actualDistance().value());
            horseman.horse.moveInLine(distance);
            horseman.status = event.getStatus();
        });
        apply((RaceFinished event)->{
            horseman.status = event.getStatus();
            horseman.position = event.getPosition();
        });
    }
}
