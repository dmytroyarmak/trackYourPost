<% if (isAuthenticated) { %>
    <p class="navbar-text">Ви ввійшли як <%= name %></p>
    <button type="button" class="btn btn-default navbar-btn j-sign-out-btn">Вийти</button>
<% } else { %>
    <p class="navbar-text">Будь ласка, афторизуйтесь</p>
    <button type="button" class="btn btn-default navbar-btn j-sign-in-btn">Ввійти</button>
<% } %>
