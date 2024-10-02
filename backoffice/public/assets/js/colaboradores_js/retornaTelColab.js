const retornaTelColab = async (id, endpoint) => {
    let resposta = await fetch(`${endpoint}?id=${id}`);
    let res = await resposta.json();
    return res;
};

export { retornaTelColab };
