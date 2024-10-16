<?php

use sistema\Model\Pessoa;

require_once __DIR__ . "/../../vendor/autoload.php";

echo json_encode(['resultado' => (new Pessoa())->selecionarTodosRegistros('nome_pes')]);