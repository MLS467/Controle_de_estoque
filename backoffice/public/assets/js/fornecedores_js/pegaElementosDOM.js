function PegarId(id) {
    return document.getElementById(id);
}

function PegarElemClass(classe) {
    const valor = `.${classe}`;
    return [...document.querySelectorAll(valor)];
}

function PegarElem(valor) {
    return [...document.querySelectorAll(valor)];
}

export { PegarId, PegarElemClass, PegarElem }