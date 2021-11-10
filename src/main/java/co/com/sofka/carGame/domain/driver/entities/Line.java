package co.com.sofka.carGame.domain.driver.entities;

import co.com.sofka.carGame.domain.driver.values.Distance;
import co.com.sofka.carGame.domain.driver.values.LineId;
import co.com.sofka.domain.generic.Entity;

public class Line extends Entity<LineId> {
    private Distance distance;

    public Line(LineId entityId) {
        super(entityId);
    }

    public void assignDistance(Distance distance)
    {
        this.distance = distance;
    }

    public Distance distance() {
        return distance;
    }
}
