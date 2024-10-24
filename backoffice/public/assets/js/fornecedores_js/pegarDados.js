import { endpoints, paths } from "./endpoints_fornecedor.js";
import { PegarId } from "./pegaElementosDOM.js";
import { Caixa } from "../../../../../utils/caixaPersReutilizavel/caixa.js";
import { pegaDadosFornecedor } from "./Fornecedor.js";
// recebe os dados para enviar para API 
const recebeDadosFornecedor = (endpoint, dados) => {

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
                cor: "#038c4c",
                tipo: "ok",
                texto: "Arquivo enviado com sucesso!",
                titulo: "SUCESSO",
            }

            Caixa.mostrar(config);

            pegaDadosFornecedor(endpoints.dadosForn);

        })
        .catch(error => {
            console.error("Erro ao enviar o arquivo:", error);

            const config = {
                cor: "#FF0000 ",
                tipo: "ok",
                texto: "Erro ao enviar o arquivo!",
                titulo: "ERRO",
            }

            Caixa.mostrar(config);
        });

};

export { recebeDadosFornecedor };
