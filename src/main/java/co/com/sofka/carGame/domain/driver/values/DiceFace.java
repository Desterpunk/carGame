package co.com.sofka.carGame.domain.driver.values;

import co.com.sofka.domain.generic.ValueObject;

import java.util.Objects;

public class DiceFace implements ValueObject<String> {
    private final String value;

    public DiceFace(String value) {
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
        DiceFace diceFace = (DiceFace) o;
        return Objects.equals(value, diceFace.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
