$(document).ready(function () {
  // enviar formulário
  $("#form").on("submit", function (e) {
    e.preventDefault();

    const task = $("#entrada").val();

    $("#limpar").append(
      // adicionar tarefa na lista
      "<li><span>" +
        task +
        '</span><button class="deleteBotao">Excluir</button></li>'
    );

    $("#entrada").val(""); // limpar tarefa
  });

  $("#lista").on("click", "li", function (e) {
    if (!$(e.target).is("button")) {
      $(this).find("span").toggleClass("line-through");
    }
  });

  $("#lista").on("click", ".deleteBotao", function (e) {
    e.stopPropagation();
    $(this).parent().remove();
  });

  $("#limpar").on("click", function () {
    $("#lista").empty();
  });
});
