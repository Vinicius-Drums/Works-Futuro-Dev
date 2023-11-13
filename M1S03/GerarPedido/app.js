// Função para gerar a carta de pedido de férias
function gerarCarta() {
  // Valores dos campos de entrada (nome, data de início e data de término)
  const nome = document.getElementById("nome").value;
  const dataInicio = document.getElementById("dataInicio").value;
  const dataTermino = document.getElementById("dataTermino").value;

  // Verificação dos campos  preenchidos
  if (
    nome.trim() === "" || // Verifica se o nome está vazio ou consiste apenas de espaços em branco
    dataInicio.trim() === "" || // Verifica se a data de início está vazia ou consiste apenas de espaços em branco
    dataTermino.trim() === "" // Verifica se a data de término está vazia ou consiste apenas de espaços em branco
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Data atual
  const dataAtual = new Date();

  // Formata a data atual no formato DD/MM/AAAA
  const dataFormatada = `${dataAtual.getDate()}/${
    dataAtual.getMonth() + 1
  }/${dataAtual.getFullYear()}`;

  // String da carta com os valores inseridos e a data atual
  const carta = `
        <p>Caro(a) responsável,</p>
        <p>Gostaria de solicitar minhas férias.</p>
        <p>Funcionário(a): ${nome}</p>
        <p>Data de início: ${dataInicio}</p>
        <p>Data de término: ${dataTermino}</p>
        <p>Gerar Pedido: ${dataFormatada}</p>
        <p>Agradeço a atenção.</p>
        <p>Atenciosamente, ${nome}.</p>
    `;

  // Exibi a carta na div com o id "carta"
  document.getElementById("carta").innerHTML = carta;
}

// Evento de clique no botão com o id "gerarCarta" para chamar a função gerarCarta
document.getElementById("gerarCarta").addEventListener("click", gerarCarta);
