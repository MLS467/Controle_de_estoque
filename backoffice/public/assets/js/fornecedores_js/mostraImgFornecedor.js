import { PegarId } from "./pegaElementosDOM.js";

/*** Mostra a imagem no popup  *** */

const mostraImg = () => {
    // Adiciona um listener ao evento 'change' do input de arquivo
    PegarId('fileInput').addEventListener('change', function (event) {
        // Pega o primeiro arquivo selecionado
        const file = event.target.files[0];

        // Verifica se um arquivo foi selecionado
        if (file) {
            // Cria um novo FileReader para ler o arquivo
            const reader = new FileReader();

            // Define o que fazer quando o arquivo for carregado
            reader.onload = function (e) {
                // Pega o elemento de imagem
                const img = PegarId('preview');

                // Define a fonte da imagem para o resultado do FileReader
                img.src = e.target.result;

                // Torna a imagem visível
                img.style.display = 'block';
            };

            // Lê o arquivo como URL de dados (Data URL)
            reader.readAsDataURL(file);
        }
    });
}

export { mostraImg };