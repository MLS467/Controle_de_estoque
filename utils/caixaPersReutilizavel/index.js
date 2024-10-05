/*********   EXEMPLO DE UTILIZAÇÃO DA CAIXA  ************* */

import { Caixa } from "./caixa.js";

//INSTANCIEI A CLASSE CONSEGUI PEGAR PORQUE O ARQUIVO DA CLASSE VEM ANTES 

let executarSim = () => {
    console.log("Chamou a função SIM");
}

let tipo = null;
// CHAMADA DO MÉTODOS PELO BOTÕES BTNS 

document.getElementById("btn").addEventListener("click", () => {
    tipo = ["SIM", "NÃO"];
    const config = { // CONFIG QUE VAI COMO PARAMETRO PARA A MÉTODO DE CONFIGURAÇÃO
        cor: "#007acc",
        tipo: tipo,
        texto: "",
        titulo: "",
        comando: () => { }
    }

    config.comando = () => { executarSim() };
    Caixa.mostrar(config, "Caixa de msg", "Caixa de msg personalizavel");
})

document.getElementById("btn1").addEventListener("click", () => {
    const config = {
        cor: "red",
        tipo: "ok",
        texto: "",
        titulo: "",
        comando: null
    }

    Caixa.mostrar(config, "JAVASCRIPT", "Caixa de msg personalizavel JAVASCRIPT");
})

document.getElementById("btn2").addEventListener("click", () => {
    tipo = ["OK", "CANCEL"];
    const config = {
        cor: "green",
        tipo: tipo,
        texto: "",
        titulo: "",
        comando: () => { }
    }
    config.comando = () => { executarSim() };
    Caixa.mostrar(config, "Caixa de msg PHP", "Caixa de msg personalizavel PHP");
})


