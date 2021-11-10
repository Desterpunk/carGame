package co.com.sofka.carGame.domain.game.values;

import co.com.sofka.domain.generic.Identity;

public class GameId extends Identity {
    public GameId()
    {
        super();
    }

    private GameId(String id)
    {
        super(id);
    }

    public static GameId of(String id)
    {
        return new GameId(id);
    }
}
