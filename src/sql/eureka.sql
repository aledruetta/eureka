-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 26, 2017 at 09:05 PM
-- Server version: 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 7.0.13-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eureka`
--

-- --------------------------------------------------------

--
-- Table structure for table `anuncio`
--

CREATE TABLE `anuncio` (
  `anuncioID` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `creado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `activo` int(1) UNSIGNED NOT NULL DEFAULT '1',
  `destacado` int(1) UNSIGNED NOT NULL DEFAULT '0',
  `tipoTrans` char(1) NOT NULL,
  `tipoProp` char(15) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `tipoDom` char(10) NOT NULL COMMENT 'Domicilio tipo',
  `nombre` varchar(50) NOT NULL COMMENT 'Domicilio nombre',
  `numero` int(5) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Domicilio número',
  `terreno` int(10) UNSIGNED NOT NULL,
  `habitaciones` int(1) UNSIGNED DEFAULT NULL,
  `cochera` int(1) UNSIGNED DEFAULT NULL,
  `pileta` int(1) UNSIGNED NOT NULL,
  `precio` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ciudad`
--

CREATE TABLE `ciudad` (
  `ciudadID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ciudad`
--

INSERT INTO `ciudad` (`ciudadID`) VALUES
('Arroyo Leyes'),
('Colastiné'),
('La Guardia'),
('Rincón'),
('Santa Fe (Capital)'),
('Santo Tomé');

-- --------------------------------------------------------

--
-- Table structure for table `tipoDomicilio`
--

CREATE TABLE `tipoDomicilio` (
  `tipoDomID` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoDomicilio`
--

INSERT INTO `tipoDomicilio` (`tipoDomID`) VALUES
('Avenida'),
('Calle'),
('Cortada'),
('Diagonal'),
('Pasaje'),
('Ruta');

-- --------------------------------------------------------

--
-- Table structure for table `tipoPropiedad`
--

CREATE TABLE `tipoPropiedad` (
  `tipoPropID` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoPropiedad`
--

INSERT INTO `tipoPropiedad` (`tipoPropID`) VALUES
('Casa'),
('Cochera'),
('Departamento'),
('Galpón'),
('Local'),
('Oficina'),
('Quinta'),
('Terreno');

-- --------------------------------------------------------

--
-- Table structure for table `tipoTransaccion`
--

CREATE TABLE `tipoTransaccion` (
  `tipoTransID` char(1) NOT NULL,
  `nombre` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoTransaccion`
--

INSERT INTO `tipoTransaccion` (`tipoTransID`, `nombre`) VALUES
('A', 'Alquiler'),
('V', 'Venta');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anuncio`
--
ALTER TABLE `anuncio`
  ADD PRIMARY KEY (`anuncioID`),
  ADD KEY `CIUDAD` (`ciudad`) USING BTREE,
  ADD KEY `TIPOTRANS` (`tipoTrans`) USING BTREE,
  ADD KEY `TIPOPROP` (`tipoProp`) USING BTREE,
  ADD KEY `TIPODOM` (`tipoDom`) USING BTREE;

--
-- Indexes for table `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`ciudadID`);

--
-- Indexes for table `tipoDomicilio`
--
ALTER TABLE `tipoDomicilio`
  ADD PRIMARY KEY (`tipoDomID`);

--
-- Indexes for table `tipoPropiedad`
--
ALTER TABLE `tipoPropiedad`
  ADD PRIMARY KEY (`tipoPropID`);

--
-- Indexes for table `tipoTransaccion`
--
ALTER TABLE `tipoTransaccion`
  ADD PRIMARY KEY (`tipoTransID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anuncio`
--
ALTER TABLE `anuncio`
  MODIFY `anuncioID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `anuncio`
--
ALTER TABLE `anuncio`
  ADD CONSTRAINT `fk_anuncio_has_ciudad` FOREIGN KEY (`ciudad`) REFERENCES `ciudad` (`ciudadID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_anuncio_has_tipoDom` FOREIGN KEY (`tipoDom`) REFERENCES `tipoDomicilio` (`tipoDomID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_anuncio_has_tipoProp` FOREIGN KEY (`tipoProp`) REFERENCES `tipoPropiedad` (`tipoPropID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_anuncio_has_tipoTrans` FOREIGN KEY (`tipoTrans`) REFERENCES `tipoTransaccion` (`tipoTransID`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
