import Item from "./Item";

let itensSelecionados = {
  prato: null, bebida: null, sobremesa: null
}

const btnConfirmar = document.querySelector(".confirmar");
const btnCancelar = document.querySelector(".cancelar");
const btnPedir = document.querySelector(".fazer-pedido");

const pratos = [
  {
    nome: "Estrombelete de Frango",
    imagem: "img/frango_yin_yang.png",
    descricao: "Um pouco de batata, um pouco de salada",
    preco: 14.9,
  },
  {
    nome: "Asa de Boi",
    imagem: "img/frango_yin_yang.png",
    descricao: "Com molho shoyu",
    preco: 14.9,
  },
  {
    nome: "Carne de Monstro",
    imagem: "img/frango_yin_yang.png",
    descricao: "Com batata assada e farofa",
    preco: 14.9,
  },
];

const bebidas = [
  {
    nome: "Coquinha gelada",
    imagem: "../img/coquinha_gelada.png",
    descricao: "Lata 350ml",
    preco: 4.9,
  },
  {
    nome: "Caldo de Cana",
    imagem: "../img/coquinha_gelada.png",
    descricao: "Copo 600ml",
    preco: 4.9,
  },
  {
    nome: "Corote Gelado",
    imagem: "../img/coquinha_gelada.png",
    descricao: "Garrafa 400ml",
    preco: 4.9,
  },
];

const sobremesas = [
  {
    nome: "Pudim",
    imagem: "img/pudim.png",
    descricao: "Gosto de doce de leite",
    preco: 7.9,
  },
  {
    nome: "Flam",
    imagem: "img/pudim.png",
    descricao: "Gosto de chocolate",
    preco: 7.9,
  },
  {
    nome: "Brigadeiro",
    imagem: "img/pudim.png",
    descricao: "3 unidades",
    preco: 7.9,
  },
];


function getPrecoTotal() {
  return (
    itensSelecionados.prato.preco +
    itensSelecionados.sobremesa.preco +
    itensSelecionados.bebida.preco
  );
}

function confirmarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.remove("escondido");
  document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
    itensSelecionados.prato.nome;
  document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
    itensSelecionados.prato.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
    itensSelecionados.bebida.nome;
  document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
    itensSelecionados.bebida.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
    itensSelecionados.sobremesa.nome;
  document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
    itensSelecionados.sobremesa.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .total .preco").innerHTML =
    getPrecoTotal().toFixed(2);
}

function cancelarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.add("escondido");
}

function enviarZap() {
  const telefoneRestaurante = 553299999999;
  const encodedText = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n- Prato: ${itensSelecionados.prato.nome
    } \n- Bebida: ${itensSelecionados.bebida.nome} \n- Sobremesa: ${itensSelecionados.sobremesa.nome
    } \nTotal: R$ ${getPrecoTotal().toFixed(2)}`
  );

  const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
  window.open(urlWhatsapp);
}

function verificarPedido() {
  if (itensSelecionados.prato && itensSelecionados.bebida && itensSelecionados.sobremesa) {
    btnPedir.classList.add("ativo");
    btnPedir.disabled = false;
    btnPedir.innerHTML = "Fazer pedido";
  }
}

const pratosContainer = document.querySelector(".opcoes.prato");
pratos.forEach(prato => {
  const pratoView = new Item(prato, "prato", itensSelecionados);
  pratoView.getItemView().addEventListener("click", verificarPedido);
  pratosContainer.appendChild(pratoView.getItemView());
});

const bebidasContainer = document.querySelector(".opcoes.bebida");
bebidas.forEach(bebida => {
  const bebidaView = new Item(bebida, "bebida", itensSelecionados);
  bebidaView.getItemView().addEventListener("click", verificarPedido);
  bebidasContainer.appendChild(bebidaView.getItemView());
});

const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
sobremesas.forEach(sobremesa => {
  const sobremesaView = new Item(sobremesa, "sobremesa", itensSelecionados);
  sobremesaView.getItemView().addEventListener("click", verificarPedido);
  sobremesasContainer.appendChild(sobremesaView.getItemView());
});

btnConfirmar.addEventListener("click", () => {
  enviarZap();
});

btnCancelar.addEventListener("click", () => {
  cancelarPedido();
});

btnPedir.addEventListener("click", () => {
  confirmarPedido();
});
