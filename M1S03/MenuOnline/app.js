// Função para calcular o valor total do pedido
function calcularPedido() {
  // Obter os valores dos inputs
  var codigoProduto = document.getElementById("codigo").value;
  var quantidade = document.getElementById("quantidade").value;

  // Verificar se os campos estão preenchidos
  if (codigoProduto && quantidade) {
    // Obter o preço unitário do produto
    var precoUnitario = obterPrecoUnitario(codigoProduto);

    // Calcular o valor total do pedido
    var valorTotal = precoUnitario * quantidade;

    // Exibir a resposta no elemento <p> junto com a quantidade e a frase de agradecimento
    var resposta =
      quantidade +
      " " +
      obterNomeProduto(codigoProduto, quantidade) +
      "(s) são: R$ " +
      valorTotal.toFixed(2) +
      "<br>Lanchonete online agradece!";
    document.getElementById("resultado").innerHTML = resposta;

    // Exibir os botões para fazer outro pedido e esconder o botão de calcular
    document.getElementById("calcularBotao").style.display = "none";
    document.getElementById("novoPedidoBotao").style.display = "inline";
  } else {
    // Se os campos não estiverem preenchidos, exibir um alerta
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

// Função para obter o preço unitário com base no código do produto
function obterPrecoUnitario(codigo) {
  var precos = {
    1123: 12.0,
    3423: 9.0,
    4521: 15.0,
    5322: 9.9,
    // Adiciona mais produtos conforme necessário
  };

  if (codigo in precos) {
    return precos[codigo];
  } else {
    return 0.0;
  }
}

// Função para obter o nome do produto com base no código do produto
function obterNomeProduto(codigo, quantidade) {
  var nomes = {
    1123: "Hambúrguer",
    3423: "Sanduíche de pernil",
    4521: "Bauru",
    5322: "Sanduíche de mortadela",
  };

  if (codigo in nomes) {
    return nomes[codigo] + (quantidade > 1 ? "s" : ""); // Adiciona 's' se a quantidade for maior que 1
  } else {
    return "Produto Desconhecido";
  }
}

// Função para fazer outro pedido
function fazerOutroPedido() {
  // Limpa os campos
  document.getElementById("codigo").value = "";
  document.getElementById("quantidade").value = "";

  // Limpa a resposta anterior
  document.getElementById("resultado").innerHTML = "";

  // Esconde o botão de fazer outro pedido e exibir o botão de calcular
  document.getElementById("novoPedidoBotao").style.display = "none";
  document.getElementById("calcularBotao").style.display = "inline";
}

// Vincula a função calcularPedido ao botão de cálculo
document
  .getElementById("calcularBotao")
  .addEventListener("click", calcularPedido);

// Vincula a função fazerOutroPedido ao botão de fazer outro pedido
document
  .getElementById("novoPedidoBotao")
  .addEventListener("click", fazerOutroPedido);
