<?php

use sistema\Model\Usuario;

require_once "../vendor/autoload.php";

echo json_encode(['resultado' => (new Usuario())->selecionarTodosRegistros('nome_usu')]);
