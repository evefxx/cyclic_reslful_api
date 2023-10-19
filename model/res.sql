-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2023 at 04:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `res`
--

CREATE TABLE `res` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `res`
--

INSERT INTO `res` (`id`, `name`, `type`, `img`, `createdAt`, `updatedAt`) VALUES
(8, 'KFC', 'kfgrrt', 'https://gumlet.assettype.com/ejan%2F2023-02%2Fbe2b919b-5688-4e9a-bf9c-919e9b28d8d3%2FmessageImage_1676874988909.jpg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6', '2023-07-24', '2023-07-27'),
(9, 'ไก่ยาง', 'บางตาล', 'https://images.deliveryhero.io/image/fd-th/LH/i1gi-hero.jpg?width=480&height=360&quality=45', '2023-07-19', '2023-07-19'),
(10, 'ไก่ยางบ้านแพร้ว', 'อร่อยมาก', 'https://images.aws.nestle.recipes/resized/e2233bca5d0dcc5529fe69caa93051f5_deep-fried-thai-chicken-wing-1_944_531.jpeg', '2023-07-19', '2023-07-19'),
(11, 'sdcsfvgh', 'asdfghjkjl', 'https://gumlet.assettype.com/ejan%2F2023-02%2Fbe2b919b-5688-4e9a-bf9c-919e9b28d8d3%2FmessageImage_1676874988909.jpg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6', '2023-07-21', '2023-07-27'),
(13, 'sdcsfvgh', 'cdfvbfngj', 'https://gumlet.assettype.com/ejan%2F2023-02%2Fbe2b919b-5688-4e9a-bf9c-919e9b28d8d3%2FmessageImage_1676874988909.jpg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6', '2023-07-27', '2023-07-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `res`
--
ALTER TABLE `res`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `res`
--
ALTER TABLE `res`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
