package co.com.sofka.carGame.domain.horseman.values;

import co.com.sofka.domain.generic.ValueObject;

public class Location implements ValueObject<Location.Props> {
    private final String country;
    private final String place;

    public Location(String country, String place) {
        this.country = country;
        this.place = place;
    }

    @Override
    public Props value() {
        return new Props() {
            @Override
            public String country() {
                return country;
            }

            @Override
            public String place() {
                return place;
            }
        };
    }

    public interface Props {
        String country();
        String place();
    }
}
