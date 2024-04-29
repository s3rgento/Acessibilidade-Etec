// Captura os botões de ajuste de fonte
const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');

// Adiciona os eventos de clique aos botões
aumentarFonteBtn.addEventListener('click', aumentarFonte);
diminuirFonteBtn.addEventListener('click', diminuirFonte);

// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    document.body.classList.add('aumentar-fonte');
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    document.body.classList.remove('aumentar-fonte');
}
