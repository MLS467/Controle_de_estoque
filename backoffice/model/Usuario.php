<?php

namespace sistema;

require_once __DIR__ . "/../vendor/autoload.php";

use sistema\Crud;


class Usuario extends Crud
{
    private int $id_usu;
    private string $nome_usu;
    private int $tipo_usu_fk;
    private string $status_usu;

    public function __construct(int $id_usu, string $nome_usu, int $tipo_usu_fk, string $status_usu) {}

    function inserirDados() {}
    function atualizarDados($id) {}
}