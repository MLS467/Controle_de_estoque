<?php
// selecionarTodosRegistroPorColuna 

use sistema\Model\Pessoa;

require_once __DIR__ . "/../../vendor/autoload.php";
$valor = new Pessoa();
echo json_encode(["valor" => [$valor->selecionarTodosRegistroPorColuna('id_tipo_pessoa_fk', '4')]]);