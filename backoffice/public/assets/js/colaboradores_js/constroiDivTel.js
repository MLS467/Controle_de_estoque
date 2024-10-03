import { PegarId } from "./pegaElementosDOM.js";
import { ExcluirTel } from "./excluirTelColab.js";


// construção das divs de telefones do colaborador
const constroiDivTel = (valor, caminhoImg, tipo) => {

    const listTel = PegarId('resulTelColab');
    const div = document.createElement('div');

    const imgClose = document.createElement('img');
    imgClose.setAttribute('src', caminhoImg)
    imgClose.addEventListener('click', evt => {
        const excluirTelColab = evt.target.parentNode;
        const id = PegarId('guardarColab').dataset.ideditar;
        const numero = evt.target.parentNode.textContent;

        if (excluirTelColab.getAttribute('class') === "numtel editado") {
            if (ExcluirTel(id, numero)) {
                excluirTelColab.remove();
            } else
                console.error("Não foi possível excluir telefone!");
        } else
            excluirTelColab.remove();
    });

    div.innerHTML = valor;
    tipo === "n" ? div.setAttribute('class', 'numtel novo') : div.setAttribute('class', 'numtel editado');
    div.appendChild(imgClose);
    listTel.appendChild(div);
}




export { constroiDivTel };