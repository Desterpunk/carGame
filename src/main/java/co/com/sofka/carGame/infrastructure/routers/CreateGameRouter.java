package co.com.sofka.carGame.infrastructure.routers;

import co.com.sofka.carGame.domain.game.commands.CreateGameCommand;
import co.com.sofka.carGame.infrastructure.bus.InternalEventBus;
import io.quarkus.vertx.web.Route;
import io.smallrye.mutiny.Uni;
import io.vertx.ext.web.RoutingContext;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

@ApplicationScoped
@Path("/game")
public class CreateGameRouter {
    @Inject
    InternalEventBus internalBus;

    @Route(path = "/create", methods = Route.HttpMethod.POST, consumes = MediaType.APPLICATION_JSON)
    public Uni<String> createGame(RoutingContext routingContext)
    {
        var command = routingContext.getBodyAsJson().mapTo(CreateGameCommand.class);
        internalBus.publishCommand(command);
        return Uni.createFrom().item("Game session created");
    }
}
