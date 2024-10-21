const server = sessionStorage.getItem('servidor_backoffice');
// arquivo de endpoints usados no sistema de controle de estoque
const endpoints = {
    inserir: `${server}/controller/controller_fornecedor/inserirJsonFornecedor.php`,
    dadosForn: `${server}/controller/controller_fornecedor/retornaFornecedor.php`,
    editarPreencher: `${server}/controller/controller_fornecedor/PreencheDadosFornecedor.php`,
    dadosEditados: `${server}/controller/controller_fornecedor/dadosEditados.php`,
    mudarStatus: `${server}/controller/controller_fornecedor/mudarStatusFornecedor.php`,
    PesquisaAvancada: `${server}/controller/controller_fornecedor/pesquisaAvancadaFornecedor.php`,
    retornaContForn: `${server}/controller/controller_fornecedor/retornaContatosFornecedor.php`,
    retornaDadosLinha: `${server}/controller/controller_fornecedor/retornaDadosLinha.php`,
    retornaTel: `${server}/controller/controller_colaborador/retornaTelPessoa.php`,
    deletarContatoFornecedor: `${server}/controller/controller_fornecedor/excluirContatosFornecedor.php`,
}

const paths = {
    imgExcluir: '/Controle_de_estoque/imgs/close.svg',
    imgRecuperada: '../../public/assets/img',
    imgPadrao: `../../../imgs/padrao.jpeg`
}

export { endpoints, paths };