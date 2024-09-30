<?php

namespace sistema\Model;

require_once __DIR__ . "/../vendor/autoload.php";

use PDO;
use PDOException;

class Db
{
    private static $pdo;


    public static function conectar()
    {
        if (isset(self::$pdo))
            return self::$pdo;
        else {
            try {

                self::$pdo = new PDO("mysql:host=" . SERVER . ";dbname=" . BANCO, USER, PASSWORD, [
                    PDO::ATTR_CASE => PDO::CASE_NATURAL,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
                ]);
                return self::$pdo;
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        }
    }

    public static function preparar($sql)
    {
        return self::conectar()->prepare($sql);
    }
}