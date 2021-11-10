package co.com.sofka.carGame.domain.driver.values;

import co.com.sofka.domain.generic.Identity;

public class HorsemanId extends Identity {
    private HorsemanId(String id) {
        super(id);
    }

    public HorsemanId(){}

    public static HorsemanId of(String id)
    {
        return new HorsemanId(id);
    }
}
