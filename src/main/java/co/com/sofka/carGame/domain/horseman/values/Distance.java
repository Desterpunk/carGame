package co.com.sofka.carGame.domain.horseman.values;

import co.com.sofka.domain.generic.ValueObject;

import java.util.Objects;

public class Distance implements ValueObject<Integer> {
    private final Integer value;

    public Distance(Integer value) {
        this.value = value;
    }

    @Override
    public Integer value() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Distance distance = (Distance) o;
        return Objects.equals(value, distance.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
