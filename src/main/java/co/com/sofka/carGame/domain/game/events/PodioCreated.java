package co.com.sofka.carGame.domain.game.events;

import co.com.sofka.carGame.domain.driver.values.HorsemanId;
import co.com.sofka.domain.generic.DomainEvent;

public class PodioCreated extends DomainEvent {
    private final HorsemanId first;
    private final HorsemanId second;
    private final HorsemanId third;

    public PodioCreated(HorsemanId first, HorsemanId second, HorsemanId third) {
        super("sofka.game.podiocreated");
        this.first = first;
        this.second = second;
        this.third = third;
    }

    public HorsemanId getFirst() {
        return first;
    }

    public HorsemanId getSecond() {
        return second;
    }

    public HorsemanId getThird() {
        return third;
    }
}
