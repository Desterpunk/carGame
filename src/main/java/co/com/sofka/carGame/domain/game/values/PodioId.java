package co.com.sofka.carGame.domain.game.values;

import co.com.sofka.domain.generic.Identity;

public class PodioId extends Identity {
    public PodioId()
    {
        super();
    }

    private PodioId(String id)
    {
        super(id);
    }

    public static PodioId of(String id)
    {
        return new PodioId(id);
    }
}
