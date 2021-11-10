package co.com.sofka.carGame.domain.horseman.events;

import co.com.sofka.carGame.domain.horseman.values.DiceFace;
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
