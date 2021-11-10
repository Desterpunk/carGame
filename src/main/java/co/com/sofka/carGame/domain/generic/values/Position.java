package co.com.sofka.carGame.domain.generic.values;

import co.com.sofka.domain.generic.ValueObject;

public class Position implements ValueObject<String> {
    private final String value;

    public Position(String value) {
        this.value = value;
    }

    @Override
    public String value() {
        return value;
    }
}
