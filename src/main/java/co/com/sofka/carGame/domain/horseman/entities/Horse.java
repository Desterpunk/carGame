package co.com.sofka.carGame.domain.horseman.entities;

import co.com.sofka.carGame.domain.horseman.values.HorseId;
import co.com.sofka.carGame.domain.horseman.values.Color;
import co.com.sofka.carGame.domain.horseman.values.Distance;
import co.com.sofka.domain.generic.Entity;

public class Horse extends Entity<HorseId> {
    private Distance actualDistance;
    private Color color;

    public Horse(HorseId entityId, Color color) {
        super(entityId);
        this.color = color;
        this.actualDistance = new Distance(0);
    }

    public void moveInLine(Distance distance){
        this.actualDistance = distance;
    }

    public Distance actualDistance() {
        return actualDistance;
    }

    public Color color() {
        return color;
    }
}
