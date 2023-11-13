// Espera até que o documento HTML seja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Adquire os elementos HTML pelo ID
  var pesoInput = document.getElementById("peso");
  var distanciaInput = document.getElementById("distancia");
  var calcularButton = document.getElementById("calcularBotao");
  var resultado = document.getElementById("resultado");

  // Adiciona um evento de clique ao botão de cálculo
  calcularButton.addEventListener("click", function () {
    // Adquire os valores de peso e distância dos campos de entrada
    var peso = parseFloat(pesoInput.value);
    var distancia = parseFloat(distanciaInput.value);

    // Verifica se os valores são números válidos
    if (!isNaN(peso) && !isNaN(distancia)) {
      // Calcula o preço do frete
      var frete = 6 * peso * distancia;
      // Exibe o resultado formatado na página
      resultado.textContent =
        "O preço do frete calculado é R$" + frete.toFixed(2);
    } else {
      // Caso os valores não sejam válidos, exibe uma mensagem de erro
      resultado.textContent =
        "Por favor, insira valores válidos para peso e distância.";
    }
  });
});
