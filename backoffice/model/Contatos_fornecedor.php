<?php

namespace sistema\Model;

use sistema\Model\Db;
use PDO;

require_once __DIR__ . "/../vendor/autoload.php";

class Contatos_fornecedor
{

    private $id_pes_fk, $id_forn_fk, $nomeTabela;

    public function __construct(int $id_pes_fk = null, int $id_forn_fk = null)
    {
        $this->nomeTabela = "contato_fornecedor";
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

    public function selecionarTodosRegistros($id)
    {
        $sql = "SELECT p.id_pes,p.nome_pes FROM contato_fornecedor 
        cf JOIN pessoa p ON cf.id_pes_fk = p.id_pes  
        WHERE id_forn_fk = ? LIMIT 100";

        $query = Db::preparar($sql);
        $query->execute(array($id));
        $res = $query->fetchAll(PDO::FETCH_ASSOC);
        if ($res)
            return $res;
        return false;
    }

    public function deletarTele($id, $numero)
    {
        $sql = "DELETE FROM $this->nomeTabela WHERE id_pes_fk = ? AND id_forn_fk  = ?";

        $query = Db::preparar($sql);
        $query->execute(array($id, $numero));
        if (!$query)
            return false;

        return true;
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