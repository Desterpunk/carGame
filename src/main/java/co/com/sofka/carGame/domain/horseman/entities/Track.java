package co.com.sofka.carGame.domain.horseman.entities;

import co.com.sofka.carGame.domain.horseman.values.Location;
import co.com.sofka.carGame.domain.horseman.values.TrackId;
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
