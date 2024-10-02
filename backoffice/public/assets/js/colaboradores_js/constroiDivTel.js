import { PegarId } from "./pegaElementosDOM.js";

// construção das divs de telefones do colaborador
const constroiDivTel = (valor, caminhoImg, tipo) => {
    if (valor != null && valor == "") {
        const listTel = PegarId('resulTelColab');
        const div = document.createElement('div');


        const imgClose = document.createElement('img');
        imgClose.setAttribute('src', caminhoImg)
        imgClose.addEventListener('click', evt => {
            evt.target.parentNode.remove();
        })

        div.innerHTML = valor;
        tipo === "n" ? div.setAttribute('class', 'numtel novo') : div.setAttribute('class', 'numtel editado');
        div.appendChild(imgClose);
        listTel.appendChild(div);
    }
}

export { constroiDivTel };