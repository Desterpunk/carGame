package co.com.sofka.carGame.domain.generic;

public class Command extends co.com.sofka.domain.generic.Command {
    private String type;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
