import { paths } from "./endpoints.js";
import { PegarId } from "./pegaElementosDOM.js";

// recebe os dados para enviar para API 
const recebeDadosColab = (endpoint, dados) => {

    const fileInput = PegarId("fileInput");
    const formData = new FormData();

    if (fileInput.length === 0)
        formData.append("file", paths.imgPadrao);
    else
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
