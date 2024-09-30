-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/09/2024 às 03:24
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estoque`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `telefone`
--

CREATE TABLE `telefone` (
  `id_tel` int(11) NOT NULL,
  `id_usu_fk` int(11) DEFAULT NULL,
  `numero_tel` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `telefone`
--

INSERT INTO `telefone` (`id_tel`, `id_usu_fk`, `numero_tel`) VALUES
(5, 15, '53984687405'),
(6, 15, '539846874058'),
(7, 16, '539846874058'),
(8, 16, '5398468740522'),
(9, 16, '53984687405666');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id_tip_usu` int(11) NOT NULL,
  `desc_tip_usu` varchar(255) DEFAULT NULL,
  `nivel_tip_usu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id_tip_usu`, `desc_tip_usu`, `nivel_tip_usu`) VALUES
(1, 'super_usuario', 10),
(2, 'administrador', 5),
(3, 'usuario', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usu` int(11) NOT NULL,
  `nome_usu` varchar(255) DEFAULT NULL,
  `tipo_usu_fk` int(11) DEFAULT NULL,
  `status_usu` char(1) DEFAULT NULL,
  `img_usu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usu`, `nome_usu`, `tipo_usu_fk`, `status_usu`, `img_usu`) VALUES
(1, 'João Silva', 1, 'a', 'joao.jpg'),
(2, 'Maria Santos', 2, 'a', 'maria.jpg'),
(3, 'Carlos Oliveira', 1, 'i', 'carlos.jpg'),
(4, 'Ana Souza', 3, 'a', 'ana.jpg'),
(5, 'Lucas Pereira', 2, 'i', 'lucas.jpg'),
(15, 'Palhaço', 1, 'a', '3faf445a-907f-47a5-b17b-91682b2e1f03.jpg'),
(16, 'Maisson', 2, 'a', 'a22310842855f2accf5c21389732cce4.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `telefone`
--
ALTER TABLE `telefone`
  ADD PRIMARY KEY (`id_tel`),
  ADD KEY `id_usu_fk` (`id_usu_fk`);

--
-- Índices de tabela `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id_tip_usu`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usu`),
  ADD KEY `tipo_usu_fk` (`tipo_usu_fk`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `telefone`
--
ALTER TABLE `telefone`
  MODIFY `id_tel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id_tip_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `telefone`
--
ALTER TABLE `telefone`
  ADD CONSTRAINT `telefone_ibfk_1` FOREIGN KEY (`id_usu_fk`) REFERENCES `usuario` (`id_usu`);

--
-- Restrições para tabelas `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipo_usu_fk`) REFERENCES `tipo_usuario` (`id_tip_usu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
