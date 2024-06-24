-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2024 a las 20:22:01
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
  `ID_Robot` int(11) NOT NULL,
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

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`ID_Ruta`, `ID_Usuario`, `Fecha`, `Cantidad_de_Personas`, `Personas_Ilesas`, `Personas_Heridas`, `Cantidad_de_Zonas_Peligrosas`) VALUES
(100, 1212, '2024-06-13', 8, 5, 3, 2),
(101, 1222, '2024-06-19', 10, 8, 2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensores`
--

CREATE TABLE `sensores` (
  `ID_Sensor` int(11) NOT NULL,
  `ID_Robot` int(11) NOT NULL,
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
  `ID_Robot` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Contrasenya` varchar(60) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `Región` varchar(20) NOT NULL,
  `Comuna` varchar(20) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID_Usuario`, `ID_Robot`, `Nombre`, `Contrasenya`, `Correo`, `Región`, `Comuna`, `is_admin`) VALUES
(1212, 2224, 'Thomas', '1234', 'thomas.molina@yahoo.es', 'Maule', 'Talca', 0),
(1222, 2224, 'Benja', '0000', 'benja.diazu@yahoo.es', 'Magallanes', 'Porvenir', 1),
(1414, 2224, 'Vicente', '$2b$12$ue.MyoVQJp0wb', 'lesos.cl@yahoo.es', 'Metropolitana', 'Santiago', 0);

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
  ADD KEY `ID_Robot` (`ID_Robot`);

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
