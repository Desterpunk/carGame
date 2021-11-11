package co.com.sofka.carGame.domain.game.commands;

import co.com.sofka.domain.generic.Command;

import java.util.List;

public class CreateGameCommand extends Command {
    private String entityId;
    private List<String> players;
    private List<String> nickanames;
    private List<String> horseColors;
    private Integer distance;
    private String place;
    private String country;

    public CreateGameCommand(String entityId, List<String> players, List<String> nickanames,
                             List<String> horseColors, Integer distance, String place, String country) {
        this.entityId = entityId;
        this.players = players;
        this.nickanames = nickanames;
        this.horseColors = horseColors;
        this.distance = distance;
        this.place = place;
        this.country = country;
    }

    public String getEntityId() {
        return entityId;
    }

    public void setEntityId(String entityId) {
        this.entityId = entityId;
    }

    public List<String> getPlayers() {
        return players;
    }

    public void setPlayers(List<String> players) {
        this.players = players;
    }

    public List<String> getNickanames() {
        return nickanames;
    }

    public void setNickanames(List<String> nickanames) {
        this.nickanames = nickanames;
    }

    public List<String> getHorseColors() {
        return horseColors;
    }

    public void setHorseColors(List<String> horseColors) {
        this.horseColors = horseColors;
    }

    public Integer getDistance() {
        return distance;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
