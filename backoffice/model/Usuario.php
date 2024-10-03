<?php

namespace sistema\Model;

require_once __DIR__ . "/../vendor/autoload.php";

use PDOException;
use sistema\Model\Crud;


class Usuario extends Crud
{

    private ?int $id_usu;
    private ?string $nome_usu;
    private ?int $tipo_usu_fk;
    private ?string $status_usu;
    private ?string $img_usu;
    private ?array $tel;

    public function __construct(array $dados = null)
    {
        $this->nomeTabela = 'usuario';
        $this->nome_usu = $dados['nome'] ?? null;
        $this->tipo_usu_fk = $dados['tipo'] ?? null;
        $this->status_usu = $dados['status'] ?? null;
        $this->img_usu = $dados['img'] ?? null;
        $this->tel = $dados['telefone'] ?? null;
    }

    public function inserirDados()
    {
        try {

            $sql = "INSERT INTO $this->nomeTabela VALUES (null,?,?,?,?)";
            $dados = array(
                $this->getNomeUsu(),
                $this->getTipoUsuFk(),
                $this->getStatusUsu(),
                $this->getImgUsu()
            );

            if (Db::preparar($sql)->execute($dados)) {
                $this->setIdUsu(Db::conectar()->lastInsertId());
                if ($this->getIdUsu()) {
                    foreach ($this->tel as $key => $value) {
                        (new Telefone(null, $this->getIdUsu(), $value))->inserirDados();
                    }
                    return true;
                } else
                    return false;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function atualizarDados($id)
    {
        try {
            $this->setIdUsu($id);

            $sql = "UPDATE $this->nomeTabela SET nome_usu=?,tipo_usu_fk=?,status_usu=?,img_usu=? WHERE id_usu = ?";

            $dados = array(
                $this->getNomeUsu(),
                $this->getTipoUsuFk(),
                $this->getStatusUsu(),
                $this->getImgUsu(),
                $this->getIdUsu()
            );

            if (Db::preparar($sql)->execute($dados)) {
                if ($this->getIdUsu()) {
                    foreach ($this->tel as $key => $value) {
                        (new Telefone(null, $this->getIdUsu(), $value))->inserirDados();
                    }
                    return true;
                } else
                    return false;
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
            $sql = "UPDATE $this->nomeTabela SET status_usu=? WHERE id_usu = ?";

            $dados = array(
                $status,
                $id
            );

            if (Db::preparar($sql)->execute($dados)) {
                return true;
            } else
                return false;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }



    public function getIdUsu(): int
    {
        return $this->id_usu;
    }

    public function setIdUsu(int $id_usu): void
    {
        $this->id_usu = $id_usu;
    }

    public function getNomeUsu(): string
    {
        return $this->nome_usu;
    }

    public function setNomeUsu(string $nome_usu): void
    {
        $this->nome_usu = $nome_usu;
    }

    public function getTipoUsuFk(): int
    {
        return $this->tipo_usu_fk;
    }

    public function setTipoUsuFk(int $tipo_usu_fk): void
    {
        $this->tipo_usu_fk = $tipo_usu_fk;
    }

    public function getStatusUsu(): string
    {
        return $this->status_usu;
    }

    public function setStatusUsu(string $status_usu): void
    {
        $this->status_usu = $status_usu;
    }

    public function getImgUsu(): string
    {
        return $this->img_usu;
    }

    public function setImgUsu(string $img_usu): void
    {
        $this->img_usu = $img_usu;
    }
}
