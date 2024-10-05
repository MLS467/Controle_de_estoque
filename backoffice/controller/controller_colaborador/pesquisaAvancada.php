<?php

use sistema\Helpers\Helpers;
use sistema\Model\Usuario;

require_once __DIR__ . "/../../vendor/autoload.php";

$tipo = $_GET['tipoPes'];
$valor = $_GET['valor'];

switch ($tipo) {
    case 'id':
        $sql = "WHERE id_usu = $valor";
        $tipoPesq = 1;
        break;

    case 'nome':
        $valor = strtoupper($valor);
        $sql = "WHERE nome_usu LIKE UPPER('%$valor%')";
        $tipoPesq = 2;
        break;
}

$user = new Usuario();

echo json_encode(['resposta' => $user->pesquisarPor($sql, $tipoPesq)]);