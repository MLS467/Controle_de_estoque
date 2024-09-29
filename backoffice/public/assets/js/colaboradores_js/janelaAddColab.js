import { mostraImg } from "./mostraImgColab.js";
import { PegarId } from "./pegaElementosDOM.js";

const janelaAddColab = PegarId('formAddColab');

function controleDoForm() {
    janelaAddColab.classList.remove('ocultar');
    mostraImg();
}

const ocultar = () => {
    janelaAddColab.classList.add('ocultar');
}

export { controleDoForm, ocultar };