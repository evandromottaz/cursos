package model;

import java.util.List;

public interface GenericDao<T> {
    void insert(T e);

    void update(T e);

    void deleteById(Integer id);

    T findById(Integer id);

    List<T> findAll();
}
