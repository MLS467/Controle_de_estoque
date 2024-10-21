import { Caixa } from "../../../../../utils/caixaPersReutilizavel/caixa.js";
import { endpoints } from "./endpoints_fornecedor.js";
import { PegarId } from "./pegaElementosDOM.js";

const addContatoFornecedor = async () => {
    PegarId('dadosContatosFornecedor').innerHTML = "";
    const resultado = await fetch(endpoints.retornaContForn);
    const val = await resultado.json();

    if (!val.valor) {
        const config = {
            cor: "#FF0000 ",
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

        val.valor[0].forEach(e => {
            contatos.appendChild(constroiLinha(e, 1));
        });
    }
}

const constroiLinha = (e, tipo) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-idcont', e.id_pes);
    tr.setAttribute('class', 'contatoAdicionado');

    const tdId = document.createElement('td');
    tdId.innerHTML = e.id_pes;

    const tdNome = document.createElement('td');
    tdNome.innerHTML = e.nome_pes;

    const tdicon = document.createElement('td');

    let img = null;
    let img2 = null;

    if (tipo === 1) {
        img = document.createElement('img');
        img.setAttribute('src', '../../../imgs/addCont.svg');
    }
    else if (tipo === 0) {
        img = document.createElement('img');
        img.setAttribute('src', '../../../imgs/tel.svg');
        img.setAttribute('class', 'iconeTabela');

        img2 = document.createElement('img');
        img2.setAttribute('src', '../../../imgs/delete.svg');

        img2.setAttribute('class', 'iconeTabela');
        img2.addEventListener('click', evt => {
            let linhaDeletar = evt.target.parentNode.parentNode;
            let id_pessoa = linhaDeletar.childNodes[0].textContent;
            let id_fornecedor = PegarId('guardarFornecedor').dataset.ideditar;
            if (DeletarContatoForn(id_pessoa, id_fornecedor)) {

                const config = {
                    cor: "#038c4c",
                    tipo: "ok",
                    texto: "Contato excluido com sucesso!",
                    titulo: "Excluir Contato",
                }

                Caixa.mostrar(config);

                linhaDeletar.remove();
            }
        });
    }

    img.addEventListener('click', evt => {
        if (tipo === 1) {
            const res = evt.target.parentNode.parentNode.childNodes;
            const dados = {
                id_pes: res[0].textContent,
                nome_pes: res[1].textContent
            }
            evt.target.parentNode.parentNode.remove();

            PegarId('dadosContatosFornecedor').appendChild(constroiLinha(dados, 0));
        } else if (tipo === 0) {
            PegarId('dadosContatosCelular').innerHTML = "";
            const linha = evt.target.parentNode.parentNode.childNodes[0];
            PegarId('popupCelular').classList.remove('ocultar');
            PegarId('fecharContCelular').addEventListener('click', evt => PegarId('popupCelular').classList.add('ocultar'));
            PegaTel(linha.textContent);


        }
    })

    if (tipo === 1)
        tdicon.appendChild(img);
    else {
        tdicon.appendChild(img);
        tdicon.appendChild(img2);
    }

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdicon);

    return tr;
}

const linhaTel = (val) => {
    let td = document.createElement('td');
    td.innerHTML = val;
    return td;
}

async function DeletarContatoForn(id_pessoa, id_fornecedor) {
    const res = await fetch(`${endpoints.deletarContatoFornecedor}?id_pessoa=${id_pessoa}&id_fornecedor=${id_fornecedor}`);
    if (res.status === 200) {
        return true;
    }
    return false;
}

async function PegaTel(id) {
    const res = await fetch(`${endpoints.retornaTel}?id=${id}`);
    const retTel = await res.json();
    retTel.telefones.forEach(i => PegarId('dadosContatosCelular').appendChild(linhaTel(i.numero_tel)))
}

export { addContatoFornecedor, constroiLinha };