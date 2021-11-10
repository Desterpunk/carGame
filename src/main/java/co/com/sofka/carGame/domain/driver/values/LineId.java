package co.com.sofka.carGame.domain.driver.values;

import co.com.sofka.domain.generic.Identity;

public class LineId extends Identity {

    private LineId(String id) {
        super(id);
    }

    public LineId(){super();}

    public static LineId of(String id)
    {
        return new LineId(id);
    }

}
