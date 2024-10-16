<?php

use sistema\Model\Pessoa;

require_once __DIR__ . "/../../vendor/autoload.php";

$tipo = $_GET['tipoPes'];
$valor = $_GET['valor'];

switch ($tipo) {
    case 'id':
        $sql = "WHERE id_pes = $valor";
        $tipoPesq = 1;
        break;

    case 'nome':
        $valor = strtoupper($valor);
        $sql = "WHERE nome_pes LIKE UPPER('%$valor%')";
        $tipoPesq = 2;
        break;
}

$user = new Pessoa();

echo json_encode(['resposta' => $user->pesquisarPor($sql, $tipoPesq)]);