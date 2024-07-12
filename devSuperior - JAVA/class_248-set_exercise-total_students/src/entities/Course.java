package entities;

import java.util.HashSet;
import java.util.Set;

public class Course {
    private final Set<Integer> students = new HashSet<>();

    public Set<Integer> getStudents() {
        return students;
    }
}
