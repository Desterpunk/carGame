package co.com.sofka.carGame.domain.game.entities;

import co.com.sofka.carGame.domain.driver.values.HorsemanId;
import co.com.sofka.carGame.domain.generic.values.Position;
import co.com.sofka.carGame.domain.game.values.PodioId;
import co.com.sofka.domain.generic.Entity;

import java.util.Map;

public class Podio extends Entity<PodioId> {

    private Map<HorsemanId, Position> winners;

    public Podio(PodioId entityId) {
        super(entityId);
    }

    public void addWinners(HorsemanId first, HorsemanId second, HorsemanId third)
    {
        winners.put(first, new Position("1"));
        winners.put(second, new Position("2"));
        winners.put(third, new Position("3"));
    }

    public Map<HorsemanId, Position> winners() {
        return winners;
    }
}
