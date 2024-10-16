// imports.js

// Importações dos módulos necessários
import { pegaDadosFornecedor, MostraLinhas } from "./Fornecedor.js";
import { controleDoForm, ocultar } from "./janelaAddFornecedor.js";
import { recebeDadosFornecedor } from "./pegarDados.js";
import { limpaCampos } from "./limpaCampos_fornecedor.js";
import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { editarFornecedor } from "./editarFornecedor.js";
import { endpoints, paths } from "./endpoints_fornecedor.js";
import { criandoSession } from "./session.js";
import { verificaStatus } from "./status.js";
import { pequisaAvancada } from "./pesquisaAvancada.js";
import { addContatoFornecedor } from "./addContatoFornecedor.js";
// Exportação dos módulos importados
export {
    pegaDadosFornecedor,
    controleDoForm,
    ocultar,
    recebeDadosFornecedor,
    addContatoFornecedor,
    limpaCampos,
    PegarId,
    PegarElemClass,
    editarFornecedor,
    endpoints,
    paths,
    criandoSession,
    verificaStatus,
    pequisaAvancada,
    MostraLinhas,
};
