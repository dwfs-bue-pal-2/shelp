DROP DATABASE IF EXISTS `shelp`;
CREATE DATABASE `shelp`;
USE `shelp`;
DROP TABLE IF EXISTS `shops`;

CREATE TABLE `shops`
(
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(50) NOT NULL,
`image` varchar(500),
`address` varchar(500) NOT NULL,
`lat` FLOAT(10,6) NOT NULL DEFAULT 0,
`lon` FLOAT(10,6) NOT NULL DEFAULT 0,
`phone` int(30),
`type` varchar(30),
`description` varchar(700),
`hours` varchar(50),
`active` TINYINT(1) DEFAULT 1,
  PRIMARY KEY(`id`)
)  ENGINE=InnoDB DEFAULT CHARSET=UTF8;
LOCK TABLES `shops` WRITE;
INSERT INTO `shops`
VALUES
    (1, 'Chori', 11111111111111112, 'Thames 1653, CABA.',-34.587678, -58.430562, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (2, 'Osaka', 11111111111111112, 'Soler 5608, CABA.',-34.580588, -58.432815, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (3, 'Koh Lanta', 11111111111111112, 'Gorriti 4647, CABA.',-34.591637, -58.427352, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (4, 'La choza de Gascon', 11111111111111112, 'Gascon 1701, CABA.',-34.589760, -58.422216, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (5, 'Cooperativa Ale Ale', 11111111111111112, 'José A. Cabrera 4270, CABA.',-34.594836, -58.425406, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (6, 'Sarkis', 11111111111111112, 'Thames 1101, CABA.',-34.591219, -58.436129, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (7, 'Cantina Don Chicho En Palermo', 11111111111111112, 'Honduras 5710, CABA.',-34.583051, -58.437633, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (8, 'El Peron Peron', 11111111111111112, 'Angel Justiniano Carranza 2225, CABA.',-34.578447, -58.433532, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (9, 'Crizia Restaurante', 11111111111111112, 'Gorriti 5143, CABA.',-34.588211, -58.432533, 1139669857, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1),
    (10, '1810 Cocina Regional', 11111111111111112, 'Julian Alvarez 1998, CABA.',-34.589168, -58.419248, 1148650030, 'Restaurant', 'Chori, es un pequeño lugar de Palermo que homenajea al sándwich emblema de la tradición parrillera argentina, el choripán.', 'Martes a Domingo. 12:30 a 00:30', 1);
UNLOCK TABLES;

USE `shelp`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users`
(
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

LOCK TABLES `users` WRITE;
INSERT INTO `users`
VALUES
  (1,'A.J. Cook'),
  (2,'Aaron Eckhart'),
  (3,'Aaron Murphy'),
  (4,'Aaron Stanford'),
  (5,'Abdolgani Yousefrazi'),
  (6,'Abel Ayala'),
  (7,'Abigail Breslin');
UNLOCK TABLES;

USE `shelp`;

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `shop_id` int(11) unsigned NOT NULL,
  `score` int(11) NOT NULL,
  `comment` varchar(240),
  `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `active` TINYINT (1) DEFAULT 1,
  PRIMARY KEY(`id`),
  KEY `reviews_user` (`user_id`),
  CONSTRAINT `reviews_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  KEY `reviews_shops` (`shop_id`),
  CONSTRAINT `shops_user` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`) 
)  ENGINE=InnoDB DEFAULT CHARSET=UTF8;



LOCK TABLES `reviews` WRITE;
INSERT INTO `reviews`
VALUES
    (1,1,1,3,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (2,2,4,5,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (3,2,2,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (4,4,3,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),  
    (5,1,7,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),   
    (6,5,7,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),   
    (7,7,8,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),   
    (8,6,1,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1), 
    (9,6,5,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),  
    (10,6,6,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),   
    (11,6,9,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (12,1,1,3,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (13,2,1,5,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (14,2,2,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),
    (15,4,1,4,'Lorem Impsum review review Lorem Impsum review review Lorem Impsum review review', CURRENT_TIMESTAMP, 1),  
    (16,1,7,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),   
    (17,5,1,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1),    
    (18,6,10,4,'Lorem Impsum review review', CURRENT_TIMESTAMP, 1);   
UNLOCK TABLES;