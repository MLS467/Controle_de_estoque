import { PegarId } from "./pegaElementosDOM.js";
import { paths } from "./endpoints.js";

// limpa campos de adicionar novo colaboradores
// e limpa campos de editar colaboradores

const limpaCampos = () => {
    const nome = PegarId('nomeCompleto');
    nome.value = "";
    PegarId('telefone').value = "";
    PegarId('resulTelColab').innerHTML = "";

    PegarId('preview').src = paths.imgPadrao;
    nome.focus();

}

export { limpaCampos };