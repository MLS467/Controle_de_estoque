<?php

namespace sistema\Model;

use sistema\Model\Db;

require_once __DIR__ . "/../vendor/autoload.php";

use PDO;


abstract class Crud extends Db
{
    protected $nomeTabela =  null;

    abstract function inserirDados();
    abstract function atualizarDados($id);

    public function selecionarTodosRegistros($ordemNome)
    {
        $ordem = $ordemNome;

        $sql = "SELECT * FROM $this->nomeTabela ORDER BY $ordem";
        $query = self::preparar($sql);
        $query->execute();
        $res = $query->fetchAll(PDO::FETCH_OBJ);
        return $res;
    }

    public function selecionarUmRegistro($id)
    {
        $sql = "SELECT * FROM usuario WHERE id_usu = ?";
        // $sql = "SELECT * FROM $this->nomeTabela WHERE $coluna = ?";
        $query = self::preparar($sql);
        $query->execute(array($id));
        $res = $query->fetch(PDO::FETCH_ASSOC);
        if ($res)
            return $res;
        return false;
    }

    public function selecionarUmRegistroCpf($cpf, $nomeTabela)
    {
        $sql = "SELECT * FROM $nomeTabela WHERE cpf = ?";
        $query = self::preparar($sql);
        $query->execute(array($cpf));
        $res = $query->fetch(PDO::FETCH_OBJ);
        return $res;
    }

    public function selecionarUmRegistroPorEmail($email)
    {
        $sql = "SELECT * FROM $this->nomeTabela WHERE email = ?";
        $query = self::preparar($sql);
        $query->execute(array($email));
        $res = $query->fetch(PDO::FETCH_ASSOC);

        return $res;
    }

    public function deletarUmRegistro($id)
    {
        $sql = "DELETE FROM $this->nomeTabela WHERE id = ?";
        $query = self::preparar($sql);
        $query->execute(array($id));
        if (!$query)
            return false;

        return true;
    }


    public function selecionarParaPesquisa($pesquisa)
    {
        $sql = "SELECT * FROM $this->nomeTabela WHERE nome LIKE ?";
        $pesquisarNome = "%$pesquisa%";
        $query = Db::preparar($sql);
        $query->execute(array($pesquisarNome));
        $resultado = $query->fetchAll(PDO::FETCH_ASSOC);
        return $resultado;
    }
}
