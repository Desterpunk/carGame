package co.com.sofka.carGame.infrastructure.domaineventshandlers;

import co.com.sofka.carGame.domain.game.events.GameCreated;
import co.com.sofka.carGame.domain.horseman.events.HorsemanCreated;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;


@ApplicationScoped
public class GameCreatedEventHandler {

    @ConsumeEvent(value = "sofka.horseman.created")
    public void horsemanCreated(HorsemanCreated horsemanCreated)
    {
    }
    @ConsumeEvent(value = "sofka.game.created")
    public void gameCreated(GameCreated gameCreated)
    {
    }
}
