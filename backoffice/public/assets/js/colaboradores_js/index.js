import {
    pegaDadosUsuarios, controleDoForm, ocultar, recebeDadosColab, constroiDivTel,
    limpaCampos, PegarId, PegarElemClass, pegaTipo, endpoints, paths, criandoSession, verificaStatus
} from './imports.js';

// modo da janela criando global no navegador
window.modojanela = null;


// criando sessoes com nome do servidor
criandoSession();
/*********************************** */


/* configuração de endpoint para consumir dados do usuário */
pegaDadosUsuarios(endpoints.dadosUsu);
/********************************************************** */


/************* janela de adicionar novo colaborador ***********/
PegarId('imgDiv').addEventListener('click', controleDoForm);
/********************************************************** */

/****Editar colaborador no colaborador.js *********/

/**** botão de status do usuario ****/


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
/************************************************************** */



/******************** Cancelar ******************************** */
PegarId('cancelarColab').addEventListener('click', ocultar);
/************************************************************** */



/********************* Fechar ******************************** */
PegarId('close').addEventListener('click', ocultar);
/************************************************************** */



/******************* Telefone card ******************************** */

PegarId('telefone').addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        const valor = PegarId('telefone').value;
        const img = paths.imgExcluir;

        valor.length < 8 || valor === 0 ? alert("Insira um telefone válido!") : constroiDivTel(valor, img, "n");
        PegarId('telefone').value = '';
        PegarId('telefone').focus();
    }
});

/************************************************************ */



/************ PEGANDO O TIPO DE USUÁRIO ************************ */
pegaTipo(endpoints.getTipoUsu);
/************************************************************ */