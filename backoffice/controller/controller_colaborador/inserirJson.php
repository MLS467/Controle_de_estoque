<?php
require_once __DIR__ . "/../../vendor/autoload.php";

use sistema\Helpers\Helpers;
use sistema\Model\Usuario;

// Recebe os dados via post do front-end
$file = isset($_FILES['file']) ? $_FILES['file'] : null;
$valores = json_decode($_POST['dados'], true);
$valores['img'] = !empty($file['name']) ? $file['name'] : "";
$path = "../../public/assets/img/";

Helpers::mostrarArray($_POST);


$resposta = []; // Inicializa a resposta

// Insere dados e retorna resultado
if (!empty($valores)) {
    if ((new Usuario($valores))->inserirDados()) {
        if (!empty($file) && $file['error'] === UPLOAD_ERR_OK) {
            if (Helpers::ValidaArq($file['name'], $file['size'])) {
                if (move_uploaded_file($file['tmp_name'], $path . $file['name'])) {
                    $resposta['resposta'] = 'Arquivo salvo com sucesso!';
                } else {
                    $resposta['resposta'] = 'Problema ao salvar arquivo!';
                }
            } else {
                $resposta['resposta'] = 'Tipo ou tamanho inválido';
            }
        } else {
            $resposta['resposta'] = 'Usuário sem foto!';
        }
        $resposta['status'] = 'dados inseridos com sucesso';
    } else {
        $resposta['resposta'] = 'Falha ao inserir dados';
    }
} else {
    $resposta['resposta'] = 'Faltam dados para realizar operações';
}

echo json_encode(['resposta' => $resposta['resposta']]);