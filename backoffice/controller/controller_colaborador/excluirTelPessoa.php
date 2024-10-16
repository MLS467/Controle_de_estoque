<?php
require_once __DIR__ . "/../../vendor/autoload.php";


use sistema\Model\Telefone;

$id = $_GET['id'];
$numero = $_GET['numero'];

if (!empty($id) && !empty($numero) && isset($id) && isset($numero)) {

    if ((new Telefone())->deletarTele($id, $numero))
        echo json_encode(['resposta' => 'telefone excluido com sucesso!' . " id = $id e numero = $numero"]);
    else
        echo json_encode(['resposta' => 'houve um problema para excluir telefone!']);
} else
    echo json_encode(['resposta' => 'dados insuficientes!']);
