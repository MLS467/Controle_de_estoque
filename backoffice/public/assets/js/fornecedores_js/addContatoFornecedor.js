import { Caixa } from "../../../../../utils/caixaPersReutilizavel/caixa.js";
import { endpoints } from "./endpoints_fornecedor.js";
import { PegarId } from "./pegaElementosDOM.js";

const addContatoFornecedor = async () => {
    PegarId('dadosContatosFornecedor').innerHTML = "";
    const resultado = await fetch(endpoints.retornaContForn);
    const val = await resultado.json();
    console.log(val.valor[0]);
    if (!val.valor) {
        const config = {
            cor: "#f00",
            tipo: "ok",
            texto: "Nenhum contato retornado!",
            titulo: "ERRO",
        }
        Caixa.mostrar(config);
    } else {
        const divCont = PegarId('popupCont');
        const contatos = PegarId('dadosContatos');
        contatos.innerHTML = "";

        divCont.classList.remove('ocultar');
        PegarId('fecharCont').addEventListener('click', evt => divCont.classList.add('ocultar'));
        console.log(val.valor);
        val.valor[0].forEach(e => {
            contatos.appendChild(constroiLinha(e));
        });
    }
}

const constroiLinha = (e) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-idcont', e.id_pes);
    tr.setAttribute('class', 'contatoAdicionado');

    const tdId = document.createElement('td');
    tdId.innerHTML = e.id_pes;

    const tdNome = document.createElement('td');
    tdNome.innerHTML = e.nome_pes;

    const tdicon = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute('src', '../../../imgs/addCont.svg');
    img.addEventListener('click', evt => {
        const dados = evt.target.parentNode.parentNode;
        dados.classList.add('adicionarContato');
        PegarId('dadosContatosFornecedor').appendChild(dados);
    })

    tdicon.appendChild(img);

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdicon);

    return tr;
}

export { addContatoFornecedor };