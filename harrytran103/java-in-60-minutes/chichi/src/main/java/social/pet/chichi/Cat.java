package chichi.src.main.java.social.pet.chichi;

public class Cat {
    private final String id;
    private final String name;
    private final String color;

    public Cat(String id, String name, String color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }
}
