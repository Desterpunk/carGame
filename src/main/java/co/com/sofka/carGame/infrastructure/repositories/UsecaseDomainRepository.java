package co.com.sofka.carGame.infrastructure.repositories;

import co.com.sofka.business.repository.DomainEventRepository;
import co.com.sofka.domain.generic.DomainEvent;
import co.com.sofka.infraestructure.repository.EventStoreRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import java.util.List;

public class UsecaseDomainRepository implements DomainEventRepository {
    @Inject
    private EventStoreRepository eventStoreRepository;

    private final String aggregateName;

    public UsecaseDomainRepository(String aggregateName) {
        this.aggregateName = aggregateName;
    }

    @Override
    public List<DomainEvent> getEventsBy(String aggregateId) {
        return getEventsBy(aggregateName, aggregateId);
    }

    @Override
    public List<DomainEvent> getEventsBy(String aggregateName, String aggregateId) {
        return eventStoreRepository.getEventsBy(aggregateName, aggregateId);
    }
}
