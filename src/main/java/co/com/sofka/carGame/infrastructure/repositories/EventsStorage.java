package co.com.sofka.carGame.infrastructure.repositories;

import co.com.sofka.carGame.infrastructure.EventSerializer;
import co.com.sofka.domain.generic.DomainEvent;
import co.com.sofka.infraestructure.repository.EventStoreRepository;
import co.com.sofka.infraestructure.store.StoredEvent;
import com.mongodb.client.model.Filters;
import io.quarkus.mongodb.reactive.ReactiveMongoClient;
import org.bson.Document;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
@Default
public class EventsStorage implements EventStoreRepository {
    private final ReactiveMongoClient _mongoClient;

    public EventsStorage(ReactiveMongoClient _mongoClient) {
        this._mongoClient = _mongoClient;
    }

    @Override
    public List<DomainEvent> getEventsBy(String aggregateName, String aggregateId) {
          return _mongoClient.getDatabase("cars_events").getCollection(aggregateName)
                  .find(Filters.eq("aggregateId", aggregateId))
                  .map(document -> new StoredEvent(document.getString("typeName"),
                          (Date)document.get("ocurredOn"), document.getString("eventBody")))
                  .map(StoredEvent::deserializeEvent)
                  .subscribe().asStream().collect(Collectors.toList());
    }

    @Override
    public void saveEvent(String aggregateName, String aggregateId, StoredEvent storedEvent) {
        Document document = new Document();
        document.put("aggregateId", aggregateId);
        document.put("typeName", storedEvent.getTypeName());
        document.put("ocurredOn", storedEvent.getOccurredOn());
        document.put("eventBody", storedEvent.getEventBody());

        _mongoClient.getDatabase("cars_events").getCollection(aggregateName).insertOne(document)
                .subscribeAsCompletionStage();
    }
}
