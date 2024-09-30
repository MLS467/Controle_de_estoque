<?php
require_once __DIR__ . "/../vendor/autoload.php";

use sistema\Helpers\Helpers;
use sistema\Model\Usuario;

# Recebe os dados via post do front-end
$file = $_FILES['file'];
$valores = json_decode($_POST['dados'], true);
$valores['img'] = $file['name'];
$path = "../public/assets/img/";

#insere dados e retorna resultado.
if (!empty($file) && !empty($valores) && isset($file) && isset($valores)) {

    if ((new Usuario($valores))->inserirDados()) {
        if (Helpers::ValidaArq($file['name'], $file['size'])) {

            if (move_uploaded_file($file['tmp_name'], $path . $file['name']))
                echo json_encode(['resposta' => 'dados inseridos com sucesso']);
            else
                echo json_encode(['resposta' => 'dados inválidos']);
        } else
            echo json_encode(['resposta' => 'tipo ou tamanho inválido']);
    } else
        echo json_encode(['resposta' => 'falha ao inserir dados']);
} else
    echo json_encode(['resposta' => 'falta dados para realizar operações']);;
