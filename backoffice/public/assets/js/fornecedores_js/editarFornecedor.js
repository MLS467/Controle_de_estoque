import { PegarId } from "./pegaElementosDOM.js";
import { endpoints, paths } from "./endpoints_fornecedor.js";
import { limpaCampos } from "./limpaCampos_fornecedor.js";
import { mostraImg } from "./mostraImgFornecedor.js";
import { constroiLinha } from "./addContatoFornecedor.js";


const editarFornecedor = async (id) => {
    window.modojanela = "e";
    limpaCampos();
    mostraImg();

    let resposta = await fetch(`${endpoints.editarPreencher}?id=${id}`);
    let res = await resposta.json();

    const val = res.resposta;

    PegarId('formAddFornecedor').classList.remove('ocultar');
    const valores = val.id_forn_fk != null ? await pegaDadosLinha(val.id_forn_fk) : -1;

    if (valores[0]) {
        if (valores[0].length > 0) {

            valores[0].forEach(e => {
                const dados = {
                    id_pes: e.id_pes,
                    nome_pes: e.nome_pes
                }
                PegarId('dadosContatosFornecedor').appendChild(constroiLinha(dados, 0));

            });
        }
    }

    PegarId('guardarFornecedor').setAttribute('data-idEditar', id);
    PegarId('nomeCompleto').value = val.desc_for;
    PegarId('statusConta').value = val.status_for == "a" ? 'a' : 'i';
    PegarId('fileInput').textContent = val.img_for;
    PegarId('preview').src = val.img_for ? `${paths.imgRecuperada}/${val.img_for}` : `${paths.imgPadrao}`;
    PegarId('msgTitulo').innerHTML = "Editar Fornecedororador";

}

const pegaDadosLinha = async (id) => {
    if (id) {
        const result = await fetch(`${endpoints.retornaDadosLinha}?id=${id}`)
        return await result.json();
    }

    return false;
}



export { editarFornecedor };