<?php

namespace sistema\Model;

use PDO;
use PDOException;

class Telefone
{
    private $id_tel;
    private $id_usu_fk;
    private $numero_tel;

    public function __construct($id_tel = null, $id_usu_fk, $numero_tel)
    {
        $this->id_tel = $id_tel;
        $this->id_usu_fk = $id_usu_fk;
        $this->numero_tel = $numero_tel;
    }

    public function insert()
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
