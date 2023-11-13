// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Obtém o botão "Gerar Convite" pelo ID
  const gerarCartaBtn = document.getElementById("gerarCarta");

  // Adiciona um ouvinte de evento de clique ao botão "Gerar Convite"
  gerarCartaBtn.addEventListener("click", gerarConvite);

  // Função para gerar o convite ao clicar no botão
  function gerarConvite() {
    // Valores dos campos de entrada
    const nomeConvidado = document.getElementById("nomeConvidado").value;
    const nomePrimeiraPessoa =
      document.getElementById("nomePrimeiraPessoa").value;
    const nomeSegundaPessoa =
      document.getElementById("nomeSegundaPessoa").value;
    const dataCasamento = document.getElementById("dataCasamento").value;
    const horaCasamento = document.getElementById("horaCasamento").value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (
      !nomeConvidado ||
      !nomePrimeiraPessoa ||
      !nomeSegundaPessoa ||
      !dataCasamento ||
      !horaCasamento
    ) {
      // Cria um alerta se algum campo estiver faltando
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Texto do convite usando os valores fornecidos
    const cartaTexto = `
            Caro(a) ${nomeConvidado}!
            Você está convidado(a) para o casamento de ${nomePrimeiraPessoa} e ${nomeSegundaPessoa},
            a ser realizado no dia ${dataCasamento}, às ${horaCasamento} horas.
            Contamos com a sua presença!
            Atenciosamente,
            os(as) noivos(as)
        `;

    // Texto do convite na div correspondente
    document.getElementById("cartaTexto").textContent = cartaTexto;

    // Exibe a div do convite
    document.getElementById("carta").style.display = "block";
  }
});
