package co.com.sofka.carGame.domain.driver.values;

import co.com.sofka.domain.generic.Identity;

public class TrackId extends Identity {
    private TrackId(String id) {
        super(id);
    }

    public TrackId(){super();}

    public static TrackId of(String id)
    {
        return new TrackId(id);
    }

}
