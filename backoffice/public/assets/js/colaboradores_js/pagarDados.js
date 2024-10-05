import { endpoints, paths } from "./endpoints.js";
import { PegarId } from "./pegaElementosDOM.js";
import { Caixa } from "../../../../../utils/caixaPersReutilizavel/caixa.js";
import { pegaDadosUsuarios } from "./colaborador.js";
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

            const config = {
                cor: "#0f0",
                tipo: "ok",
                texto: "Arquivo enviado com sucesso!",
                titulo: "SUCESSO",
            }

            Caixa.mostrar(config);

            pegaDadosUsuarios(endpoints.dadosUsu);

        })
        .catch(error => {
            console.error("Erro ao enviar o arquivo:", error);

            const config = {
                cor: "#f00",
                tipo: "ok",
                texto: "Erro ao enviar o arquivo!",
                titulo: "ERRO",
            }

            Caixa.mostrar(config);
        });

};

export { recebeDadosColab };
