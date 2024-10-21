import { endpoints } from "./endpoints.js";
import { PegarElemClass, PegarId } from "./pegaElementosDOM.js";
import { MostraLinhas } from "./colaborador.js";
import { Caixa } from "../../../../../utils/caixaPersReutilizavel/caixa.js";
// pesquisa por id / nome no back end

const pequisaAvancada = () => {
    const getPesq = PegarId('Pesq');
    getPesq.value = "";
    getPesq.focus();

    const janelaPesq = PegarId('pesquisaAvancada');
    janelaPesq.classList.remove('ocultar');

    PegarId('closePesqAvanc').addEventListener('click', evt => {
        janelaPesq.classList.add('ocultar')
    });

    PegarId('btnPesquisar').addEventListener('click', (evt) => {
        let radios = PegarElemClass('pesqRadio').filter(e => e.checked);
        const valorInput = getPesq.value;

        console.log(valorInput);

        if (valorInput.length === 0) {
            Caixa.ocultar();
            const config = {
                cor: "#FF0000 ",
                tipo: "ok",
                texto: "Preencha os campos!",
                titulo: "Mensagem",
            }
            Caixa.mostrar(config);
        } else {
            enviaPesquisa(radios[0].value, valorInput);
            janelaPesq.classList.add('ocultar')
        }

    })

}


const enviaPesquisa = async (pesqPor, valorCampo) => {
    const endpoint = `${endpoints.PesquisaAvancada}?tipoPes=${pesqPor}&valor=${valorCampo}`;

    const res = await fetch(endpoint);
    const val = await res.json();

    if (res.status == 200) {
        console.log('pesquisa realizada!');
        MostraLinhas(val.resposta);
        return true;
    }
    return false;
}


export { pequisaAvancada };