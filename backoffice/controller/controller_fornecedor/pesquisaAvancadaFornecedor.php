<?php

use sistema\Model\Fornecedor;


require_once __DIR__ . "/../../vendor/autoload.php";

$tipo = $_GET['tipoPes'];
$valor = $_GET['valor'];

switch ($tipo) {
    case 'id':
        $sql = "WHERE id_for  = $valor";

        break;

    case 'nome':
        $valor = strtoupper($valor);
        $sql = "WHERE desc_for LIKE UPPER('%$valor%')";

        break;
}

$user = new Fornecedor();

echo json_encode(['resposta' => $user->pesquisarPor($sql)]);