<?php
require_once __DIR__ . "/../../vendor/autoload.php";

// fazer a rotina de retornar os dados por id

use sistema\Helpers\Helpers;
use sistema\Model\Usuario;

$id = $_GET['id'];
$teste = new Usuario();
// Helpers::mostrarArray();

echo json_encode(['resposta' => $teste->selecionarUmRegistro($id)]);
