import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { editarColab } from "./editarColab.js";
import { verificaStatus } from "./status.js";
import { filtragem } from "./filtragem.js";

// consumindo dados para exibir na tabela de colaboradores
const pegaDadosUsuarios = async (endpoint) => {
    const resultado = await fetch(endpoint);
    const res = await resultado.json();
    MostraLinhas(res.resultado);
}

// mostra as linhas da tabela
function MostraLinhas(arr) {
    PegarId('dadosColab').innerHTML = "";
    arr.map(e => {
        let tipo = retornaTipo(e.id_tipo_pessoa_fk);
        let status = retornaStatus((e.status_pes).toLowerCase());
        let statusVal = null;
        if (e.status_pes == "a")
            statusVal = '../../../imgs/on.svg';
        else
            statusVal = '../../../imgs/off.svg';

        PegarId('dadosColab').innerHTML += `
        <tr data-idColab=${e.id_pes}>
            <td>${e.id_pes}</td> 
            <td>${e.nome_pes}</td> 
            <td>${tipo}</td>
            <td>${status}</td>
            <td>telefone</td>
            <td id="acoes">
            <img src="${statusVal}" alt="on" class='iconeTabelaOn'>
            <img src="../../../imgs/edit.svg" data-idRetornaTel=${e.id_pes} id="editarColab" alt="editar" class='iconeTabela iconTableEdit'>
            <img src="../../../imgs/delete.svg" alt="deletar" class='iconeTabela'>
            </td>
            </tr>`
    });

    /********************************************************************** */

    /****Editar colaborador*********/
    PegarElemClass('iconTableEdit').forEach(e => {
        e.addEventListener('click', (evt) => editarColab(evt.target.parentNode.parentNode.dataset.idcolab));
    })
    /**********************************/

    // botão de status do usuario
    PegarElemClass('iconeTabelaOn').forEach(e => e.addEventListener('click', evt => verificaStatus(evt.target)));
    /************************* */

    /**************** FILTRAGEM ********************* */
    const searchInput = PegarId('filtragem');
    const tableRows = document.querySelectorAll('#dadosColab tr');
    filtragem(searchInput, tableRows);
    /*********************************************/

}

const retornaTipo = (num) => {
    switch (num) {
        case "1":
            return 'super_usuario';
        case "2":
            return 'administrador';
        case "3":
            return 'usuario';
        case "4":
            return 'Fornecedor';
        default:
            return 'desconhecido'; // adicionado para segurança
    }
}

const retornaStatus = (st) => {
    switch (st) {
        case 'a':
            return 'Ativo';
        case 'i':
            return 'Inativo';
        default:
            return 'Desconhecido'; // adicionado para segurança
    }
}

export { pegaDadosUsuarios, MostraLinhas };
