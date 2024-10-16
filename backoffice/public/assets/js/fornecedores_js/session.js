// cria session atraves do arquivo server.txt
const criandoSession = async () => {
    const res = await fetch(`/Controle_de_estoque/server.txt`);
    const valor = await res.json();
    return sessionStorage.setItem("servidor_backoffice", valor.server);
}

export { criandoSession };