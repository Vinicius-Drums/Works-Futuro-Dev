function calcularFGTS() {
  // Obtém o valor do salário bruto do input
  const salarioBrutoInput = document.getElementById("salarioBruto");
  const salarioBruto = parseFloat(salarioBrutoInput.value);

  // Verifica se a entrada é válida (um número)
  if (isNaN(salarioBruto)) {
    alert("Por favor, insira um valor numérico válido para o salário bruto.");
  } else {
    // Calcula o FGTS mensal (8% do salário)
    const fgtsMensal = salarioBruto * 0.08;

    // Calcula o FGTS acumulado anual (12 vezes o FGTS mensal)
    const fgtsAnual = fgtsMensal * 12;

    // Exibe os valores nos parágrafos
    const resultadoMensal = document.getElementById("resultadoMensal");
    const resultadoAnual = document.getElementById("resultadoAnual");

    resultadoMensal.textContent =
      "Contribuição mensal ao FGTS: R$ " + fgtsMensal.toFixed(2);
    resultadoAnual.textContent =
      "Contribuição anual ao FGTS: R$ " + fgtsAnual.toFixed(2);
  }
}
