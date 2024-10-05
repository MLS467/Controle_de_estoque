// FIZ A CLASSE CAIXA
class Caixa {

    static cor = "#ccc";
    static destino = null;
    static divmsg = null;
    static tipo = null;
    static comandoSn = null;
    status = null;

    // FIZ O CONSTRUTOR QUE VAI RECEBER UM OBJ LITERAL

    static mostrar = (config) => {

        // MOSTRA A CAIXA NO BODY

        //TEXTOS DA CAIXA E CONFIGURAÇÕES
        this.comandoSn = () => { config.comando() };
        this.tipo = config.tipo;
        this.cor = config.cor;
        this.destino = document.body;
        this.titulo = config.titulo;
        this.texto = config.texto;

        // ESTILIZAÇÃO DA CAIXA
        let estilo = `display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
        z-index:999999;`;

        const estiloAreaCaixa =
            `display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
        width:500px;
        height:200px;
        background:#eee;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        `;

        const estiloTitulo =
            `display:flex;
            background:${this.cor};
            color:white;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100px;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        `;


        const estiloBtn =
            `
        color:white;
        background:${this.cor};
        border:#0091ffc9;
        border-radius:5px;
        margin:0 15px;
        width:20%;
        padding:5px;
        cursor:pointer;
        `


        const estiloCentro =
            `display:flex;
            padding:10px;
        justify-content:center;
        align-items:center;
        width:100%;
        height:200px;
        `;
        let estiloFinal = null;

        if (Array.isArray(this.tipo)) {
            estiloFinal = `
                display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100px;
            background:#ccc;
            border-bottom-left-radius:5px;
            border-bottom-right-radius:5px;
            `
        } else {
            estiloFinal = `
            display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100px;
        background:#ccc;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        `
        }

        // CRIA A CAIXA ESCURA NO FUNDO DA JANELA
        this.divmsg = document.createElement('div');
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo);
        this.destino.prepend(this.divmsg);

        const areaCaixa = document.createElement('div');
        areaCaixa.setAttribute("style", estiloAreaCaixa);
        this.divmsg.appendChild(areaCaixa);

        // CRIA O TITULO DA CAIXA
        const areaTitulo = document.createElement("div");
        areaTitulo.setAttribute("style", estiloTitulo);
        areaTitulo.innerHTML = this.titulo;
        areaCaixa.prepend(areaTitulo);

        // CRIA O CENTRO DA CAIXA
        const areaCentral = document.createElement("div");
        areaCentral.setAttribute("style", estiloCentro);
        areaCentral.innerHTML = this.texto;
        areaCaixa.appendChild(areaCentral);

        // CRIA O RODAPÉ DA CAIXA 
        const areaFinal = document.createElement("div");
        areaFinal.setAttribute("style", estiloFinal);

        // CRIA O BOTÃO DA CAIXA
        const btn = document.createElement("button");
        btn.setAttribute("id", "btnCaixa")
        btn.setAttribute("style", estiloBtn);
        if (Array.isArray(this.tipo)) {
            const btn2 = document.createElement("button");
            btn2.setAttribute("id", "btnCaixa2")
            btn2.setAttribute("style", estiloBtn);
            btn.innerHTML = this.tipo[0];
            btn2.innerHTML = this.tipo[1];
            btn.addEventListener("click", () => { this.comandoSn(); this.ocultar() });
            btn2.addEventListener("click", () => { this.ocultar() });
            areaFinal.appendChild(btn);
            areaFinal.appendChild(btn2);
        } else {
            btn.innerHTML = "OK";
            btn.addEventListener("click", () => { this.ocultar() });
            areaFinal.appendChild(btn);
        }

        areaCaixa.appendChild(areaFinal);

        this.status = true;

    }

    static ocultar = () => {
        // OCULTA A CAIXA QUANDO O BOTÃO É PRESSIONADO
        if (this.status) {
            this.status = false;
            this.divmsg.remove();
        }
    }

}

// FAZ A EXPORTAÇÃO DA CLASSE CAIXA
export { Caixa };