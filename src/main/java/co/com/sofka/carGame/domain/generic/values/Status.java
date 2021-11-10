package co.com.sofka.carGame.domain.generic.values;

import co.com.sofka.domain.generic.ValueObject;

import java.util.Objects;

public class Status implements ValueObject<String> {

    private final String value;

    public Status(String value) {
        this.value = value;
    }

    @Override
    public String value() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Status status = (Status) o;
        return Objects.equals(value, status.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
