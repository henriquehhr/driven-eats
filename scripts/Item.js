export default class Item {
  constructor({ nome, imagem, descrição, preco }, tipo, selecionados) {
    this.nome = nome;
    this.imagem = imagem;
    this.descrição = descrição;
    this.preco = preco;
    this.tipo = tipo;
    this.selecionados = selecionados;
    this.setup();
  }

  setup() {
    this.view = document.createElement("div");
    this.view.classList.add("opcao");
    this.view.addEventListener("click", () => this.selecionarItem());
    this.view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>`;
  }

  getItemView() {
    return this.view;
  }

  selecionarItem() {
    const selecionado = document.querySelector(`.${this.tipo} .selecionado`);
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    }
    this.view.classList.add("selecionado");
    this.selecionados[this.tipo] = this;
  }

}