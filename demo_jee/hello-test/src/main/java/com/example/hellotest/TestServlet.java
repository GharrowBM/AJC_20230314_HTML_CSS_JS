package com.example.hellotest;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

@WebServlet({"/test", "/test/delete/*"})
public class TestServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String route = request.getRequestURI();
        // "localhost:8080/test"  => '/test'
        // "localhost:8080/test/delete/12" => '/test/delete/12'

        if (route.matches("^/test/delete/\\d+$")) {
            int id = Integer.parseInt(route.substring(route.lastIndexOf('/') +1));
            // 12

            // Tu supprimes ton élément

            response.sendRedirect("/test");
        } else {
            String[] mesPrenoms = {"Albert", "Chloée", "Léo"};

            request.setAttribute("test", "Je suis du texte");
            request.setAttribute("monBool", true);
            request.setAttribute("mesItems", new ArrayList<>(Arrays.asList(mesPrenoms)));

            request.getRequestDispatcher("test.jsp").forward(request, response);
        }
    }
}
