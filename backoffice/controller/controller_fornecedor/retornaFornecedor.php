<?php

use sistema\Model\Fornecedor;


require_once __DIR__ . "/../../vendor/autoload.php";

echo json_encode(['resultado' => (new Fornecedor())->selecionarTodosRegistros('desc_for')]);