// Função para calcular a média e exibir o status

function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  // Verifica se as entradas são números válidos
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, insira notas válidas.");
  } else {
    var media = (nota1 + nota2 + nota3) / 3;
    var resultado = document.getElementById("media");

    // Verifica se a média é maior ou igual a 7 e exibe o status correspondente
    if (media >= 7) {
      resultado.textContent = "Média: " + media.toFixed(2) + " - Aprovado";
    } else {
      resultado.textContent = "Média: " + media.toFixed(2) + " - Reprovado";
    }
  }
}
