package co.com.sofka.carGame.domain.horseman;

import co.com.sofka.carGame.domain.horseman.entities.Horse;
import co.com.sofka.carGame.domain.horseman.entities.Line;
import co.com.sofka.carGame.domain.horseman.entities.Track;
import co.com.sofka.carGame.domain.horseman.events.HorsemanCreated;
import co.com.sofka.carGame.domain.horseman.events.HorsemanMoved;
import co.com.sofka.carGame.domain.horseman.events.RaceFinished;
import co.com.sofka.carGame.domain.horseman.values.Distance;
import co.com.sofka.carGame.domain.horseman.values.HorseId;
import co.com.sofka.carGame.domain.horseman.values.LineId;
import co.com.sofka.carGame.domain.horseman.values.TrackId;
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
