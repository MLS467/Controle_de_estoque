import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { editarColab } from "./editarColab.js";
import { verificaStatus } from "./status.js";

// consumindo dados para exibir na tabela de colaboradores
const pegaDadosUsuarios = async (endpoint) => {
    const resultado = await fetch(endpoint);
    const res = await resultado.json();

    res.resultado.map(e => {
        let tipo = retornaTipo(e.tipo_usu_fk);
        let status = retornaStatus((e.status_usu).toLowerCase());
        let statusVal = null;
        if (e.status_usu == "a")
            statusVal = '../../../imgs/on.svg';
        else
            statusVal = '../../../imgs/off.svg';

        PegarId('dadosColab').innerHTML += `
        <tr data-idColab=${e.id_usu}>
            <td>${e.id_usu}</td>
            <td>${e.nome_usu}</td>
            <td>${tipo}</td>
            <td>${status}</td>
            <td>telefone</td>
            <td id="acoes">
            <img src="${statusVal}" alt="on" class='iconeTabelaOn'>
            <img src="../../../imgs/edit.svg" data-idRetornaTel=${e.id_usu} id="editarColab" alt="editar" class='iconeTabela iconTableEdit'>
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



}

const retornaTipo = (num) => {
    switch (num) {
        case '1':
            return 'super_usuario'
        case '2':
            return 'administrador'
        case '3':
            return 'usuario'

    }
}

const retornaStatus = (st) => {
    switch (st) {
        case 'a':
            return 'Ativo';
        case 'i':
            return 'Inativo';
    }
}

export { pegaDadosUsuarios };




