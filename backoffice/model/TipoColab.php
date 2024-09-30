<?php

namespace sistema\Model;

require_once __DIR__ . "/../vendor/autoload.php";

use sistema\Model\Crud;

class TipoColab extends Crud
{
    public function __construct()
    {
        $this->nomeTabela = 'tipo_usuario';
    }

    public function inserirDados() {}
    public function atualizarDados($id) {}
}
