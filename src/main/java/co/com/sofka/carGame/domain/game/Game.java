package co.com.sofka.carGame.domain.game;

import co.com.sofka.carGame.domain.driver.values.HorsemanId;
import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.carGame.domain.game.entities.Podio;
import co.com.sofka.carGame.domain.game.events.GameCreated;
import co.com.sofka.carGame.domain.game.events.GameFinished;
import co.com.sofka.carGame.domain.game.events.GameStarted;
import co.com.sofka.carGame.domain.game.events.PodioCreated;
import co.com.sofka.carGame.domain.game.values.GameId;
import co.com.sofka.domain.generic.AggregateEvent;
import co.com.sofka.domain.generic.DomainEvent;

import java.util.List;

public class Game extends AggregateEvent<GameId> {
    public final Status IN_PROGRESS = new Status("IN PROGRESS");
    public final Status GAME_OVER = new Status("GAME OVER");

    protected Status status;
    protected Podio podio;
    protected List<HorsemanId> players;

    public Game(GameId entityId, List<HorsemanId> players) {
        super(entityId);
        appendChange(new GameCreated(entityId, players)).apply();
    }

    private Game(GameId gameId)
    {
        super(gameId);
        subscribe(new GameEventChange(this));
    }

    public static Game from(GameId gameId, List<DomainEvent> events)
    {
        var game = new Game(gameId);
        events.forEach(game::applyEvent);
        return game;
    }

    public void startGame()
    {
        appendChange(new GameStarted(IN_PROGRESS)).apply();
    }

    public void finishGame()
    {
        appendChange(new GameFinished(GAME_OVER)).apply();
    }

    public void createPodio(HorsemanId first, HorsemanId second, HorsemanId third)
    {
        appendChange(new PodioCreated(first, second, third)).apply();
    }
}
