package entities;

import java.util.Objects;

public class Studant {
    private String name;
    private Integer id;

    public Studant(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Studant studant = (Studant) o;
        return Objects.equals(name, studant.name);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name);
    }
}
