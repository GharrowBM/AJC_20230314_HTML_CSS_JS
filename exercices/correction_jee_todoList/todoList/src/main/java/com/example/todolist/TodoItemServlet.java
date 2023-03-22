package com.example.todolist;

import com.example.todolist.models.TodoItem;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@WebServlet({"/todos", "/todos/switchStatus/*", "/todos/delete/*"})
public class TodoItemServlet extends HttpServlet {
    private List<TodoItem> todoItems = new ArrayList<>(Arrays.asList(
            new TodoItem("Test A", "Desc of Todo A"),
            new TodoItem("Test B", "Desc of Todo B"),
            new TodoItem("Test C", "Desc of Todo C"),
            new TodoItem("Test D", "Desc of Todo D"),
            new TodoItem("Test E", "Desc of Todo E")
    ));

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String route = request.getRequestURI();
        if (route.matches("^/todos/switchStatus/\\d+$")) {
            int id = Integer.parseInt(route.substring(route.lastIndexOf('/') + 1));

            TodoItem todo = todoItems.stream()
                    .filter(item -> item.getId() == id)
                    .findFirst()
                    .orElse(null);

            if (todo != null) {
                todo.setCompleted(!todo.isCompleted());

                response.sendRedirect("/todos");
                return;
            }
        } else if (route.matches("^/todos/delete/\\d+$")) {
            int id = Integer.parseInt(route.substring(route.lastIndexOf('/') + 1));

            TodoItem todo = todoItems.stream()
                    .filter(item -> item.getId() == id)
                    .findFirst()
                    .orElse(null);

            if (todo != null) {
                todoItems.remove(todo);

                response.sendRedirect("/todos");
                return;
            }
        }
        request.setAttribute("todos", todoItems);
        request.getRequestDispatcher("todoList.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name = request.getParameter("name");
        String description = request.getParameter("description");
        todoItems.add(new TodoItem(name, description));

        response.sendRedirect("/todos");
    }

}
