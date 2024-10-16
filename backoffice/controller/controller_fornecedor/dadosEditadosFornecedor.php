<?php

use sistema\Model\Fornecedor;


require_once __DIR__ . "/../../vendor/autoload.php";

$path = "../../public/assets/img/";
$id = $_GET['id'];
$dados = json_decode($_POST['dados'], true);

// Verifique se o arquivo foi enviado
$file = isset($_FILES['file']) ? $_FILES['file'] : null;
$dados['img'] = !empty($file['name']) ? $file['name'] : "";

if (!empty($id) && !empty($dados)) {
    if ((new Fornecedor($dados))->atualizarDados($id)) {
        // Se o arquivo não estiver vazio e foi enviado corretamente
        if (!empty($file) && $file['error'] === UPLOAD_ERR_OK) {
            move_uploaded_file($file['tmp_name'], $path . $file['name']);
        } else {
            echo json_encode(['resposta' => 'usuário sem foto!']);
        }

        echo json_encode(['resposta' => 'Inserido com sucesso!']);
    } else {
        echo json_encode(['resposta' => 'dados não inseridos!']);
    }
} else {
    echo json_encode(['resposta' => 'dados inválidos!']);
}