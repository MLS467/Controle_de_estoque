<?php

namespace sistema\Model;

require_once __DIR__ . "/../vendor/autoload.php";

use PDOException;
use PDO;
use sistema\Model\Crud;

class Pessoa extends Crud
{
    private ?int $id_pes;
    private ?string $nome_pes;
    private ?int $id_tipo_pessoa_fk;
    private ?string $status_pes;
    private ?string $img_pes;
    private ?array $tel;

    public function __construct(array $dados = null)
    {
        $this->nomeTabela = 'pessoa';
        $this->nome_pes = $dados['nome'] ?? null;
        $this->id_tipo_pessoa_fk = $dados['tipo'] ?? null;
        $this->status_pes = $dados['status'] ?? null;
        $this->img_pes = $dados['img'] ?? null;
        $this->tel = $dados['telefone'] ?? null;
    }

    public function inserirDados()
    {
        try {
            $sql = "INSERT INTO $this->nomeTabela (nome_pes, id_tipo_pessoa_fk, status_pes, img_pes) VALUES (?, ?, ?, ?)";
            $dados = array(
                $this->getNomePes(),
                $this->getIdTipoPessoaFk(),
                $this->getStatusPes(),
                $this->getImgRes()
            );

            if (Db::preparar($sql)->execute($dados)) {
                $this->setIdPes(Db::conectar()->lastInsertId());
                if ($this->getIdPes()) {
                    foreach ($this->tel as $value) {
                        (new Telefone(null, $this->getIdPes(), $value))->inserirDados();
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

    public function atualizarDados($id)
    {
        try {
            $this->setIdPes($id);
            $sql = "UPDATE $this->nomeTabela SET nome_pes=?, id_tipo_pessoa_fk=?, status_pes=?, img_pes=? WHERE id_pes = ?";

            $dados = array(
                $this->getNomePes(),
                $this->getIdTipoPessoaFk(),
                $this->getStatusPes(),
                $this->getImgRes(),
                $this->getIdPes()
            );

            if (Db::preparar($sql)->execute($dados)) {
                if ($this->getIdPes()) {
                    foreach ($this->tel as $value) {
                        (new Telefone(null, $this->getIdPes(), $value))->inserirDados();
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
            $sql = "UPDATE $this->nomeTabela SET status_pes=? WHERE id_pes = ?";
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

    public function pesquisarPor($where, $tipo)
    {
        $sql = "SELECT * FROM $this->nomeTabela $where";
        $query = Db::preparar($sql);
        $query->execute();

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getIdPes(): int
    {
        return $this->id_pes;
    }

    public function setIdPes(int $id_pes): void
    {
        $this->id_pes = $id_pes;
    }

    public function getNomePes(): string
    {
        return $this->nome_pes;
    }

    public function setNomePes(string $nome_pes): void
    {
        $this->nome_pes = $nome_pes;
    }

    public function getIdTipoPessoaFk(): int
    {
        return $this->id_tipo_pessoa_fk;
    }

    public function setIdTipoPessoaFk(int $id_tipo_pessoa_fk): void
    {
        $this->id_tipo_pessoa_fk = $id_tipo_pessoa_fk;
    }

    public function getStatusPes(): string
    {
        return $this->status_pes;
    }

    public function setStatusPes(string $status_pes): void
    {
        $this->status_pes = $status_pes;
    }

    public function getImgRes(): string
    {
        return $this->img_pes;
    }

    public function setImgRes(string $img_pes): void
    {
        $this->img_pes = $img_pes;
    }
}