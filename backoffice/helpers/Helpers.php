<?php

namespace sistema;

require_once __DIR__ . "/../vendor/autoload.php";

class Helpers
{

    public static function mostraObj($x): void
    {
        echo '<hr><br><pre>';
        print_r($x);
        echo '</pre><hr>';
    }
}