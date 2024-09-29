import { PegarId } from "./pegaElementosDOM.js";

// construção das divs de telefones do colaborador
const constroiDivTel = (valor, caminhoImg) => {
    const listTel = PegarId('resulTelColab');
    const div = document.createElement('div');

    const imgClose = document.createElement('img');
    imgClose.setAttribute('src', caminhoImg)
    imgClose.addEventListener('click', evt => {
        evt.target.parentNode.remove();
    })

    div.innerHTML = valor;
    div.setAttribute('class', 'numtel');

    div.appendChild(imgClose);
    listTel.appendChild(div);
}

export { constroiDivTel };