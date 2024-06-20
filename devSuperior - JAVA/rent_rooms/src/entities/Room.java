package entities;

public class Room {
    String name;
    String email;
    int room;

    public Room(String name, String email, int room) {
        this.name = name;
        this.email = email;
        this.room = room;
    }

    public int getRoom() {
        return room;
    }

    @Override
    public String toString() {
        return room + ": " + name + ", " + email;
    }
}
