// imports.js

// Importações dos módulos necessários
import { pegaDadosUsuarios } from "./colaborador.js";
import { controleDoForm, ocultar } from "./janelaAddColab.js";
import { recebeDadosColab } from "./pagarDados.js";
import { constroiDivTel } from "./constroiDivTel.js";
import { limpaCampos } from "./limpaCampos.js";
import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { editarColab } from "./editarColab.js";
import { pegaTipo } from "./tipoColab.js";
import { endpoints, paths } from "./endpoints.js";
import { retornaTelColab } from "./retornaTelColab.js"

// Exportação dos módulos importados
export {
    pegaDadosUsuarios,
    controleDoForm,
    ocultar,
    recebeDadosColab,
    constroiDivTel,
    limpaCampos,
    PegarId,
    PegarElemClass,
    editarColab,
    pegaTipo,
    endpoints,
    paths,
    retornaTelColab
};
