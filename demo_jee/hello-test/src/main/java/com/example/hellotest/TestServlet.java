package com.example.hellotest;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

@WebServlet("/test")
public class TestServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String[] mesPrenoms = {"Albert", "Chloée", "Léo"};

        request.setAttribute("test", "Je suis du texte");
        request.setAttribute("monBool", true);
        request.setAttribute("mesItems", new ArrayList<>(Arrays.asList(mesPrenoms)));

        request.getRequestDispatcher("test.jsp").forward(request, response);
    }
}
