import { PegarId } from "./pegaElementosDOM.js";
import { paths } from "./endpoints.js";

const limpaCampos = () => {
    const nome = PegarId('nomeCompleto');
    nome.value = "";
    PegarId('tipoUsuario').value = "";
    PegarId('statusConta').value = "";
    PegarId('telefone').value = "";
    PegarId('resulTelColab').innerHTML = "";

    PegarId('preview').src = paths.imgPadrao;
    nome.focus();

}

export { limpaCampos };