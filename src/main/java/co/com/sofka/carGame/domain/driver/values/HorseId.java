package co.com.sofka.carGame.domain.driver.values;

import co.com.sofka.domain.generic.Identity;

public class HorseId extends Identity {
    private HorseId(String id) {
        super(id);
    }

    public HorseId(){super();}

    public static HorseId of(String id)
    {
        return new HorseId(id);
    }

}
