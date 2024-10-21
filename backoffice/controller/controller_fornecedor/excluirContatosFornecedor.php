<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use sistema\Model\Contatos_fornecedor;


$idPessoa = $_GET['id_pessoa'];
$idFornecedor = $_GET['id_fornecedor'];

if (!empty($idPessoa) && !empty($idFornecedor) && isset($idPessoa) && isset($idFornecedor)) {

    if ((new Contatos_fornecedor())->deletarTele($idPessoa, $idFornecedor))
        echo json_encode(['resposta' => 'telefone excluido com sucesso!' . " id_pessoa = $idPessoa e  id_fornecedor= $idFornecedor"]);
    else
        echo json_encode(['resposta' => 'houve um problema para excluir telefone!']);
} else
    echo json_encode(['resposta' => 'dados insuficientes!']);