<div class="well">
    <h3><%= description %></h3>
    <hr>
    <dl class="dl-horizontal">
      <dt>Номер відправлення: </dt><dd><%= barcode %></dd>
      <dt>Час останнього оновлення: </dt><dd><%= eventdate %></dd>
      <dt>Час останньої зміни стану: </dt><dd><%= eventdate %></dd>
      <dt>Поточний стан: </dt><dd><%= eventdescription %></dd>
    </dl>
    <button class="btn btn-danger j-track-destroy">Видалити</button>
</div>
