import { Caixa } from '../../../../../utils/caixaPersReutilizavel/caixa.js';
import {
    pegaDadosUsuarios, controleDoForm, ocultar, recebeDadosColab, constroiDivTel,
    limpaCampos, PegarId, PegarElemClass, pegaTipo, endpoints, paths, criandoSession,
    pequisaAvancada
} from './imports.js';

// modo da janela criando global no navegador
window.modojanela = null;


/********* BOTÃO DE PESQUISA AVANÇADA ************/
PegarId('imgPesq').addEventListener('click', (evt) => { evt.stopPropagation(); pequisaAvancada(); });
PegarId('btnPesquisaAvan').addEventListener('click', evt => { pequisaAvancada() });
/************************************************ */

// criando sessoes com nome do servidor
criandoSession();
/*********************************** */


/* configuração de endpoint para consumir dados do usuário */
console.log(endpoints.dadosUsu);
pegaDadosUsuarios(endpoints.dadosUsu);
/********************************************************** */

/*************** Mostra todos os registros ************************** */
PegarId('mostraTodosReg').addEventListener('click', evt => pegaDadosUsuarios(endpoints.dadosUsu));
/********************************************************** */

/************* janela de adicionar novo colaborador ***********/
PegarId('imgDiv').addEventListener('click', controleDoForm);
/********************************************************** */


/**** operaçoes da janela adicionar novo colaborador (guardar) ****/
PegarId('guardarColab').addEventListener('click', evt => {
    const tels = PegarElemClass("novo");
    console.log(tels);
    let arr = [];

    if (tels.length === 0)
        arr = [];
    else
        tels.forEach(e => arr.push(e.textContent));
    console.log(arr);
    const dados = {
        nome: PegarId('nomeCompleto').value,
        tipo: PegarId('tipoUsuario').value,
        status: PegarId('statusConta').value,
    }

    if (arr.length > 0)
        dados.telefone = arr
    else
        dados.telefone = [];

    if (modojanela === "n")
        recebeDadosColab(endpoints.inserir, dados);
    else if (modojanela === "e") {
        const id = evt.target.dataset.ideditar;
        recebeDadosColab(`${endpoints.dadosEditados}?id=${id}`, dados);
    }

    limpaCampos(dados);
})
/************************************************************************ */


/****** tirar propagação de img na div ******************************** */
PegarId('imgBtn').addEventListener('click', evt => {
    evt.stopPropagation()
    mudaFuncOcult();
});

/********************************************************************** */


/*************** MOSTRAR BOTOES **************************************** */
PegarId('mostraFunc').addEventListener('click', (evt) => {
    mudaFuncOcult();
})

function mudaFuncOcult() {
    console.log(PegarId('mostraFunc').getAttribute('class') == "imgDiv o");
    if (PegarId('mostraFunc').getAttribute('class') == "imgDiv o") {
        PegarId('mostraFunc').classList.remove('o');
        PegarElemClass('ocul').forEach(e => e.classList.remove('ocultarBotao'))
    } else {
        PegarId('mostraFunc').classList.add('o');
        PegarElemClass('ocul').forEach(e => e.classList.add('ocultarBotao'))
    }
}

/************************************************* ***********************/

/******************** Cancelar janela popup ******************************** */
PegarId('cancelarColab').addEventListener('click', ocultar);
/************************************************************************** */



/********************* Fechar janela popup ******************************** */
PegarId('close').addEventListener('click', ocultar);
/************************************************************************** */



/******************* Telefone card ******************************** */
PegarId('telefone').addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        const valor = PegarId('telefone').value;
        const img = paths.imgExcluir;
        const config = {
            cor: "#f00",
            tipo: "ok",
            texto: "Insira um telefone válido!",
            titulo: "Mensagem",
        }

        valor.length < 8 || valor === 0 ? Caixa.mostrar(config) : constroiDivTel(valor, img, "n");
        PegarId('telefone').value = '';
        PegarId('telefone').focus();
    }
});
/************************************************************ */



/************ PEGANDO O TIPO DE USUÁRIO ************************ */
pegaTipo(endpoints.getTipoUsu);
/*************************************************************** */