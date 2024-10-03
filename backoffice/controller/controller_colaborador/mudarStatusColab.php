<?php

use sistema\Model\Usuario;

require_once __DIR__ . "/../../vendor/autoload.php";


$id = $_GET['id'];
$status = $_GET['status'];

if (!empty($id) && !empty($status)) {
    if ((new Usuario())->atualizarStatus($status, $id))
        echo json_encode(['resposta' => "status foi atualizado para $status"]);
    else
        echo json_encode(['resposta' => "O status não foi atualizado para $status"]);
} else
    echo json_encode(['resposta' => "Dados insuficientes!"]);
