-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2019 at 09:09 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tourmanagement`
--
create database tourmanagement;
use tourmanagement;
-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `tripid` int(11) DEFAULT NULL,
  `food` int(11) DEFAULT NULL,
  `fuel` int(11) DEFAULT NULL,
  `hotel` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`tripid`, `food`, `fuel`, `hotel`, `total`) VALUES
(10, 4, 4, 4, 444),
(12, 1, 1, 1, 111),
(13, 3, 3, 3, 333),
(14, 3, 3, 3, 333),
(15, 23, 23, 23, 232323),
(16, 12, 22, 22, 56),
(17, 444, 55, 44, 543);

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE `bus` (
  `ownedbusno` int(11) NOT NULL,
  `tripid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`ownedbusno`, `tripid`) VALUES
(1, 10),
(1, 12),
(1, 13),
(22, 14),
(22, 15),
(22, 16),
(22, 17);

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `cnic` int(11) NOT NULL,
  `tripid` int(11) DEFAULT NULL,
  `amtPaid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`cnic`, `tripid`, `amtPaid`) VALUES
(111, 16, 5),
(123, 15, 19360),
(123, 16, 5),
(444, 16, 5);

-- --------------------------------------------------------

--
-- Table structure for table `destinations`
--

CREATE TABLE `destinations` (
  `PostalCode` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `destinations`
--

INSERT INTO `destinations` (`PostalCode`, `city`, `province`) VALUES
(1, 'lahore', 'punjab'),
(2, 'isl', 'isl'),
(3, 'jkl', 'a'),
(4, 'h', 'a'),
(5, 'aaa', 'jjj');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `tripid` int(11) DEFAULT NULL,
  `foodn` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`tripid`, `foodn`) VALUES
(1, NULL),
(1, 'aaa'),
(10, 'aaa'),
(12, 'aaa'),
(13, 'biryani'),
(14, 'samosa'),
(15, 'samosa'),
(16, 'biryani'),
(17, 'biryani');

-- --------------------------------------------------------

--
-- Table structure for table `foodname`
--

CREATE TABLE `foodname` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `foodname`
--

INSERT INTO `foodname` (`id`, `name`) VALUES
(1, 'samosa'),
(2, 'biryani');

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `DestPostalCode` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `noOfRooms` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ownedbus`
--

CREATE TABLE `ownedbus` (
  `busno` int(11) NOT NULL,
  `capacity` int(11) DEFAULT NULL,
  `drivername` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ownedbus`
--

INSERT INTO `ownedbus` (`busno`, `capacity`, `drivername`) VALUES
(1, 1, 'a'),
(22, 2, 's');

-- --------------------------------------------------------

--
-- Table structure for table `point`
--

CREATE TABLE `point` (
  `tripid` int(11) DEFAULT NULL,
  `startpostal` int(11) DEFAULT NULL,
  `endpostal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `point`
--

INSERT INTO `point` (`tripid`, `startpostal`, `endpostal`) VALUES
(1, 1, 2),
(2, 2, 1),
(13, 1, 2),
(14, 2, 2),
(15, 3, 2),
(16, 1, 3),
(17, 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE `trips` (
  `id` int(11) NOT NULL,
  `reqPeople` int(11) DEFAULT NULL,
  `noOfdays` int(11) DEFAULT NULL,
  `departureTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trips`
--

INSERT INTO `trips` (`id`, `reqPeople`, `noOfdays`, `departureTime`) VALUES
(1, 2, 2, '2019-06-18 07:11:00'),
(2, 2, 2, '2019-06-21 22:22:00'),
(3, 2, 2, '2019-06-28 00:00:00'),
(4, 2, 2, NULL),
(5, 2, 2, '2019-06-09 00:00:00'),
(6, 2, 2, '2019-06-09 00:00:00'),
(7, 2, 21, NULL),
(8, 2, 2, '2019-06-09 21:56:35'),
(9, 2, 2, '2019-06-22 00:00:00'),
(10, 1, 1, '0000-00-00 00:00:00'),
(11, 1, 2, '0000-00-00 00:00:00'),
(12, 1, 1, '0000-00-00 00:00:00'),
(13, 1, 1, '2019-06-21 00:00:00'),
(14, 2, 2, '0000-00-00 00:00:00'),
(15, 12, 12, '2019-09-09 12:00:00'),
(16, 11, 11, '2019-09-08 21:00:00'),
(17, 222, 22, '2019-09-09 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `cnic` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`cnic`, `name`) VALUES
(111, 'qqq'),
(123, 'hamza'),
(444, 'hamza'),
(44444, 'kkk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD KEY `tripid` (`tripid`);

--
-- Indexes for table `bus`
--
ALTER TABLE `bus`
  ADD KEY `tripid` (`tripid`),
  ADD KEY `ownedbusno` (`ownedbusno`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD KEY `tripid` (`tripid`);

--
-- Indexes for table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`PostalCode`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD KEY `tripid` (`tripid`),
  ADD KEY `fk` (`foodn`);

--
-- Indexes for table `foodname`
--
ALTER TABLE `foodname`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`name`),
  ADD KEY `DestPostalCode` (`DestPostalCode`);

--
-- Indexes for table `ownedbus`
--
ALTER TABLE `ownedbus`
  ADD PRIMARY KEY (`busno`);

--
-- Indexes for table `point`
--
ALTER TABLE `point`
  ADD KEY `tripid` (`tripid`),
  ADD KEY `startpostal` (`startpostal`),
  ADD KEY `endpostal` (`endpostal`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`cnic`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `foodname`
--
ALTER TABLE `foodname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`tripid`) REFERENCES `trips` (`id`);

--
-- Constraints for table `bus`
--
ALTER TABLE `bus`
  ADD CONSTRAINT `bus_ibfk_1` FOREIGN KEY (`tripid`) REFERENCES `trips` (`id`);

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`tripid`) REFERENCES `trips` (`id`);

--
-- Constraints for table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `food_ibfk_1` FOREIGN KEY (`tripid`) REFERENCES `trips` (`id`);

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`DestPostalCode`) REFERENCES `destinations` (`PostalCode`);

--
-- Constraints for table `point`
--
ALTER TABLE `point`
  ADD CONSTRAINT `point_ibfk_1` FOREIGN KEY (`tripid`) REFERENCES `trips` (`id`),
  ADD CONSTRAINT `point_ibfk_2` FOREIGN KEY (`startpostal`) REFERENCES `destinations` (`PostalCode`),
  ADD CONSTRAINT `point_ibfk_3` FOREIGN KEY (`endpostal`) REFERENCES `destinations` (`PostalCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
