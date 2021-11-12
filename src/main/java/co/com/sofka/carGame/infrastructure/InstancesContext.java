package co.com.sofka.carGame.infrastructure;

import co.com.sofka.infraestructure.asyn.SubscriberEvent;
import co.com.sofka.infraestructure.bus.EventBus;
import co.com.sofka.infraestructure.repository.EventStoreRepository;
import io.quarkus.runtime.Startup;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Dependent;
import javax.enterprise.inject.Default;

@Startup
@ApplicationScoped
public class InstancesContext {

    @Default
    public SubscriberEvent getSubscriberEvent(EventStoreRepository repository, EventBus eventBus)
    {
        return new SubscriberEvent(repository, eventBus);
    }
}
