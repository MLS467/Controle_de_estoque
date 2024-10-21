<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use sistema\Model\Contatos_fornecedor;

$id = $_GET['id'];

$valor = (new Contatos_fornecedor())->selecionarTodosRegistros($id);

if (!empty($valor) && $valor)
    echo json_encode([$valor]);
else {
}
