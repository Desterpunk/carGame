package co.com.sofka.carGame.domain.driver.events;

import co.com.sofka.carGame.domain.driver.values.DiceFace;
import co.com.sofka.carGame.domain.driver.values.HorsemanId;
import co.com.sofka.domain.generic.DomainEvent;

public class DiceThrown extends DomainEvent {
    private final DiceFace diceFace;

    public DiceThrown(DiceFace diceFace) {
        super("sofka.horseman.dicethrown");
        this.diceFace = diceFace;
    }


    public DiceFace getDiceFace() {
        return diceFace;
    }
}
