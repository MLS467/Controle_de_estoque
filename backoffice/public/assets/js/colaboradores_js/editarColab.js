import { PegarId } from "./pegaElementosDOM.js";
import { endpoints, paths } from "./endpoints.js";
import { limpaCampos } from "./limpaCampos.js";
import { retornaTelColab } from "./retornaTelColab.js";
import { constroiDivTel } from "./constroiDivTel.js";
import { mostraImg } from "./mostraImgColab.js";
import { Caixa } from "../../../../../utils/caixaPersReutilizavel/caixa.js";


const editarColab = async (id) => {
    window.modojanela = "e";
    limpaCampos();
    mostraImg();
    let resposta = await fetch(`${endpoints.editarUsu}?id=${id}`);
    let res = await resposta.json();

    PegarId('formAddColab').classList.remove('ocultar');
    const tels = await retornaTelColab(id, endpoints.retornaTel);

    if (tels.telefones === "Nenhum Telefone encotrado!") {
        const config = {
            cor: "#f00",
            tipo: "ok",
            texto: "Colaborador sem Telefone!",
            titulo: "Mensagem",
        }
        Caixa.mostrar(config);
    } else {
        tels.telefones.forEach(element => {
            constroiDivTel(element.numero_tel, paths.imgExcluir, "e");
        });
    }


    const val = res.resposta;
    PegarId('guardarColab').setAttribute('data-idEditar', id);
    PegarId('nomeCompleto').value = val.nome_pes;
    PegarId('tipoUsuario').value = val.id_tipo_pessoa_fk;
    PegarId('statusConta').value = val.status_pes == "a" ? 'a' : 'i';
    PegarId('fileInput').textContent = val.img_pes;
    PegarId('preview').src = val.img_pes ? `${paths.imgRecuperada}/${val.img_pes}` : `${paths.imgPadrao}`;
    PegarId('msgTitulo').innerHTML = "Editar Colaborador";
}



export { editarColab };