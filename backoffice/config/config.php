<?php
session_start();
date_default_timezone_set('America/Sao_Paulo');
header("Content-type: text/html; charset=utf-8");

define('SERVER', 'localhost');
define('USER', 'root');
define('PASSWORD', '');
define('BANCO', 'estoque');
define('TITULO', 'Controle de Estoque');