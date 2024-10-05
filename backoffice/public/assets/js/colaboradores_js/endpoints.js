const server = sessionStorage.getItem('servidor_backoffice');
// arquivo de endpoints usados no sistema de controle de estoque
const endpoints = {
    inserir: `${server}/controller/controller_colaborador/inserirJson.php`,
    getTipoUsu: `${server}/controller/controller_colaborador/retornaTipoColab.php`,
    dadosUsu: `${server}/controller/controller_colaborador/retornaColab.php`,
    excluirUsu: `${server}/controller/controller_colaborador/excluirColab.php`,
    editarUsu: `${server}/controller/controller_colaborador/editarColab.php`,
    retornaTel: `${server}/controller/controller_colaborador/retornaTelColab.php`,
    dadosEditados: `${server}/controller/controller_colaborador/dadosEditados.php`,
    mudarStatus: `${server}/controller/controller_colaborador/mudarStatusColab.php`,
    excluirTelColab: `${server}/controller/controller_colaborador/excluirTelColab.php`,
    PesquisaAvancada: `${server}/controller/controller_colaborador/pesquisaAvancada.php`,
}

const paths = {
    imgExcluir: '/Controle_de_estoque/imgs/close.svg',
    imgRecuperada: '../../public/assets/img',
    imgPadrao: `../../../imgs/padrao.jpeg`
}

export { endpoints, paths };