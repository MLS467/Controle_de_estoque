<?php

namespace sistema\Model;

require_once __DIR__ . "/../vendor/autoload.php";

use sistema\Model\Crud;
use sistema\Model\contatos_fornecedor;
use PDOException;
use PDO;

class Fornecedor extends Crud
{
    private
        $id_for,
        $desc_for,
        $status_for,
        $img,
        $contatos;

    public function __construct(array $dados = null)
    {
        $this->nomeTabela = 'fornecedor';
        $this->desc_for = $dados['nome'] ?? null;
        $this->status_for = $dados['status'] ?? null;
        $this->img = $dados['img'] ?? null;
        $this->contatos = $dados['contatos'] ?? null;
    }

    public function inserirDados()
    {
        try {
            $sql = "INSERT INTO $this->nomeTabela (desc_for,status_for,img_for) VALUES (?, ?,?)";
            $dados = array(
                $this->getDesc(),
                $this->getStatus(),
                $this->getImg(),
            );

            if (Db::preparar($sql)->execute($dados)) {
                $this->setId(Db::conectar()->lastInsertId());
                if ($this->getId()) {
                    foreach ($this->contatos as $key => $value) {
                        (new contatos_fornecedor($value, $this->getId()))->inserir();
                    }
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }


    public function atualizarStatus(string $status, int $id): bool
    {
        try {
            $sql = "UPDATE $this->nomeTabela SET status_for=? WHERE id_for = ?";
            $dados = array($status, $id);

            if (Db::preparar($sql)->execute($dados)) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function pesquisarPor($where)
    {
        $sql = "SELECT * FROM $this->nomeTabela $where";
        $query = Db::preparar($sql);
        $query->execute();

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }


    public function selecionarUmRegistroPorId($id)
    {
        $sql = "SELECT * FROM $this->nomeTabela WHERE id_for = ?";
        // $sql = "SELECT * FROM $this->nomeTabela WHERE $coluna = ?";
        $query = self::preparar($sql);
        $query->execute(array($id));
        $res = $query->fetch(PDO::FETCH_ASSOC);
        if ($res)
            return $res;
        return false;
    }
    public function atualizarDados($id) {}

    // public function atualizarDados($id)
    // {
    //     try {
    //         $this->setId($id);
    //         $sql = "UPDATE $this->nomeTabela SET desc_for=?, status_for=?, logo_for=? WHERE id_for = $id";

    //         $dados = array(
    //             $this->getDesc(),
    //             $this->getStatus(),
    //         );

    //         if (Db::preparar($sql)->execute($dados)) {
    //             if ($this->getId()) {
    //                 foreach ($this->tel as $value) {
    //                     (new Telefone(null, $this->getIdPes(), $value))->inserirDados();
    //                 }
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         } else {
    //             return false;
    //         }
    //     } catch (PDOException $e) {
    //         echo $e->getMessage();
    //     }
    // }


    public function getDesc(): string
    {
        return $this->desc_for;
    }

    public function getImg(): string
    {
        return $this->img;
    }
    public function setImg($img): void
    {
        $this->img = $img;
    }

    public function setDesc(string $desc_for): void
    {
        $this->desc_for = $desc_for;
    }
    public function getStatus(): string
    {
        return $this->status_for;
    }

    public function setStatus(string $status_for): void
    {
        $this->status_for = $status_for;
    }
    public function getId(): int
    {
        return $this->id_for;
    }

    public function setId(int $id_for): void
    {
        $this->id_for = $id_for;
    }
}