const server = sessionStorage.getItem('servidor_backoffice');
// arquivo de endpoints usados no sistema de controle de estoque
const endpoints = {
    inserir: `${server}/controller/controller_colaborador/inserirJson.php`,
    getTipoUsu: `${server}/controller/controller_colaborador/retornaTipoPessoa.php`,
    dadosUsu: `${server}/controller/controller_colaborador/retornaPessoa.php`,
    excluirUsu: `${server}/controller/controller_colaborador/excluirPessoa.php`,
    editarUsu: `${server}/controller/controller_colaborador/editarPessoa.php`,
    retornaTel: `${server}/controller/controller_colaborador/retornaTelPessoa.php`,
    dadosEditados: `${server}/controller/controller_colaborador/dadosEditados.php`,
    mudarStatus: `${server}/controller/controller_colaborador/mudarStatusPessoa.php`,
    excluirTelColab: `${server}/controller/controller_colaborador/excluirTelPessoa.php`,
    PesquisaAvancada: `${server}/controller/controller_colaborador/pesquisaAvancada.php`,
}

const paths = {
    imgExcluir: '/Controle_de_estoque/imgs/close.svg',
    imgRecuperada: '../../public/assets/img',
    imgPadrao: `../../../imgs/padrao.jpeg`
}

export { endpoints, paths };