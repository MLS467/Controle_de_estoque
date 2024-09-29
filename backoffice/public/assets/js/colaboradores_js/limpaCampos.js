import { PegarId } from "./pegaElementosDOM.js";

const limpaCampos = (dados) => {
    const nome = PegarId('nomeCompleto');
    nome.value = "";
    PegarId('tipoUsuario').value = "";
    PegarId('statusConta').value = "";
    PegarId('telefone').value = "";
    PegarId('resulTelColab').innerHTML = "";
    nome.focus();

}

export { limpaCampos };