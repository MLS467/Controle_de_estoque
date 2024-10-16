<?php

namespace sistema\Model;

use sistema\Model\Db;

require_once __DIR__ . "/../vendor/autoload.php";

class contatos_fornecedor
{
    private $id_pes_fk, $id_forn_fk;

    public function __construct(int $id_pes_fk, int $id_forn_fk)
    {
        $this->id_pes_fk = $id_pes_fk;
        $this->id_forn_fk = $id_forn_fk;
    }

    public function inserir()
    {
        $dados = [
            $this->getIdPes(),
            $this->getIdForn()
        ];

        $sql = "INSERT INTO contato_fornecedor VALUES (null,?,?)";

        if (Db::preparar($sql)->execute($dados))
            return true;
        else
            return false;
    }


    public function getIdPes(): int
    {
        return $this->id_pes_fk;
    }
    public function getIdForn(): int
    {
        return $this->id_forn_fk;
    }
    public function setIdPes($id_pes_fk)
    {
        $this->id_pes_fk = $id_pes_fk;
    }
    public function setIdForn($id_forn_fk)
    {
        $this->id_forn_fk = $id_forn_fk;
    }
}