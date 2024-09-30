// pegando os tipos de colaboradores 

import { PegarId } from "./pegaElementosDOM.js";

const pegaTipo = async (configTipo) => {

    let res = await fetch(configTipo.endpoint);
    res = await res.json();
    res.resultado.map(e => {
        PegarId('tipoUsuario').appendChild(criaTipo(e.desc_tip_usu, e.id_tip_usu));
    });
}

function criaTipo(valor, nivel) {
    const option = document.createElement('option');
    option.setAttribute('value', nivel);
    option.innerHTML = valor;
    return option;
}


export { pegaTipo };

/************************************ */