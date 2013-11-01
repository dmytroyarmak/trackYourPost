<th>
    <% if (editable) { %>
        <input type="text" class="form-control form-control-edit j-track-input-description" value="<%= description %>">
    <% } else {%>
        <%= description %>
    <% } %>
</th>
<td>
    <% if (editable) { %>
        <div class="input-group">
          <input type="text" class="form-control form-control-edit j-track-input-barcode" value="<%= barcode %>">
          <span class="input-group-btn">
            <button class="btn btn-default j-track-cancel" type="button"><i class="glyphicon glyphicon-remove"></i></button>
            <button class="btn btn-default j-track-save" type="button"><i class="glyphicon glyphicon-ok"></i></button>
          </span>
        </div>
    <% } else {%>
        <%= barcode %>
    <% } %>
</td>
<td><%= state %> <% if (isUpdated) { %><span class="label label-success">Оновлено</span><% } %></td>
<td><%= lastoffice %></td>
<td><%= lastofficeindex %></td>
<td><%= eventdate %></td>
<td>
    <% if (!editable) { %>
        <a class="j-track-edit" href="#" aria-hidden="true"><i class="glyphicon glyphicon-edit"></i></a>
    <% } %>
    <a class="j-track-destroy" href="#" aria-hidden="true"><i class="glyphicon glyphicon-trash"></i></a>
</td>
