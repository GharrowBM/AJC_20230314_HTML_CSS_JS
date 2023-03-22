<%--
  Created by IntelliJ IDEA.
  User: gharr
  Date: 19/03/2023
  Time: 08:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<head>
    <title>TodoList</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
</head>
<body>
  <main class="container">
    <div class="my-3 row">
      <div class="col-10 offset-1 p-3 bg-dark text-light rounded">
        <h1>TodoList</h1>
        <hr>
        <form action="/todos" method="post">
          <div class="mb-3">
              <label for="name" class="form-label">Name: </label>
              <input type="text" class="form-control" id="name" name="name" required>
          </div>
          <div class="mb-3">
              <label for="description" class="form-label">Description: </label>
              <textarea cols="30" rows="10" class="form-control" id="description" name="description" required></textarea>
          </div>
          <div class="text-end">
            <button class="btn btn-success"><i class="bi bi-plus-circle"></i> Add</button>
          </div>
        </form>
        <hr>
        <table class="table table-dark text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          <c:forEach items="${todos}" var="todo">
            <tr>
              <td><c:out value="${todo.id}"/></td>
              <td><c:out value="${todo.name}"/></td>
              <td><c:out value="${todo.description}"/></td>
              <td>
                <c:if test="${todo.completed}">
                  <a href="/todos/switchStatus/${todo.id}" class="btn btn-success"><i class="bi bi-check-circle"></i></a>
                </c:if>
                <c:if test="${not todo.completed}">
                  <a href="/todos/switchStatus/${todo.id}" class="btn btn-warning"><i class="bi bi-circle"></i></a>
                </c:if>
                <a href="/todos/delete/${todo.id}" class="btn btn-danger ms-2"><i class="bi bi-trash"></i></a>
              </td>
            </tr>
          </c:forEach>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</body>
</html>
