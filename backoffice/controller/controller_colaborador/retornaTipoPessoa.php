<?php

use sistema\Model\Tipo_pessoa;


require_once __DIR__ . "/../../vendor/autoload.php";

echo json_encode(['resultado' => (new Tipo_pessoa())->selecionarTodosRegistros('nivel_tp')]);