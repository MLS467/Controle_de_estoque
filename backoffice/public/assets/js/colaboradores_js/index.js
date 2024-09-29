import { pegaDadosUsuarios } from "./colaborador.js";
import { controleDoForm, ocultar } from "./janelaAddColab.js";
import { recebeDadosColab } from "./pagarDados.js";
import { constroiDivTel } from "./constroiDivTel.js";
import { limpaCampos } from "./limpaCampos.js";
import { PegarId, PegarElemClass } from "./pegaElementosDOM.js";
import { editarColab } from "./editarColab.js";

/* configuração de endpoint para consumir dados do usuário */
const config = {
    // endpoint: `./bdfake.json`
    endpoint: `http://localhost:3000/usuario`
}

pegaDadosUsuarios(config);
/********************************************************** */

/** janela de adicionar novo colaborador */
PegarId('imgDiv').addEventListener('click', controleDoForm);

// operaçoes da janela adicionar novo colaborador (guardar)
PegarId('guardarColab').addEventListener('click', evt => {
    const tels = PegarElemClass('numtel');
    const arr = [];
    tels.forEach(e => {
        arr.push(e.textContent);
    });

    const endpoint = `http://localhost:3000/usuario`;

    const dados = {
        nome: PegarId('nomeCompleto').value,
        tipo: PegarId('tipoUsuario').value,
        status: PegarId('statusConta').value,
        telefone: arr
    }

    recebeDadosColab(endpoint, dados);
    limpaCampos(dados);
})
/************************************************************** */


//cancelar
PegarId('cancelarColab').addEventListener('click', ocultar);


//close
PegarId('close').addEventListener('click', ocultar);


/*********** Telefone card ******************************** */

PegarId('telefone').addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        const valor = PegarId('telefone').value;
        const img = 'img/close.svg'

        valor.length < 8 || valor === 0 ? alert("Insira um telefone válido!") : constroiDivTel(valor, img);
        PegarId('telefone').value = '';
        PegarId('telefone').focus();
    }
});

/************************************************************ */


