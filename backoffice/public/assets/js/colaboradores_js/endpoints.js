// arquivo de endpoints usados no sistema de controle de estoque
const endpoints = {
    inserir: `/Controle_de_estoque/backoffice/controller/inserirJson.php`,
    getTipoUsu: `/Controle_de_estoque/backoffice/controller/retornaTipoColab.php`,
    dadosUsu: `/Controle_de_estoque/backoffice/controller/retornaColab.php`,
    excluirUsu: `/Controle_de_estoque/backoffice/controller/excluirColab.php`,
    editarUsu: `/Controle_de_estoque/backoffice/controller/editarColab.php`,
    retornaTel: `/Controle_de_estoque/backoffice/controller/retornaTelColab.php`,
    dadosEditados: `/Controle_de_estoque/backoffice/controller/dadosEditados.php`
}

const paths = {
    imgExcluir: '/Controle_de_estoque/imgs/close.svg',
    imgRecuperada: '../../public/assets/img',
    imgPadrao: `../../../imgs/padrao.jpeg`
}

export { endpoints, paths };