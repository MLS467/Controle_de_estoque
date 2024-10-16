import { limpaCampos } from "./limpaCampos_fornecedor.js";
import { mostraImg } from "./mostraImgFornecedor.js";
import { PegarId } from "./pegaElementosDOM.js";

// mostra a tela de adicionar novo Fornecedororador
const janelaAddFornecedor = PegarId('formAddFornecedor');

function controleDoForm() {
    window.modojanela = "n";
    limpaCampos();

    PegarId('formAddFornecedor').classList.remove('ocultar');
    mostraImg();
    PegarId('msgTitulo').innerHTML = `Adicionar novo Fornecedororador`;
}

const ocultar = () => {
    janelaAddFornecedor.classList.add('ocultar');
}

export { controleDoForm, ocultar };