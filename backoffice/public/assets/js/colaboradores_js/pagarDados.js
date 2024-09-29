import { PegarId } from "./pegaElementosDOM.js";

const recebeDadosColab = (endpoint, dados) => {
    const fileInput = PegarId("fileInput");
    const formData = new FormData();

    formData.append("file", fileInput.files[0]);

    formData.append("dados", JSON.stringify(dados));

    fetch(endpoint, {
        method: "POST",
        body: formData,
    })
        .then(response => response.text())
        .then(result => {
            console.log("Arquivo enviado com sucesso:", result);
        })
        .catch(error => {
            console.error("Erro ao enviar o arquivo:", error);
        });
};

export { recebeDadosColab };
