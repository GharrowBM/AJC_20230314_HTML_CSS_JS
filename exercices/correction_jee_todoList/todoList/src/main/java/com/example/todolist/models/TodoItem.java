package com.example.todolist.models;

public class TodoItem {
    private static int count = 0;

    private int id;
    private String name;
    private String description;
    private boolean completed;

    public TodoItem(String name, String description) {
        this.id = ++count;
        this.name = name;
        this.description = description;
        this.completed = false;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
