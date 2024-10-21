import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { verificaStatus } from "./status.js";
import { filtragem } from "./filtragem.js";
import { editarFornecedor } from "./editarFornecedor.js";

// consumindo dados para exibir na tabela de Fornecedororadores
const pegaDadosFornecedor = async (endpoint) => {
    const resultado = await fetch(endpoint);
    const res = await resultado.json();
    MostraLinhas(res.resultado);
}

// mostra as linhas da tabela
function MostraLinhas(arr) {
    PegarId('dadosFornecedor').innerHTML = "";
    arr.map(e => {
        let status = retornaStatus((e.status_for).toLowerCase());
        let statusVal = null;
        if (e.status_for == "a")
            statusVal = '../../../imgs/on.svg';
        else
            statusVal = '../../../imgs/off.svg';

        PegarId('dadosFornecedor').innerHTML += `
        <tr data-idFornecedor=${e.id_for}>
            <td>${e.id_for}</td> 
            <td>${e.desc_for}</td> 
            <td>${status}</td>
            <td id="acoes">
            <img src="${statusVal}" alt="on" class='iconeTabelaOn'>
            <img src="../../../imgs/edit.svg" data-idFornecedor=${e.id_for} id="editarFornecedor" alt="editar" class='iconeTabela iconTableEdit'>
            <img src="../../../imgs/delete.svg" alt="deletar" class='iconeTabela'>
            </td>
            </tr>`
    });

    /********************************************************************** */

    /****Editar Fornecedororador*********/
    PegarElemClass('iconTableEdit').forEach(e => {
        e.addEventListener('click', (evt) => {
            PegarId('dadosContatosFornecedor').innerHTML = "";

            editarFornecedor(evt.target.parentNode.parentNode.dataset.idfornecedor)
        });
    })
    /**********************************/

    // botão de status do usuario
    PegarElemClass('iconeTabelaOn').forEach(e => e.addEventListener('click', evt => verificaStatus(evt.target)));
    /************************* */

    /**************** FILTRAGEM ********************* */
    const searchInput = PegarId('filtragem');
    const tableRows = document.querySelectorAll('#dadosFornecedor tr');
    filtragem(searchInput, tableRows);
    /*********************************************/

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

export { pegaDadosFornecedor, MostraLinhas };
