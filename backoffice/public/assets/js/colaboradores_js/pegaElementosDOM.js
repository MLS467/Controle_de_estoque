function PegarId(id) {
    return document.getElementById(id);
}

function PegarElemClass(classe) {
    const valor = `.${classe}`;
    console.log(valor);
    return [...document.querySelectorAll(valor)];
}

export { PegarId, PegarElemClass }