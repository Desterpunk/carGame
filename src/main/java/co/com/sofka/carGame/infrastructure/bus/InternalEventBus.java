package co.com.sofka.carGame.infrastructure.bus;

import co.com.sofka.carGame.domain.generic.Command;
import co.com.sofka.domain.generic.DomainEvent;
import co.com.sofka.infraestructure.bus.EventBus;
import co.com.sofka.infraestructure.event.ErrorEvent;

import javax.inject.Inject;

public class InternalEventBus implements EventBus {
    @Inject
    private  MessageService messageService;

    @Override
    public void publish(DomainEvent domainEvent) {
        messageService.send(domainEvent);
    }

    @Override
    public void publishError(ErrorEvent errorEvent) {

    }

    public void publishCommand(Command command)
    {
        messageService.send(command);
    }
}
