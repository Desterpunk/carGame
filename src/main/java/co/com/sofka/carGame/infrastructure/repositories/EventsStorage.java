package co.com.sofka.carGame.infrastructure.repositories;

import co.com.sofka.domain.generic.DomainEvent;
import co.com.sofka.infraestructure.repository.EventStoreRepository;
import co.com.sofka.infraestructure.store.StoredEvent;
import com.mongodb.reactivestreams.client.MongoClient;
import org.bson.Document;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class EventsStorage implements EventStoreRepository {
    private final MongoClient _mongoClient;

    public EventsStorage(MongoClient _mongoClient) {
        this._mongoClient = _mongoClient;
    }

    @Override
    public List<DomainEvent> getEventsBy(String s, String s1) {
        return null;
    }

    @Override
    public void saveEvent(String aggregateName, String aggregateId, StoredEvent storedEvent) {
        Document document = new Document();
        document.put("aggregateId", storedEvent.deserializeEvent().aggregateRootId());
        document.put("typeName", storedEvent.getTypeName());
        document.put("ocurredOn", storedEvent.getOccurredOn());
        document.put("eventBody", storedEvent.getEventBody());

        _mongoClient.getDatabase("cars_events").getCollection(aggregateName).insertOne(document);
    }
}
