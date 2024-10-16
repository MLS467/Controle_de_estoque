import { PegarId } from "./pegaElementosDOM.js";
import { endpoints, paths } from "./endpoints_fornecedor.js";
import { limpaCampos } from "./limpaCampos_fornecedor.js";
import { mostraImg } from "./mostraImgFornecedor.js";


const editarFornecedor = async (id) => {
    window.modojanela = "e";
    limpaCampos();
    mostraImg();
    let resposta = await fetch(`${endpoints.editarForn}?id=${id}`);
    let res = await resposta.json();



    PegarId('formAddFornecedor').classList.remove('ocultar');

    const val = res.resposta;

    PegarId('guardarFornecedor').setAttribute('data-idEditar', id);
    PegarId('nomeCompleto').value = val.desc_for;
    PegarId('statusConta').value = val.status_for == "a" ? 'a' : 'i';
    PegarId('fileInput').textContent = val.img_for;
    PegarId('preview').src = val.img_for ? `${paths.imgRecuperada}/${val.img_for}` : `${paths.imgPadrao}`;
    PegarId('msgTitulo').innerHTML = "Editar Fornecedororador";
}



export { editarFornecedor };