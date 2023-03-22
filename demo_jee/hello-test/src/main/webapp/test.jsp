<%--
  Created by IntelliJ IDEA.
  User: gharr
  Date: 22/03/2023
  Time: 12:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--Pour activer la JSTL dans notre fichier JSP, il ne faut pas oublier cette balise après avoir placé les deux fichiers .jar au bon endroit
    L'endroit étant dans "webapp/WEB-INF/lib/"--%>
<%@ taglib uri="jakarta.tags.core" prefix="c" %>
<html>
<head>
    <title>Test Demo</title>
</head>
<body>
<main>
  <p>
    <%-- Pour faire un affichage classique de valeur dans le JSP avec la JSTL --%>
    <c:out value="${test}"/>
  </p>
    <%-- Pour faire des tests conditionnels on utilise le :if suivi de l'attribut 'test' pour spécifier le test logique à réaliser --%>
    <c:if test="${monBool}">
        <p>Je suis vrai</p>
    </c:if>
    <c:if test="${!monBool}">
        <p>Je suis faux</p>
    </c:if>
    <ul>
        <%-- Pour faire une itération, on va utiliser :forEach dans lequel l'attribut 'items' sert à définir quelle variable va être itérée et l'attribut 'var' sert à donner une valeur à la variable en
        cours d'itération --%>
        <c:forEach items="${mesItems}" var="item">
            <%-- for (String item : mesItems )--%>
            <li><c:out value="${item}"/> <a href="/test/delete/${item}"></a></li>
        </c:forEach>
    </ul>
</main>
</html>
