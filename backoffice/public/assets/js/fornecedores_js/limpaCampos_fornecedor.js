import { PegarId } from "./pegaElementosDOM.js";
import { paths } from "./endpoints_fornecedor.js";

// limpa campos de adicionar novo Fornecedororadores
// e limpa campos de editar Fornecedororadores

const limpaCampos = () => {
    PegarId('dadosContatosFornecedor').innerHTML = "";
    const nome = PegarId('nomeCompleto');
    nome.value = "";
    PegarId('preview').src = paths.imgPadrao;
    nome.focus();
}

export { limpaCampos };