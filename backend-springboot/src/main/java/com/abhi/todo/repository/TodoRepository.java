package com.abhi.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhi.todo.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
