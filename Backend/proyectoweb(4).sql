-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2024 a las 00:54:44
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `robot`
--

CREATE TABLE `robot` (
  `ID_Robot` int(11) NOT NULL DEFAULT 2224,
  `Nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `robot`
--

INSERT INTO `robot` (`ID_Robot`, `Nombre`) VALUES
(2224, 'Andino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `ID_Ruta` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Cantidad_de_Personas` int(11) NOT NULL,
  `Personas_Ilesas` int(11) NOT NULL,
  `Personas_Heridas` int(11) NOT NULL,
  `Cantidad_de_Zonas_Peligrosas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensores`
--

CREATE TABLE `sensores` (
  `ID_Sensor` int(11) NOT NULL,
  `ID_Robot` int(11) NOT NULL DEFAULT 2224,
  `Datos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Datos`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sensores`
--

INSERT INTO `sensores` (`ID_Sensor`, `ID_Robot`, `Datos`) VALUES
(1, 2224, '{\r\n\"algo\":2,\r\n\"algomas\":\"string\"\r\n}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_Usuario` int(11) NOT NULL,
  `ID_Robot` int(11) NOT NULL DEFAULT 2224,
  `Nombre` varchar(20) NOT NULL,
  `Contrasenya` varchar(60) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `RUT` varchar(15) NOT NULL,
  `Región` int(2) NOT NULL,
  `Comuna` varchar(20) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID_Usuario`, `ID_Robot`, `Nombre`, `Contrasenya`, `Correo`, `RUT`, `Región`, `Comuna`, `is_admin`) VALUES
(1415, 2224, 'Benjamín', '$2b$12$lvdhRx2s99csRYXcSD0zS.t3NXBH1zmS13vAj81Jiz4l5kfmc9Hrq', 'benja.diazu@yahoo.es', '21125395-9', 6, 'Rancagua', 1),
(1416, 2224, 'Thomas', '$2b$12$ZnNOFciDhxDFdRPa9B/VhOW1hpeN1ZEmJPuKou.KGYjRRzjemaxy6', 'thomas.molina@yahoo.es', '20805942-4', 5, 'Putaendo', 1),
(1417, 2224, 'Vicente', '$2b$12$seCtyJprndKTtSDC464fYeYjL3x/1s13vCg.8a.tbuhoK5x8Zkz.e', 'vicente.mercado@yahoo.es', '21151511-2', 5, 'Quilpué', 0),
(1418, 2224, 'test', '$2b$12$t7ZvwQrI0aDgnGX1GM3t/up6rbR/BhEXkj1yxS19kjXXkL58LejAO', 'test.prueba123@yahoo.es', '00000000-K', 7, 'Talca', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `robot`
--
ALTER TABLE `robot`
  ADD PRIMARY KEY (`ID_Robot`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`ID_Ruta`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indices de la tabla `sensores`
--
ALTER TABLE `sensores`
  ADD PRIMARY KEY (`ID_Sensor`),
  ADD KEY `ID_Robot` (`ID_Robot`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_Usuario`),
  ADD UNIQUE KEY `Correo` (`Correo`,`RUT`),
  ADD KEY `ID_Robot` (`ID_Robot`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `ID_Ruta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `sensores`
--
ALTER TABLE `sensores`
  MODIFY `ID_Sensor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1419;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD CONSTRAINT `rutas_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `usuarios` (`ID_Usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sensores`
--
ALTER TABLE `sensores`
  ADD CONSTRAINT `sensores_ibfk_1` FOREIGN KEY (`ID_Robot`) REFERENCES `robot` (`ID_Robot`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ID_Robot`) REFERENCES `robot` (`ID_Robot`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
