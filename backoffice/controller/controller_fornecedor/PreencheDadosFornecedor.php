<?php
require_once __DIR__ . "/../../vendor/autoload.php";

// fazer a rotina de retornar os dados por id

use sistema\Helpers\Helpers;
use sistema\Model\Fornecedor;


$id = $_GET['id'];
$teste = new Fornecedor();

echo json_encode(['resposta' => $teste->selecionarUmRegistroPorId($id)]);