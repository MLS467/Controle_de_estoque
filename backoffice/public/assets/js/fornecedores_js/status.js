import { endpoints } from "./endpoints_fornecedor.js";

// VERIFICAR STATUS DE INATIVO E ATIVO 

const verificaStatus = (e) => {
    const id = parseInt(e.parentNode.parentNode.childNodes[1].textContent);
    let status = e.parentNode.parentNode.childNodes[5];
    console.log(status);
    if (e.getAttribute('src') == "../../../imgs/on.svg") {
        mudarStatus('i', id)
            .then(res => {
                if (res.status == 200) {
                    e.src = "../../../imgs/off.svg";
                    status.textContent = "Inativo";
                }
            })
    } else if (e.getAttribute('src') == "../../../imgs/off.svg") {

        mudarStatus("a", id)
            .then(res => {
                if (res.status == 200) {
                    e.src = "../../../imgs/on.svg";
                    status.textContent = "Ativo";
                }
            })
    }
}

async function mudarStatus(status, id) {
    return await fetch(`${endpoints.mudarStatus}?status=${status}&id=${id}`);
}

export { verificaStatus };