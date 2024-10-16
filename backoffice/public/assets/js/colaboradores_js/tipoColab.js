// pegando os tipos de colaboradores 
import { PegarId } from "./pegaElementosDOM.js";

const pegaTipo = async (endpoint) => {
    let res = await fetch(endpoint);
    res = await res.json();
    console.log(res);
    res.resultado.map(e => {
        PegarId('tipoUsuario').appendChild(criaTipo(e.desc_tpes, e.id_tipo_pessoa)); // atualizado
    });
}

function criaTipo(valor, nivel) {
    const option = document.createElement('option');
    option.setAttribute('value', nivel);
    option.innerHTML = valor;
    return option;
}

export { pegaTipo };
