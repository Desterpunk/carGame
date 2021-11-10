package co.com.sofka.carGame.domain.driver.entities;

import co.com.sofka.carGame.domain.driver.values.Location;
import co.com.sofka.carGame.domain.driver.values.TrackId;
import co.com.sofka.domain.generic.Entity;

public class Track extends Entity<TrackId> {
    private Location location;

    public Track(TrackId entityId) {
        super(entityId);
    }

    public void assignLocation(Location location)
    {
        this.location = location;
    }

    public Location location() {
        return location;
    }
}
