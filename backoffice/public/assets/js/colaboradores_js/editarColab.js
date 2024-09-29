import { PegarId } from "./pegaElementosDOM.js"

const editarColab = (id) => {
    console.log(id);
    PegarId('formAddColab').classList.remove('ocultar');
    PegarId('tituloForm').innerHTML = `Editar Colaborador`;

}


export { editarColab };