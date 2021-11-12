package co.com.sofka.carGame.infrastructure;

import co.com.sofka.carGame.domain.generic.values.Status;
import co.com.sofka.carGame.domain.horseman.events.HorsemanCreated;
import co.com.sofka.carGame.domain.horseman.values.*;
import co.com.sofka.domain.generic.DomainEvent;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import java.nio.charset.StandardCharsets;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
class EventSerializerTest {

    @Test
    public void testSerialize()
    {

        var event = new HorsemanCreated(HorsemanId.of("cef30e18-1c8c-4ce9-9cd3-8f9768732a8f"),
                new Nickname("hm1"), new Color("White"),
                new Distance(50), new Location("Canada", "Mountain"),
                new Status("IN PROGRESS"));

        var serialize = EventSerializer.instance().serialize(event);
         var eventSerialized = "{\"entityId\":{\"uuid\":\"cef30e18-1c8c-4ce9-9cd3-8f9768732a8f\"},\"nickname\":{\"value\":\"hm1\"},\"horseColor\":{\"value\":\"White\"},\"distance\":{\"value\":50},\"location\":{\"country\":\"Canada\",\"place\":\"Mountain\"},\"status\":{\"value\":\"IN PROGRESS\"},\"when\":\""+ event.when.toEpochMilli() + "\",\"uuid\":" +"\"" + event.uuid + "\",\"type\":\"sofka.horseman.created\",\"aggregateRootId\":null,\"aggregateParentId\":null,\"aggregate\":\"default\",\"versionType\":1}";
        assertEquals(serialize, eventSerialized);
    }

    @Test
    public void testDeserialize()
    {
        var event = new HorsemanCreated(HorsemanId.of("cef30e18-1c8c-4ce9-9cd3-8f9768732a8f"),
                new Nickname("hm1"), new Color("White"),
                new Distance(50), new Location("Canada", "Mountain"),
                new Status("IN PROGRESS"));
        var typeName = event.getClass().getCanonicalName();
        var serialize = EventSerializer.instance().serialize(event).getBytes(StandardCharsets.UTF_8);

        try {
            DomainEvent domainEvent = EventSerializer.instance().deserialize(new String(serialize), Class.forName(typeName));
            var horsemanCreated = (HorsemanCreated)domainEvent;
            System.out.println(horsemanCreated.getNickname().value());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}