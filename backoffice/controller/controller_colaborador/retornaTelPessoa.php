<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use sistema\Model\Telefone;

$id = $_GET['id'];
$obj_tel = new Telefone();

if (!empty($id) && isset($id)) {
    if ($obj_tel->selecionarRegistrosTel($id))
        echo json_encode(['telefones' => $obj_tel->selecionarRegistrosTel($id)]);
    else
        echo json_encode(['telefones' => 'Nenhum Telefone encotrado!']);
} else
    echo json_encode(['telefones' => 'Nenhum id encotrado!']);