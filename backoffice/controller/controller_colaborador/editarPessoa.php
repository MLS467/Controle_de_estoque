<?php
require_once __DIR__ . "/../../vendor/autoload.php";

// fazer a rotina de retornar os dados por id
use sistema\Model\Pessoa;


$id = $_GET['id'];
$teste = new Pessoa();
// Helpers::mostrarArray();

echo json_encode(['resposta' => $teste->selecionarUmRegistro($id)]);