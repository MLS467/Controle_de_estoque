<?php

use sistema\Model\TipoColab;

require_once __DIR__ . "/../../vendor/autoload.php";

echo json_encode(['resultado' => (new TipoColab())->selecionarTodosRegistros('nivel_tip_usu')]);