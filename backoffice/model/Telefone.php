<?php

namespace sistema\Model;

use PDO;
use PDOException;

class Telefone extends Crud
{
    private $id_tel;
    private $id_usu_fk;
    private $numero_tel;

    public function __construct($id_tel = null, $id_usu_fk = null, $numero_tel = null)
    {
        $this->nomeTabela = 'telefone';
        $this->id_tel = $id_tel;
        $this->id_usu_fk = $id_usu_fk;
        $this->numero_tel = $numero_tel;
    }

    public function inserirDados()
    {
        try {
            $sql = "INSERT INTO telefone (id_usu_fk, numero_tel) VALUES (:id_usu_fk, :numero_tel)";
            $stmt = Db::preparar($sql);
            $stmt->bindParam(':id_usu_fk', $this->id_usu_fk);
            $stmt->bindParam(':numero_tel', $this->numero_tel);
            $stmt->execute();
            $this->id_tel = Db::conectar()->lastInsertId(); // Atualiza o id_tel com o ID gerado
            return true;
        } catch (PDOException $e) {
            // Tratar erro (log, lançar exceção, etc.)
            return false;
        }
    }

    public function selecionarRegistrosTel($id)
    {
        $sql = "SELECT * FROM $this->nomeTabela WHERE id_usu_fk = ? LIMIT 100";
        $query = Db::preparar($sql);
        $query->execute(array($id));
        $res = $query->fetchAll(PDO::FETCH_ASSOC);
        if ($res)
            return $res;
        return false;
    }

    public function atualizarDados($id) {}


    public function getIdTel()
    {
        return $this->id_tel;
    }

    public function getIdUsuFk()
    {
        return $this->id_usu_fk;
    }

    public function getNumeroTel()
    {
        return $this->numero_tel;
    }

    public function setIdTel($id_tel)
    {
        $this->id_tel = $id_tel;
    }

    public function setIdUsuFk($id_usu_fk)
    {
        $this->id_usu_fk = $id_usu_fk;
    }

    public function setNumeroTel($numero_tel)
    {
        $this->numero_tel = $numero_tel;
    }
}
