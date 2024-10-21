import { Caixa } from '../../../../../utils/caixaPersReutilizavel/caixa.js';
import {
    controleDoForm, ocultar, recebeDadosFornecedor, limpaCampos, PegarId, PegarElemClass, endpoints, criandoSession, pequisaAvancada, pegaDadosFornecedor, addContatoFornecedor
} from './imports_fornecedor.js';
import { PegarElem } from './pegaElementosDOM.js';

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
pegaDadosFornecedor(endpoints.dadosForn);
/********************************************************** */

/*************** Mostra todos os registros ************************** */
PegarId('mostraTodosReg').addEventListener('click', evt => pegaDadosFornecedor(endpoints.dadosForn));
/********************************************************** */

/************* janela de adicionar novo Fornecedororador ***********/
PegarId('imgDiv').addEventListener('click', controleDoForm);
/********************************************************** */


/**** operaçoes da janela adicionar novo FORNECEDOR (guardar) ****/
PegarId('guardarFornecedor').addEventListener('click', evt => {
    const dados = {
        nome: PegarId('nomeCompleto').value,
        status: PegarId('statusConta').value
    }

    const contatosForn = PegarElem('#dadosContatosFornecedor tr');
    const arrCont = [];
    contatosForn.forEach(e => arrCont.push(e.dataset.idcont));


    if (dados.nome == "" || dados.status == "") {
        const config = {
            cor: "#FF0000 ",
            tipo: "ok",
            texto: "Preencha todos os campos!",
            titulo: "ERRO",
        }

        Caixa.mostrar(config);
    } else {

        if (modojanela === "n") {
            arrCont.length > 0 ? dados.contatos = arrCont : dados.contatos = null;
            console.log(dados);
            recebeDadosFornecedor(endpoints.inserir, dados);
        }
        else if (modojanela === "e") {

            arrCont.length > 0 ? dados.contatos = arrCont : dados.contatos = null;

            const id = evt.target.dataset.ideditar;
            recebeDadosFornecedor(`${endpoints.dadosEditados}?id=${id}`, dados);
        }

        limpaCampos(dados);
    }
})
/************************************************************************ */

/********************** BTN ADICIONAR CONTATO DE FORNECEDOR *********************** */
PegarId('btn_addContForn').addEventListener('click', (evt) => { addContatoFornecedor() });
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
PegarId('cancelarFornecedor').addEventListener('click', ocultar);
/************************************************************************** */


/********************* Fechar janela popup ******************************** */
PegarId('close').addEventListener('click', ocultar);
/************************************************************************** */