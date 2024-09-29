import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { editarColab } from "./editarColab.js";

// consumindo dados para exibir na tabela de colaboradores
const pegaDadosUsuarios = async (config) => {
    const resultado = await fetch(config.endpoint);
    const res = await resultado.json();
    console.log(res);
    res.map(e => {
        PegarId('dadosColab').innerHTML += `
        <tr data-idColab=${e.id}>
            <td>${e.id}</td>
            <td>${e.nome}</td>
            <td>${e.tipo}</td>
            <td>${e.status}</td>
            <td>${e.telefone}</td>
            <td id="acoes">
            <img src="../../../imgs/on.svg" alt="on" class='iconeTabelaOn'>
            <img src="../../../imgs/edit.svg" id="editarColab" alt="editar" class='iconeTabela iconTableEdit'>
            <img src="../../../imgs/delete.svg" alt="deletar" class='iconeTabela '>
            </td>
            </tr>`
    });

    /********************************************************************** */

    /****Editar colaborador*********/
    await PegarElemClass('iconTableEdit').forEach(e => {
        e.addEventListener('click', (evt) => editarColab(evt.target.parentNode.parentNode.dataset.idcolab));
    })
    /********************************* */
}

export { pegaDadosUsuarios };




