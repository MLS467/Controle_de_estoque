import { limpaCampos } from "./limpaCampos.js";
import { mostraImg } from "./mostraImgColab.js";
import { PegarId } from "./pegaElementosDOM.js";

// mostra a tela de adicionar novo colaborador
const janelaAddColab = PegarId('formAddColab');

function controleDoForm() {
    window.modojanela = "n";
    limpaCampos();
    PegarId('formAddColab').classList.remove('ocultar');
    mostraImg();
    PegarId('msgTitulo').innerHTML = `Adicionar novo colaborador`;
}

const ocultar = () => {
    janelaAddColab.classList.add('ocultar');
}

export { controleDoForm, ocultar };