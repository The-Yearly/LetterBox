/*M!999999\- enable the sandbox mode */
-- MariaDB dump 10.19-11.6.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: letterboxd
-- ------------------------------------------------------
-- Server version	11.6.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `actors`
--
create Database letterboxd;
use letterboxd;
DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actors` (
  `actor_id` int(11) NOT NULL AUTO_INCREMENT,
  `actor_name` varchar(1000) DEFAULT NULL,
  `actor_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`actor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES
(1,'Sean Bean',NULL),
(2,'Michelle Fairley',NULL),
(3,'Kit Harington',NULL),
(4,'Sophie Turner',NULL),
(5,'Maisie Williams',NULL),
(6,'Isaac Hempstead Wright',NULL),
(7,'Richard Madden',NULL),
(8,'Art Parkinson',NULL),
(9,'Peter Dinklage',NULL),
(10,'Lena Headey',NULL),
(11,'Nikolaj Coster-Waldau',NULL),
(12,'Charles Dance',NULL),
(13,'Emilia Clarke',NULL),
(14,'Iain Glen',NULL),
(15,'Mark Addy',NULL),
(16,'Stephen Dillane',NULL),
(17,'Kerry Ingram',NULL),
(18,'Gethin Anthony',NULL),
(19,'Marlon Brando',NULL),
(20,'Al Pacino',NULL),
(21,'James Caan',NULL),
(22,'Robert Duvall',NULL),
(23,'Diane Keaton',NULL),
(24,'Talia Shire',NULL),
(25,'John Cazale',NULL),
(26,'Sterling Hayden',NULL),
(27,'Richard Conte',NULL),
(28,'Abe Vigoda',NULL),
(29,'Shameik Moore',NULL),
(30,'Jake Johnson',NULL),
(31,'Hailee Steinfeld',NULL),
(32,'Mahershala Ali',NULL),
(33,'Brian Tyree Henry',NULL),
(34,'Lily Tomlin',NULL),
(35,'Lauren Vélez',NULL),
(36,'John Mulaney',NULL),
(37,'Kimiko Glenn',NULL),
(38,'Nicolas Cage',NULL),
(39,'Liev Schreiber',NULL),
(40,'Joseph Gordon-Levitt',NULL),
(41,'Zooey Deschanel',NULL),
(42,'Geoffrey Arend',NULL),
(43,'Chloë Grace Moretz',NULL),
(44,'Matthew Gray Gubler',NULL),
(45,'Clark Gregg',NULL),
(46,'Patricia Belcher',NULL),
(47,'Rachel Boston',NULL),
(48,'Jesse Eisenberg',NULL),
(49,'Mark Ruffalo',NULL),
(50,'Woody Harrelson',NULL),
(51,'Isla Fisher',NULL),
(52,'Dave Franco',NULL),
(53,'Mélanie Laurent',NULL),
(54,'Morgan Freeman',NULL),
(55,'Michael Caine',NULL),
(56,'Common',NULL),
(57,'Andrew Garfield',NULL),
(58,'Justin Timberlake',NULL),
(59,'Rooney Mara',NULL),
(60,'Armie Hammer',NULL),
(61,'Josh Pence',NULL),
(62,'Brenda Song',NULL),
(63,'Dakota Johnson',NULL),
(64,'David Selby',NULL),
(65,'John Getz',NULL),
(66,'Matt Damon',NULL),
(67,'Christian Bale',NULL),
(68,'Jon Bernthal',NULL),
(69,'Caitriona Balfe',NULL),
(70,'Noah Jupe',NULL),
(71,'Tracy Letts',NULL),
(72,'Josh Lucas',NULL),
(73,'Ray McKinnon',NULL),
(74,'Bob McCabe',NULL),
(75,'Remo Girone',NULL),
(76,'Benedict Cumberbatch',NULL),
(77,'Keira Knightley',NULL),
(78,'Matthew Goode',NULL),
(79,'Rory Kinnear',NULL),
(80,'Mark Strong',NULL),
(81,'Allen Leech',NULL),
(82,'Matthew Beard',NULL),
(83,'Tom Holmes',NULL),
(84,'Matthew McFadden',NULL),
(85,'Peter Weller',NULL),
(86,'Nancy Allen',NULL),
(87,'Dan O\'Herlihy',NULL),
(88,'Ronny Cox',NULL),
(89,'Kurtwood Smith',NULL),
(90,'Miguel Ferrer',NULL),
(91,'Felton Perry',NULL),
(92,'Ray Wise',NULL),
(93,'Paul McCrane',NULL),
(94,'Ronnie Claire Edwards',NULL),
(95,'John Travolta',NULL),
(96,'Uma Thurman',NULL),
(97,'Samuel L. Jackson',NULL),
(98,'Bruce Willis',NULL),
(99,'Ving Rhames',NULL),
(100,'Harvey Keitel',NULL),
(101,'Tim Roth',NULL),
(102,'Amanda Plummer',NULL),
(103,'Maria de Medeiros',NULL),
(104,'Christopher Walken',NULL);
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alternate_title`
--

DROP TABLE IF EXISTS `alternate_title`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alternate_title` (
  `title_id` int(11) NOT NULL AUTO_INCREMENT,
  `title_name` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`title_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternate_title`
--

LOCK TABLES `alternate_title` WRITE;
/*!40000 ALTER TABLE `alternate_title` DISABLE KEYS */;
INSERT INTO `alternate_title` VALUES
(1,'Game of Thrones'),
(2,'Steve Jobs'),
(3,'The Godfather'),
(4,'Spider-Man: Into the Spider-Verse'),
(5,'(500) Days of Summer'),
(6,'Now You See Me'),
(7,'The Facebook Movie'),
(8,'Le Mans \'66'),
(9,'The Imitation Game'),
(10,'Robocop'),
(11,'Pulp Fiction: The Golden Palm Winner');
/*!40000 ALTER TABLE `alternate_title` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinematographys`
--

DROP TABLE IF EXISTS `cinematographys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinematographys` (
  `cinematography_id` int(11) NOT NULL AUTO_INCREMENT,
  `cinematography_name` varchar(1000) DEFAULT NULL,
  `cine_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`cinematography_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinematographys`
--

LOCK TABLES `cinematographys` WRITE;
/*!40000 ALTER TABLE `cinematographys` DISABLE KEYS */;
INSERT INTO `cinematographys` VALUES
(1,'Fabian Wagner',NULL),
(2,'Jonathan Freeman',NULL),
(3,'Alwin H. Küchler',NULL),
(4,'Gordon Willis',NULL),
(5,'nill',NULL),
(6,'Eric Steelberg',NULL),
(7,'Larry Fong',NULL),
(8,'Jeff Cronenweth',NULL),
(9,'Phedon Papamichael',NULL),
(10,'Óscar Faura',NULL),
(11,'Jost Vacano',NULL),
(12,'Andrzej Sekula',NULL);
/*!40000 ALTER TABLE `cinematographys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countrys`
--

DROP TABLE IF EXISTS `countrys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countrys` (
  `country_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countrys`
--

LOCK TABLES `countrys` WRITE;
/*!40000 ALTER TABLE `countrys` DISABLE KEYS */;
INSERT INTO `countrys` VALUES
(1,'United States'),
(2,'United Kingdom');
/*!40000 ALTER TABLE `countrys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `directors`
--

DROP TABLE IF EXISTS `directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `directors` (
  `dir_id` int(11) NOT NULL AUTO_INCREMENT,
  `dir_name` varchar(1000) DEFAULT NULL,
  `dir_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`dir_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `directors`
--

LOCK TABLES `directors` WRITE;
/*!40000 ALTER TABLE `directors` DISABLE KEYS */;
INSERT INTO `directors` VALUES
(1,'Alan Taylor',NULL),
(2,'David Nutter',NULL),
(3,'Miguel Sapochnik',NULL),
(4,'Mark Mylod',NULL),
(5,'Danny Boyle',NULL),
(6,'Francis Ford Coppola',NULL),
(7,'Bob Persichetti',NULL),
(8,'Peter Ramsey',NULL),
(9,'Rodney Rothman',NULL),
(10,'Marc Webb',NULL),
(11,'Louis Leterrier',NULL),
(12,'David Fincher',NULL),
(13,'James Mangold',NULL),
(14,'Morten Tyldum',NULL),
(15,'Paul Verhoeven',NULL),
(16,'Quentin Tarantino',NULL);
/*!40000 ALTER TABLE `directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editors`
--

DROP TABLE IF EXISTS `editors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `editors` (
  `editor_id` int(11) NOT NULL AUTO_INCREMENT,
  `editor_name` varchar(1000) DEFAULT NULL,
  `edi_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`editor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editors`
--

LOCK TABLES `editors` WRITE;
/*!40000 ALTER TABLE `editors` DISABLE KEYS */;
INSERT INTO `editors` VALUES
(1,'Katie Weiland',NULL),
(2,'Tim Porter',NULL),
(3,'Crispin Green',NULL),
(4,'Elliot Graham',NULL),
(5,'William Reynolds',NULL),
(6,'Peter Zinner',NULL),
(7,'William Reynolds',NULL),
(8,'Peter Zinner',NULL),
(9,'Alan Edward Bell',NULL),
(10,'Robert Leighton',NULL),
(11,'Vincent Tabaillon',NULL),
(12,'Angus Wall',NULL),
(13,'Kirk Baxter',NULL),
(14,'Andrew Buckland',NULL),
(15,'Michael McCusker',NULL),
(16,'William Goldenberg',NULL),
(17,'Frank J. Urioste',NULL),
(18,'Andrzej Sekula',NULL);
/*!40000 ALTER TABLE `editors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `following_followers`
--

DROP TABLE IF EXISTS `following_followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `following_followers` (
  `follower_id` int(11) NOT NULL,
  `following_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `following_followers`
--

LOCK TABLES `following_followers` WRITE;
/*!40000 ALTER TABLE `following_followers` DISABLE KEYS */;
INSERT INTO `following_followers` VALUES
(3,1),
(3,2),
(4,3),
(5,3),
(3,4),
(3,5),
(3,6),
(4,6),
(3,7),
(4,7),
(2,8),
(3,8),
(4,8),
(3,9),
(4,9),
(3,10),
(4,10),
(1,8),
(2,1),
(2,11);
/*!40000 ALTER TABLE `following_followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `genre_id` int(11) NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES
(1,'Drama'),
(2,'Fantasy'),
(3,'Adventure'),
(4,'Biography'),
(5,'Crime'),
(6,'Animation'),
(7,'Action'),
(8,'Romance'),
(9,'Comedy'),
(10,'Thriller'),
(11,'Mystery');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `language_id` int(11) NOT NULL AUTO_INCREMENT,
  `language_name` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES
(1,'English'),
(2,'Dothraki'),
(3,'High Valyrian');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lists`
--

DROP TABLE IF EXISTS `lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lists` (
  `list_id` int(11) NOT NULL AUTO_INCREMENT,
  `list_user_id` int(11) NOT NULL,
  `list_title` varchar(500) NOT NULL,
  `list_bio` varchar(1000) NOT NULL,
  `list_likes` int(11) NOT NULL,
  PRIMARY KEY (`list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lists`
--

LOCK TABLES `lists` WRITE;
/*!40000 ALTER TABLE `lists` DISABLE KEYS */;
INSERT INTO `lists` VALUES
(1,1,'List 1','List 1 is Good',100),
(2,1,'List 2','The world around us is a constant source of inspiration, filled with vibrant colors, intricate patterns, and endless possibilities. From the gentle rustling of leaves in the wind to the boundless expanse of a starry sky, nature reminds us of the beauty in simplicity and the power of resilience. In our everyday lives, moments of joy can be found in the smallest details—a smile shared with a stranger, the aroma of fresh coffee, or the warmth of sunlight streaming through a window. Life, with all its complexities, is a tapestry woven with experiences that shape us, teach us, and help us grow.',100),
(3,2,'List 3','List 3 is Good',100),
(4,4,'List 4','List 1 is Good',100),
(5,5,'List 5','List 2 is Good',100),
(6,6,'List 6','List 3 is Good',100),
(7,7,'List 7','List 1 is Good',100),
(8,8,'List 8','List 2 is Good',100),
(9,9,'List 9','List 3 is Good',100),
(10,10,'List 10','List 3 is Good',100);
/*!40000 ALTER TABLE `lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_title` varchar(125) DEFAULT NULL,
  `movie_poster` varchar(300) DEFAULT NULL,
  `movie_banner` varchar(300) DEFAULT NULL,
  `movie_views` int(11) DEFAULT NULL,
  `movie_like` int(11) DEFAULT NULL,
  `movie_views_this_week` int(11) DEFAULT NULL,
  `movie_like_this_week` int(11) DEFAULT NULL,
  `desc_title` varchar(100) DEFAULT NULL,
  `descr` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES
(1,'Game Of Thrones','https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg','https://pyxis.nymag.com/v1/imgs/4d1/dcf/a33209cb40d7dbd980ba6cdceddc56b0f6-got-poster-s8-2.rsocial.w1200.jpg',10000,3000,1000,3000,'Winter Is Coming: The Battle for the Iron Throne','A land torn by war, betrayal, and power struggles—where only the strongest survive and the ruthless reign supreme.'),
(2,'Steve Jobs','https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11491197_p_v8_as.jpg','https://aambar.wordpress.com/wp-content/uploads/2015/12/steve-jobs-movie-poster-header.png',9999,40000,9999,40000,'Winter Is Coming: The Battle for the Iron Throne','A land torn by war, betrayal, and power struggles—where only the strongest survive and the ruthless reign supreme.'),
(3,'Godfather','https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg','https://communist.red/wp-content/uploads/2022/08/godfather.png',8888,3333,8888,3333,'The Godfather: A Legacy of Power and Betrayal','A masterful tale of family, crime, and loyalty, where the Corleone family navigates a dangerous world of organized crime, revenge, and moral dilemmas—shaping the fate of a dynasty in the process.'),
(4,'Spider-Man: Into the Spider-Verse','https://resizing.flixster.com/xVd9PLVkH69dU3Yo9XLSjdMeu1M=/206x305/v2/https://resizing.flixster.com/_l50Ahm00b-RO9Ao2s3AyMjUWiU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExYTZmMWFkLWViZWItNDNhMS1iZTEwLTcxODk1YTk3NWFhMy53ZWJw','https://media.aintitcool.com/media/uploads/2018/big_eyes/spider-verse-banner-review.jpg',8888,3333,8888,3333,'Into the Spider-Verse: A Multiverse of Heroes','A groundbreaking animated adventure where multiple versions of Spider-Man from alternate realities come together to face an unprecedented threat, redefining the boundaries of heroism and identity.'),
(5,'500 Days of Summer','https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p193428_p_v8_bb.jpg','https://miro.medium.com/v2/format:webp/1*Soa8CUMJCRsgAA36RPnHNQ@2x.jpeg',8888,3333,8888,3333,'500 Days of Summer: Love, Loss, and Reality','A nonlinear exploration of love, heartbreak, and self-discovery, as one man reflects on his relationship with a woman who doesn’t believe in true love, challenging expectations and emotions along the way.'),
(6,'Now You See Me','https://images-cdn.ubuy.co.in/635f6aafd6e4121a81607274-posters-usa-now-you-see-me-movie.jpg','https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisqVH5M5JZnrDmoq-8DnkIL8B7kWpGVObh87OucxobjjHGe5DO3UYkOvoQY5P2I-TbUQNG74p1H870z8fn8rT9J03i8z15QTi0OgcEzZviX-6jWELHX9AnFo3znS3R7H3ysa6rniFK69c/s640/now-you-see-me-wallpaper-7films.jpg',1334,1230,1334,1230,'Now You See Me: Masters of Illusion and Deception','A thrilling heist film where a group of talented illusionists pull off daring bank robberies during their live performances, leaving law enforcement and audiences alike questioning what\'s real and what\'s trickery.'),
(7,'The Social Network','https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIS8khrfNkPOudNQkxVlULk8MPfKsyMouvKA&s',1124,1130,1124,1130,'The Social Network: The Birth of Facebook and the Cost of Ambition','A compelling drama that chronicles the rise of Facebook and the tumultuous journey of its creator, Mark Zuckerberg, revealing the personal and legal battles that shaped the world’s most influential social media platform.'),
(8,'Ford v Ferrari','https://lumiere-a.akamaihd.net/v1/images/image_a39a0e25.jpeg?region=0%2C0%2C800%2C1200','https://media.licdn.com/dms/image/v2/D4D12AQGrkXO6EQt7gg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1664723998086?e=1740614400&v=beta&t=qgX_oCKHobkuVy8RQu_fdkHkyXgztBL_g-ymRA0tWw8',1024,1000,1024,1000,'Ford v Ferrari: The Battle for Speed and Glory','A high-octane drama about the fierce rivalry between Ford and Ferrari, as an unlikely partnership between a maverick American car designer and a British driver aims to dethrone Ferrari at the 24 Hours of Le Mans race, defying all odds.'),
(9,'The Imitation Game','https://resizing.flixster.com/ArU-IMVHwwAnVBm05Sv8a0UmSrs=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10771057_p_v13_as.jpg','https://images.squarespace-cdn.com/content/v1/5db9d91c380e6346d8a028ee/00e75f3d-34ed-4051-9ef6-b87ccad301ed/Untitled+design+%287%29.png?format=2500w',1424,1200,1424,1200,'The Imitation Game: Breaking Codes, Changing History','A gripping biographical drama that tells the story of Alan Turing, the brilliant mathematician who cracked the Enigma code during World War II, while facing personal and societal challenges that would define his legacy.'),
(10,'RoboCop','https://m.media-amazon.com/images/S/pv-target-images/5a697e3a0b26f8130c24252f54ded2858a482c841d64307f50095e553b8ad07b.jpg','https://mir-s3-cdn-cf.behance.net/project_modules/1400/887f8f69054287.5b730a1885355.jpg',1800,1500,1800,1500,'RoboCop: Justice in a Dystopian Future','Set in a crime-ridden Detroit, a critically wounded cop is transformed into RoboCop, a powerful cyborg enforcer. As he battles crime and corruption, he struggles to retain his humanity in a world where technology and corporate greed dominate.'),
(11,'Pulp Fiction','https://images-na.ssl-images-amazon.com/images/I/51pDDDB9uCL._SX300_SY300_QL70_FMwebp_.jpg','https://images.squarespace-cdn.com/content/v1/6117360e2f0be106838fc4e6/dc7ce957-8501-4da4-b3fa-2d1151ff38aa/Pulp-Fiction.jpg?format=2500w',1900,1800,1900,1800,'Pulp Fiction: A Tangle of Crime, Fate, and Redemption','A genre-defying tale of intersecting lives and twisted stories in the criminal underworld, *Pulp Fiction* weaves together dark humor, unforgettable characters, and nonlinear storytelling to create a cinematic masterpiece.');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_actors`
--

DROP TABLE IF EXISTS `movies_actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_actors` (
  `movie_id` int(11) DEFAULT NULL,
  `actor_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `actor_id` (`actor_id`),
  CONSTRAINT `movies_actors_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_actors_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`actor_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_actors`
--

LOCK TABLES `movies_actors` WRITE;
/*!40000 ALTER TABLE `movies_actors` DISABLE KEYS */;
INSERT INTO `movies_actors` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(1,10),
(1,11),
(1,12),
(1,13),
(1,14),
(1,15),
(1,16),
(1,17),
(1,18),
(2,1),
(2,2),
(2,3),
(2,4),
(2,5),
(2,6),
(2,7),
(2,8),
(2,9),
(2,10),
(2,11),
(2,12),
(2,13),
(2,14),
(2,15),
(2,16),
(2,17),
(2,18),
(3,19),
(3,20),
(3,21),
(3,22),
(3,23),
(3,24),
(3,25),
(3,26),
(3,27),
(3,28),
(4,29),
(4,30),
(4,31),
(4,32),
(4,33),
(4,34),
(4,35),
(4,36),
(4,37),
(4,38),
(4,39),
(5,40),
(5,41),
(5,42),
(5,43),
(5,44),
(5,45),
(5,46),
(5,47),
(6,48),
(6,49),
(6,50),
(6,51),
(6,52),
(6,53),
(6,54),
(6,55),
(6,56),
(7,48),
(7,57),
(7,58),
(7,59),
(7,60),
(7,61),
(7,62),
(7,63),
(7,64),
(7,65),
(8,66),
(8,67),
(8,68),
(8,69),
(8,70),
(8,71),
(8,72),
(8,73),
(8,74),
(8,75),
(9,76),
(9,77),
(9,78),
(9,79),
(9,12),
(9,80),
(9,81),
(9,82),
(9,83),
(9,84),
(10,85),
(10,86),
(10,87),
(10,88),
(10,89),
(10,90),
(10,91),
(10,92),
(10,93),
(10,94),
(11,95),
(11,96),
(11,97),
(11,98),
(11,99),
(11,100),
(11,101),
(11,102),
(11,103),
(11,104);
/*!40000 ALTER TABLE `movies_actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_altitles`
--

DROP TABLE IF EXISTS `movies_altitles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_altitles` (
  `movie_id` int(11) DEFAULT NULL,
  `title_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `title_id` (`title_id`),
  CONSTRAINT `movies_altitles_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_altitles_ibfk_2` FOREIGN KEY (`title_id`) REFERENCES `alternate_title` (`title_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_altitles`
--

LOCK TABLES `movies_altitles` WRITE;
/*!40000 ALTER TABLE `movies_altitles` DISABLE KEYS */;
INSERT INTO `movies_altitles` VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6),
(7,7),
(8,8),
(9,9),
(10,10),
(11,11);
/*!40000 ALTER TABLE `movies_altitles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_cinematographys`
--

DROP TABLE IF EXISTS `movies_cinematographys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_cinematographys` (
  `movie_id` int(11) DEFAULT NULL,
  `cinematography_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `cinematography_id` (`cinematography_id`),
  CONSTRAINT `movies_cinematographys_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_cinematographys_ibfk_2` FOREIGN KEY (`cinematography_id`) REFERENCES `cinematographys` (`cinematography_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_cinematographys`
--

LOCK TABLES `movies_cinematographys` WRITE;
/*!40000 ALTER TABLE `movies_cinematographys` DISABLE KEYS */;
INSERT INTO `movies_cinematographys` VALUES
(1,1),
(1,2),
(2,3),
(3,4),
(4,5),
(5,6),
(6,7),
(7,8),
(8,9),
(9,10),
(10,11),
(11,12);
/*!40000 ALTER TABLE `movies_cinematographys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_countrys`
--

DROP TABLE IF EXISTS `movies_countrys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_countrys` (
  `movie_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `country_id` (`country_id`),
  CONSTRAINT `movies_countrys_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_countrys_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `countrys` (`country_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_countrys`
--

LOCK TABLES `movies_countrys` WRITE;
/*!40000 ALTER TABLE `movies_countrys` DISABLE KEYS */;
INSERT INTO `movies_countrys` VALUES
(1,1),
(2,1),
(2,2),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,2),
(9,1),
(10,1),
(11,1);
/*!40000 ALTER TABLE `movies_countrys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_directors`
--

DROP TABLE IF EXISTS `movies_directors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_directors` (
  `movie_id` int(11) DEFAULT NULL,
  `dir_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `dir_id` (`dir_id`),
  CONSTRAINT `movies_directors_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_directors_ibfk_2` FOREIGN KEY (`dir_id`) REFERENCES `directors` (`dir_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_directors`
--

LOCK TABLES `movies_directors` WRITE;
/*!40000 ALTER TABLE `movies_directors` DISABLE KEYS */;
INSERT INTO `movies_directors` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,5),
(3,6),
(4,7),
(4,8),
(4,9),
(5,10),
(6,11),
(7,12),
(8,13),
(9,14),
(10,15),
(11,16);
/*!40000 ALTER TABLE `movies_directors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_editors`
--

DROP TABLE IF EXISTS `movies_editors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_editors` (
  `movie_id` int(11) DEFAULT NULL,
  `editor_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `editor_id` (`editor_id`),
  CONSTRAINT `movies_editors_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_editors_ibfk_2` FOREIGN KEY (`editor_id`) REFERENCES `editors` (`editor_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_editors`
--

LOCK TABLES `movies_editors` WRITE;
/*!40000 ALTER TABLE `movies_editors` DISABLE KEYS */;
INSERT INTO `movies_editors` VALUES
(1,1),
(1,2),
(1,3),
(2,4),
(3,7),
(3,8),
(4,7),
(4,8),
(5,9),
(6,10),
(6,11),
(7,12),
(7,13),
(8,14),
(8,15),
(9,16),
(10,17),
(11,18);
/*!40000 ALTER TABLE `movies_editors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_fav_users`
--

DROP TABLE IF EXISTS `movies_fav_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_fav_users` (
  `movie_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `movies_fav_users_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_fav_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_fav_users`
--

LOCK TABLES `movies_fav_users` WRITE;
/*!40000 ALTER TABLE `movies_fav_users` DISABLE KEYS */;
INSERT INTO `movies_fav_users` VALUES
(5,1),
(2,1),
(3,1),
(4,1),
(2,2),
(3,2),
(6,2),
(4,2),
(5,3),
(4,3),
(2,3),
(3,3),
(1,4),
(2,4),
(4,4),
(3,4),
(1,5),
(2,5),
(3,5),
(4,5),
(1,6),
(2,6),
(3,6),
(4,6),
(1,7),
(2,7),
(3,7),
(4,7),
(1,8),
(2,8),
(3,8),
(4,8),
(1,9),
(2,9),
(3,9),
(4,9),
(1,10),
(2,10),
(3,10),
(4,10),
(1,11),
(3,11);
/*!40000 ALTER TABLE `movies_fav_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_genres`
--

DROP TABLE IF EXISTS `movies_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_genres` (
  `movie_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `movies_genres_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_genres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_genres`
--

LOCK TABLES `movies_genres` WRITE;
/*!40000 ALTER TABLE `movies_genres` DISABLE KEYS */;
INSERT INTO `movies_genres` VALUES
(1,1),
(1,2),
(1,3),
(2,4),
(2,1),
(3,5),
(3,1),
(4,6),
(4,7),
(4,3),
(5,8),
(5,9),
(5,1),
(6,10),
(6,11),
(6,5),
(7,4),
(7,1),
(8,7),
(8,4),
(8,1),
(9,4),
(9,1),
(9,10),
(10,4),
(10,1),
(10,10),
(11,5),
(11,1);
/*!40000 ALTER TABLE `movies_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_languages`
--

DROP TABLE IF EXISTS `movies_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_languages` (
  `movie_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `language_id` (`language_id`),
  CONSTRAINT `movies_languages_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_languages_ibfk_2` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_languages`
--

LOCK TABLES `movies_languages` WRITE;
/*!40000 ALTER TABLE `movies_languages` DISABLE KEYS */;
INSERT INTO `movies_languages` VALUES
(1,1),
(1,2),
(1,3),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1);
/*!40000 ALTER TABLE `movies_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_liked_users`
--

DROP TABLE IF EXISTS `movies_liked_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_liked_users` (
  `movie_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `movies_liked_users_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_liked_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_liked_users`
--

LOCK TABLES `movies_liked_users` WRITE;
/*!40000 ALTER TABLE `movies_liked_users` DISABLE KEYS */;
INSERT INTO `movies_liked_users` VALUES
(1,1),
(2,1),
(3,1),
(4,1),
(1,2),
(2,2),
(3,2),
(4,2),
(1,3),
(2,3),
(3,3),
(4,3),
(1,4),
(2,4),
(3,4),
(4,4),
(1,5),
(2,5),
(3,5),
(4,5),
(1,6),
(2,6),
(4,6),
(5,6),
(1,7),
(2,7),
(4,7),
(5,7),
(1,8),
(2,8),
(4,8),
(5,8),
(1,9),
(2,9),
(4,9),
(5,9),
(1,10),
(2,10),
(4,10),
(5,10);
/*!40000 ALTER TABLE `movies_liked_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_lists`
--

DROP TABLE IF EXISTS `movies_lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_lists` (
  `list_id` int(11) DEFAULT NULL,
  `movie_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `list_id` (`list_id`),
  CONSTRAINT `movies_lists_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE SET NULL,
  CONSTRAINT `movies_lists_ibfk_2` FOREIGN KEY (`list_id`) REFERENCES `lists` (`list_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_lists`
--

LOCK TABLES `movies_lists` WRITE;
/*!40000 ALTER TABLE `movies_lists` DISABLE KEYS */;
INSERT INTO `movies_lists` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(1,5),
(1,6),
(1,7),
(1,8),
(1,9),
(1,10),
(2,6),
(2,1),
(2,7),
(2,9),
(2,4),
(2,8),
(2,3),
(2,10),
(2,5),
(3,7),
(3,5),
(3,10),
(3,1),
(3,9),
(3,2),
(3,4),
(3,8),
(4,10),
(4,9),
(4,6),
(4,3),
(4,8),
(4,1),
(4,4),
(4,5),
(4,7),
(4,2),
(5,10),
(5,1),
(5,6),
(5,9),
(5,2),
(5,8),
(5,5),
(5,7),
(5,4),
(6,4),
(6,9),
(6,3),
(6,8),
(6,7),
(6,5),
(6,10),
(6,6),
(7,6),
(7,2),
(7,3),
(7,4),
(7,7),
(7,9),
(7,10),
(7,8),
(7,1),
(7,5),
(8,2),
(8,3),
(8,9),
(8,8),
(8,1),
(8,5),
(8,6),
(8,7),
(8,4),
(8,10),
(9,5),
(9,1),
(9,6),
(9,4),
(9,2),
(9,3),
(9,8),
(9,10),
(9,7),
(9,9),
(10,5),
(10,1),
(10,6),
(10,4),
(10,2),
(10,3),
(10,8),
(10,10),
(10,7),
(10,9);
/*!40000 ALTER TABLE `movies_lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_musics`
--

DROP TABLE IF EXISTS `movies_musics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_musics` (
  `movie_id` int(11) DEFAULT NULL,
  `music_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `music_id` (`music_id`),
  CONSTRAINT `movies_musics_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_musics_ibfk_2` FOREIGN KEY (`music_id`) REFERENCES `musics` (`music_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_musics`
--

LOCK TABLES `movies_musics` WRITE;
/*!40000 ALTER TABLE `movies_musics` DISABLE KEYS */;
INSERT INTO `movies_musics` VALUES
(1,1),
(2,4),
(3,3),
(4,4),
(5,5),
(6,6),
(6,7),
(7,8),
(7,9),
(8,10),
(9,11),
(10,12);
/*!40000 ALTER TABLE `movies_musics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_otherlanguages`
--

DROP TABLE IF EXISTS `movies_otherlanguages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_otherlanguages` (
  `movie_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `language_id` (`language_id`),
  CONSTRAINT `movies_otherlanguages_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_otherlanguages_ibfk_2` FOREIGN KEY (`language_id`) REFERENCES `languages` (`language_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_otherlanguages`
--

LOCK TABLES `movies_otherlanguages` WRITE;
/*!40000 ALTER TABLE `movies_otherlanguages` DISABLE KEYS */;
INSERT INTO `movies_otherlanguages` VALUES
(1,1),
(1,2),
(1,3),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1);
/*!40000 ALTER TABLE `movies_otherlanguages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_producers`
--

DROP TABLE IF EXISTS `movies_producers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_producers` (
  `movie_id` int(11) DEFAULT NULL,
  `producer_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `producer_id` (`producer_id`),
  CONSTRAINT `movies_producers_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_producers_ibfk_2` FOREIGN KEY (`producer_id`) REFERENCES `producers` (`producer_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_producers`
--

LOCK TABLES `movies_producers` WRITE;
/*!40000 ALTER TABLE `movies_producers` DISABLE KEYS */;
INSERT INTO `movies_producers` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,5),
(2,6),
(2,7),
(2,22),
(3,9),
(4,10),
(4,11),
(4,12),
(4,13),
(4,14),
(5,15),
(5,16),
(5,17),
(5,18),
(6,19),
(6,20),
(6,21),
(7,22),
(7,23),
(7,24),
(7,25),
(8,26),
(8,27),
(8,28),
(9,29),
(9,30),
(9,31),
(10,32),
(11,33),
(2,8);
/*!40000 ALTER TABLE `movies_producers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_production_designs`
--

DROP TABLE IF EXISTS `movies_production_designs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_production_designs` (
  `movie_id` int(11) DEFAULT NULL,
  `production_design_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `production_design_id` (`production_design_id`),
  CONSTRAINT `movies_production_designs_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_production_designs_ibfk_2` FOREIGN KEY (`production_design_id`) REFERENCES `production_designs` (`production_design_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_production_designs`
--

LOCK TABLES `movies_production_designs` WRITE;
/*!40000 ALTER TABLE `movies_production_designs` DISABLE KEYS */;
INSERT INTO `movies_production_designs` VALUES
(1,1),
(1,2),
(2,3),
(3,4),
(4,5),
(5,6),
(6,7),
(7,8),
(8,9),
(9,10),
(10,11),
(11,12);
/*!40000 ALTER TABLE `movies_production_designs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_productions`
--

DROP TABLE IF EXISTS `movies_productions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_productions` (
  `movie_id` int(11) DEFAULT NULL,
  `production_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `production_id` (`production_id`),
  CONSTRAINT `movies_productions_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_productions_ibfk_2` FOREIGN KEY (`production_id`) REFERENCES `productions` (`production_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_productions`
--

LOCK TABLES `movies_productions` WRITE;
/*!40000 ALTER TABLE `movies_productions` DISABLE KEYS */;
INSERT INTO `movies_productions` VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(4,5),
(5,6),
(6,7),
(7,4),
(7,8),
(8,9),
(8,10),
(9,11),
(9,12),
(10,13),
(11,14);
/*!40000 ALTER TABLE `movies_productions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_reviews_users`
--

DROP TABLE IF EXISTS `movies_reviews_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_reviews_users` (
  `movie_id` int(11) DEFAULT NULL,
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `movie_id` (`movie_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `movies_reviews_users_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_reviews_users_ibfk_2` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`review_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_reviews_users_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_reviews_users`
--

LOCK TABLES `movies_reviews_users` WRITE;
/*!40000 ALTER TABLE `movies_reviews_users` DISABLE KEYS */;
INSERT INTO `movies_reviews_users` VALUES
(1,1,1),
(3,2,1),
(2,3,1),
(4,4,2),
(5,5,2),
(7,6,2),
(8,7,3),
(9,8,3),
(4,9,3),
(5,10,4),
(6,11,4),
(7,12,4),
(5,13,5),
(8,14,5),
(9,15,5),
(10,16,6),
(3,17,6),
(2,18,6),
(1,19,7),
(3,20,7),
(2,21,7),
(1,22,8),
(3,23,8),
(2,24,8),
(1,25,9),
(3,26,9),
(2,27,9),
(2,28,10),
(2,29,10),
(3,30,11),
(3,32,11);
/*!40000 ALTER TABLE `movies_reviews_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_watched_users`
--

DROP TABLE IF EXISTS `movies_watched_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_watched_users` (
  `movie_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `movies_watched_users_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_watched_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_watched_users`
--

LOCK TABLES `movies_watched_users` WRITE;
/*!40000 ALTER TABLE `movies_watched_users` DISABLE KEYS */;
INSERT INTO `movies_watched_users` VALUES
(2,4),
(3,4),
(4,4),
(5,4),
(6,5),
(7,5),
(8,5),
(9,5),
(10,5),
(1,1),
(1,3),
(2,3),
(3,3),
(4,3),
(1,4),
(2,4),
(3,4),
(4,4),
(1,5),
(2,5),
(3,5),
(4,5),
(1,6),
(2,6),
(4,6),
(5,6),
(1,7),
(2,7),
(4,7),
(5,7),
(1,8),
(2,8),
(4,8),
(5,8),
(1,9),
(2,9),
(4,9),
(5,9),
(1,10),
(2,10),
(4,10),
(5,10),
(2,1),
(5,2),
(1,2),
(3,11);
/*!40000 ALTER TABLE `movies_watched_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_watchlist_users`
--

DROP TABLE IF EXISTS `movies_watchlist_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_watchlist_users` (
  `movie_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `movies_watchlist_users_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_watchlist_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_watchlist_users`
--

LOCK TABLES `movies_watchlist_users` WRITE;
/*!40000 ALTER TABLE `movies_watchlist_users` DISABLE KEYS */;
INSERT INTO `movies_watchlist_users` VALUES
(6,1),
(5,1),
(7,1),
(11,1),
(9,1),
(10,1),
(6,2),
(5,2),
(7,2),
(11,2),
(9,2),
(10,2),
(6,3),
(5,3),
(7,3),
(11,3),
(9,3),
(10,3),
(4,3),
(2,3),
(3,3),
(6,4),
(5,4),
(7,4),
(11,4),
(9,4),
(10,4),
(6,5),
(5,5),
(7,5),
(11,5),
(9,5),
(10,5),
(6,6),
(5,6),
(7,6),
(11,6),
(9,6),
(10,6),
(6,7),
(5,7),
(7,7),
(11,7),
(9,7),
(10,7),
(6,8),
(5,8),
(7,8),
(11,8),
(9,8),
(10,8),
(6,9),
(5,9),
(7,9),
(11,9),
(9,9),
(10,9),
(6,10),
(5,10),
(7,10),
(11,10),
(9,10),
(10,10);
/*!40000 ALTER TABLE `movies_watchlist_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_writers`
--

DROP TABLE IF EXISTS `movies_writers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies_writers` (
  `movie_id` int(11) DEFAULT NULL,
  `writer_id` int(11) DEFAULT NULL,
  KEY `movie_id` (`movie_id`),
  KEY `writer_id` (`writer_id`),
  CONSTRAINT `movies_writers_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`) ON DELETE CASCADE,
  CONSTRAINT `movies_writers_ibfk_2` FOREIGN KEY (`writer_id`) REFERENCES `writers` (`writer_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_writers`
--

LOCK TABLES `movies_writers` WRITE;
/*!40000 ALTER TABLE `movies_writers` DISABLE KEYS */;
INSERT INTO `movies_writers` VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,15),
(3,6),
(3,7),
(4,8),
(4,9),
(5,10),
(5,11),
(6,12),
(6,13),
(6,14),
(7,15),
(8,16),
(8,17),
(8,18),
(9,19),
(10,20),
(10,21),
(11,22),
(11,23);
/*!40000 ALTER TABLE `movies_writers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musics`
--

DROP TABLE IF EXISTS `musics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `musics` (
  `music_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_name` varchar(1000) DEFAULT NULL,
  `music_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`music_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musics`
--

LOCK TABLES `musics` WRITE;
/*!40000 ALTER TABLE `musics` DISABLE KEYS */;
INSERT INTO `musics` VALUES
(1,'Ramin Djawadi',NULL),
(2,'Daniel Pemberton',NULL),
(3,'Nino Rota',NULL),
(4,'Daniel Pemberton',NULL),
(5,'Andrea von Foerster',NULL),
(6,'Trent Reznor',NULL),
(7,'Atticus Ross',NULL),
(8,'Marco Beltrami',NULL),
(9,'Buck Sanders',NULL),
(10,'Alexandre Desplat',NULL),
(11,'Basil Poledouris',NULL),
(12,'Karyn Rachtman',NULL);
/*!40000 ALTER TABLE `musics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producers`
--

DROP TABLE IF EXISTS `producers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producers` (
  `producer_id` int(11) NOT NULL AUTO_INCREMENT,
  `producer_name` varchar(1000) DEFAULT NULL,
  `prod_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`producer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producers`
--

LOCK TABLES `producers` WRITE;
/*!40000 ALTER TABLE `producers` DISABLE KEYS */;
INSERT INTO `producers` VALUES
(1,'David Benioff',NULL),
(2,'D.B. Weiss',NULL),
(3,'Carolyn Strauss',NULL),
(4,'Frank Doelger',NULL),
(5,'Mark Gordon',NULL),
(6,'Guymon Casady',NULL),
(7,'Christian Colson',NULL),
(8,'Scott Rudin',NULL),
(9,'Albert S. Ruddy',NULL),
(10,'Phil Lord',NULL),
(11,'Christopher Miller',NULL),
(12,'Avi Arad',NULL),
(13,'Amy Pascal',NULL),
(14,'Christina Steinberg',NULL),
(15,'Mark Waters',NULL),
(16,'Jessica Tuchinsky',NULL),
(17,'Mason Novick',NULL),
(18,'Steven J. Wolfe',NULL),
(19,'Roberto Orci',NULL),
(20,'Alex Kurtzman',NULL),
(21,'Bobby Cohen',NULL),
(22,'Scott Rudin',NULL),
(23,'Dana Brunetti',NULL),
(24,'Michael De Luca',NULL),
(25,'Ceán Chaffin',NULL),
(26,'Peter Chernin',NULL),
(27,'Jenno Topping',NULL),
(28,'James Mangold',NULL),
(29,'Nora Grossman',NULL),
(30,'Ido Ostrowsky',NULL),
(31,'Teddy Schwarzman',NULL),
(32,'Arne Schmidt',NULL),
(33,'Lawrence Bender',NULL);
/*!40000 ALTER TABLE `producers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production_designs`
--

DROP TABLE IF EXISTS `production_designs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `production_designs` (
  `production_design_id` int(11) NOT NULL AUTO_INCREMENT,
  `production_design_name` varchar(1000) DEFAULT NULL,
  `proddes_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`production_design_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production_designs`
--

LOCK TABLES `production_designs` WRITE;
/*!40000 ALTER TABLE `production_designs` DISABLE KEYS */;
INSERT INTO `production_designs` VALUES
(1,'Gemma Jackson',NULL),
(2,'Deborah Riley',NULL),
(3,'Guy Hendrix Dyas',NULL),
(4,'Dean Tavoularis',NULL),
(5,'Justin K. Thompson',NULL),
(6,'Laura Fox',NULL),
(7,'Peter Wenham',NULL),
(8,'Donald Graham Burt',NULL),
(9,'François Audouy',NULL),
(10,'Maria Djurkovic',NULL),
(11,'William Sandell',NULL),
(12,'David Wasco',NULL);
/*!40000 ALTER TABLE `production_designs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productions`
--

DROP TABLE IF EXISTS `productions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productions` (
  `production_id` int(11) NOT NULL AUTO_INCREMENT,
  `production_name` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`production_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productions`
--

LOCK TABLES `productions` WRITE;
/*!40000 ALTER TABLE `productions` DISABLE KEYS */;
INSERT INTO `productions` VALUES
(1,'HBO'),
(2,'Universal Pictures'),
(3,'Paramount Pictures'),
(4,'Sony PicturesAnimation'),
(5,'Columbia Pictures'),
(6,'Fox Searchlight Pictures'),
(7,'Summit Entertainment'),
(8,'Relativity Media'),
(9,'20th Century Fox'),
(10,'Chernin Entertainment'),
(11,'Black Bear Pictures'),
(12,'Bristol Automotive'),
(13,'Orion Pictures'),
(14,'Miramax');
/*!40000 ALTER TABLE `productions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `review_title` varchar(100) NOT NULL,
  `review_content` varchar(2000) NOT NULL,
  `user_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `review_rating` int(11) NOT NULL,
  `review_watchdate` date NOT NULL,
  `review_likes` int(11) NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `user_id` (`user_id`),
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES
(1,'Game of Thrones: A Thrilling Tapestry of Power, Betrayal, and Intrigue','Game of Thrones is a masterful blend of complex characters, unpredictable plot twists, and stunning visuals. It weaves a tale of power, loyalty, and betrayal, keeping viewers on the edge of their seats. While its final season sparked debate, the series remains a monumental achievement in storytelling.',1,1,3,'2024-10-27',0),
(2,'The Godfather: A Timeless Masterpiece of Crime and Family','Francis Ford Coppola’s The Godfather (1972) is a cinematic landmark that redefined the crime genre. Adapted from Mario Puzo’s novel, it masterfully explores power, loyalty, and family through the Corleone Mafia dynasty. Marlon Brando delivers an iconic performance as Don Vito Corleone, balancing menace with humanity, while Al Pacino’s transformation as Michael Corleone—from reluctant outsider to ruthless leader—is both gripping and tragic. Coppola’s direction, Gordon Willis’s moody cinematography, and Nino Rota’s haunting score create an unforgettable experience. The script, rich in tension and sharp dialogue, elevates the story beyond a gangster saga into a profound exploration of morality and ambition. A true masterpiece, The Godfather remains an essential watch and a towering achievement in film history.',1,3,3,'2024-08-23',0),
(3,'Steve Jobs: A Riveting Glimpse into Genius and Complexity','Steve Jobs delivers a compelling portrayal of the visionary behind Apple. With sharp dialogue and a unique structure, the film unfolds across three iconic product launches, offering an intimate look at Jobs\' brilliance, flaws, and relationships. Michael Fassbender\'s stellar performance captures the intensity and complexity of Jobs, while the supporting cast adds depth to the narrative. Directed by Danny Boyle and written by Aaron Sorkin, the movie masterfully blends drama and insight, making it a must-watch for tech enthusiasts and those fascinated by the human side of innovation.',1,2,2,'2024-10-27',0),
(4,'das','rr',2,4,3,'2024-10-27',0),
(5,'das','rr',2,5,3,'2024-08-23',0),
(6,'das','rr',2,7,2,'2024-10-27',0),
(7,'das','rr',3,8,3,'2024-10-27',0),
(8,'das','rr',3,9,3,'2024-08-23',0),
(9,'das','rr',3,4,2,'2024-10-27',0),
(10,'das','rr',4,5,3,'2024-10-27',0),
(11,'das','rr',4,6,3,'2024-08-23',0),
(12,'das','rr',4,7,2,'2024-10-27',0),
(13,'das','rr',5,5,3,'2024-10-27',0),
(14,'das','rr',5,8,3,'2024-08-23',0),
(15,'das','rr',5,9,2,'2024-10-27',0),
(16,'das','rr',5,10,3,'2024-10-27',0),
(17,'das','rr',6,3,3,'2024-08-23',0),
(18,'das','rr',6,2,2,'2024-10-27',0),
(19,'das','rr',6,1,3,'2024-10-27',0),
(20,'das','rr',7,3,3,'2024-08-23',0),
(21,'das','rr',7,2,2,'2024-10-27',0),
(22,'das','rr',7,1,3,'2024-10-27',0),
(23,'das','rr',8,3,3,'2024-08-23',0),
(24,'das','rr',8,2,2,'2024-10-27',0),
(25,'das','rr',8,1,3,'2024-10-27',0),
(26,'das','rr',9,3,3,'2024-08-23',0),
(27,'das','rr',9,2,2,'2024-10-27',0),
(28,'das','rr',9,1,3,'2024-10-27',0),
(29,'das','rr',10,3,3,'2024-08-23',0),
(30,'das','rr',10,2,2,'2024-10-27',0),
(31,'A Great Movie','A  TImeless Classic',11,3,5,'2024-01-03',10),
(32,'A Classic','A Great Movie',11,3,5,'2024-01-03',10);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_passwd` varchar(100) NOT NULL,
  `user_bio` varchar(1500) DEFAULT NULL,
  `user_userPic` varchar(1000) DEFAULT NULL,
  `follows_this_week` int(11) DEFAULT NULL,
  `followers_no` int(11) NOT NULL,
  `following` int(11) DEFAULT NULL,
  `email` varchar(200) DEFAULT '',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Yohan','theyearly','1234','Alexandra T. Rivers is a visionary artist and environmentalist based in the quaint town of Pinehaven. With a passion for blending traditional oil painting techniques with modern digital art, Alexandra’s works often depict surreal landscapes inspired by her adventures in the uncharted wilderness of Velmont Peaks.','https://media.licdn.com/dms/image/v2/D5603AQHBycfjLdwtaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730208655682?e=1744243200&v=beta&t=e88G--b3rx8j_Bj710okgp4Qs3OS_2NytD6gUQ97__Q',7,2,1,''),
(2,'AbhinavD','ValikavuReviews','1234','Julian V. Thornfield is an inventor and self-proclaimed \'architect of wonder\' from the bustling city of Azure Heights. Known for his eccentric gadgets, Julian’s inventions often straddle the line between genius and chaos, with his best-known creation being the WhisperClock, a device that predicts weather through poetic murmurs.','https://media.licdn.com/dms/image/v2/D4D03AQFCJscTJICjhg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724338346611?e=1740009600&v=beta&t=SDui0jn_6uLs_WVD2Qx1cc8sOQIuS3XJdQIbJ5EhIKc',7,1,3,''),
(3,'Parthiv','ParthivM','1234','Elara J. Nightshade is a cryptozoologist and folklore expert from the enigmatic village of Hollowmere. Fascinated by the unknown, Elara has spent over a decade exploring ancient ruins, deciphering forgotten myths, and tracking elusive creatures like the legendary Starshadow Lynx.Her bestselling book, Through the Veil of Shadows, has been praised for blending academic rigor with captivating storytelling. In her spare time, Elara enjoys brewing herbal teas, stargazing, and hosting late-night storytelling circles in her candle-lit library','https://media.licdn.com/dms/image/v2/D5603AQF50t-OCqrRIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714211573130?e=1740009600&v=beta&t=h23qAfum4pb1UUTn26WSZi0S7Hk4XllW4iTDF_RvT2Y',8,2,9,''),
(4,'Vasudev B','Vaszzu','1234','Cassius D. Hawthorne is a celebrated chef and restaurateur, known for his avant-garde culinary creations at his flagship restaurant, Ember & Ash. Born and raised in the seaside town of Meridian Cove, Cassius draws inspiration from the ocean’s bounty and his grandmother’s cherished recipes.His signature dish, Smoked Petal Risotto, has garnered international acclaim and a Michelin star. When he’s not experimenting with flavors, Cassius can be found exploring local markets, photographing sunsets, or volunteering at community cooking workshops.','https://media.licdn.com/dms/image/v2/D5603AQEmzEQf46WTdw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721812415334?e=1740009600&v=beta&t=k-YDEdd3FdY69EK_4i_kOhBsLtlWo-np5l1CLgvbFJM',5,1,6,''),
(5,'Harisankar','SankaramReveiws','1234','Lyra F. Solbright is an intergalactic cartographer and starship engineer who operates out of the cosmic outpost of Andaris Station. Known for mapping the uncharted nebulas of the Galadron Quadrant, Lyra’s discoveries have revolutionized hyperspace travel.Her groundbreaking work is documented in the holographic atlas Beyond the Starlit Horizon. When grounded on Andaris, Lyra enjoys tinkering with ancient starship relics, brewing her signature Stardust Coffee, and hosting cosmic poetry slams in her workshop.','https://media.licdn.com/dms/image/v2/D5603AQEbbEHN_hL6Sw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709067461897?e=1740009600&v=beta&t=5zC7Je93jzhaPFIZV6k457Wmk2gfShsfy_bf7eYrTkU',4,1,1,''),
(6,'Vignesh','SheshamTalks','1234','Sienna L. Waverly is a marine archaeologist and treasure hunter from the windswept shores of Tempest Bay. Armed with a degree in Ancient Civilizations from Orinthia University and an uncanny knack for solving riddles, Sienna has unearthed countless artifacts from sunken ships and forgotten underwater cities.Her most famous find, the Crown of Eryndor, sparked international intrigue and a best-selling memoir, Beneath the Tides. In her downtime, Sienna teaches underwater photography, practices yoga on her boat deck, and dreams of discovering the lost continent of Sylvaris.','https://media.licdn.com/dms/image/v2/D5603AQHcyab86FoGaQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721415374754?e=1740614400&v=beta&t=9hWBlElIJYCyEkvY7NKnQuBASuP3Ff_BnBorXI1VrUQ',4,3,0,''),
(7,'Sai','KishenTalks','1234','Sienna L. Waverly is a marine archaeologist and treasure hunter from the windswept shores of Tempest Bay. Armed with a degree in Ancient Civilizations from Orinthia University and an uncanny knack for solving riddles, Sienna has unearthed countless artifacts from sunken ships and forgotten underwater cities.Her most famous find, the Crown of Eryndor, sparked international intrigue and a best-selling memoir, Beneath the Tides. In her downtime, Sienna teaches underwater photography, practices yoga on her boat deck, and dreams of discovering the lost continent of Sylvaris.','https://media.licdn.com/dms/image/v2/D4E03AQEaALSVNwj_og/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719895144845?e=1740614400&v=beta&t=1NKr76aAAGeAyT3KH-tjQ2rEN7TKIS_aLZjXi1PXR3o',2,2,0,''),
(8,'Deon','KannurVibes','1234','Damon E. Ashcroft is a private investigator and former journalist operating in the neon-lit city of Lumenspire. Known for his sharp wit and sharper instincts, Damon specializes in unraveling corporate conspiracies and solving cold cases.With his trusty AI assistant, Iris, and a well-worn leather notebook, Damon has cracked some of the city’s most perplexing mysteries. When he’s not on the case, he enjoys late-night chess matches in shadowy cafes and collecting vintage typewriters that he claims “have stories of their own.”','https://media.licdn.com/dms/image/v2/D4D03AQGi_Asa2wXj5A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727203411675?e=1740614400&v=beta&t=Nn0vf35H6WMnVi0apns1VKlZur2sodXSL6uWwI0w12Q',3,4,0,''),
(9,'Geevarghese','Sajan\'s_reviews','1234','Vivienne A. Starling is a celebrated botanist and author from the verdant hills of Briarwood Glen. Her groundbreaking research on bioluminescent flora has earned her accolades from both the scientific community and art enthusiasts.Her botanical garden, The Glow Grove, is a haven for rare and luminous plants, drawing visitors from around the world. Vivienne spends her evenings painting watercolors of her discoveries, writing poetry inspired by nature, and hosting garden galas under the starlit sky.','https://media.licdn.com/dms/image/v2/D5603AQFrk2cd9steZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711989092469?e=1740614400&v=beta&t=kjTvSNbbnZG8q4rmUfMkuKUrT5Gx24ni6_eQ5yPS3Uo',0,2,0,''),
(10,'Sidharth','Sidhu','1234','Ezra J. Holloway is a rogue historian and artifact trader hailing from the mysterious city of Obsidian Spire. Known for his daring escapades into forbidden territories, Ezra has recovered ancient relics believed to be lost forever.He chronicles his adventures in the serialized novel collection, Legends of the Lost Age. A lover of cryptic puzzles, moonlit piano performances, and rare whiskey, Ezra’s life is as enigmatic as the secrets he uncovers.','https://media.licdn.com/dms/image/v2/D5603AQEBcNyBnuuy4g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726308144625?e=1740614400&v=beta&t=KflxFNWPTsSMr-mojClcjf_ki8CsZM4njvNrOcN-w2c',-1,2,0,''),
(11,'','Yohan','Arduino1','k','',1,1,0,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `writers`
--

DROP TABLE IF EXISTS `writers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `writers` (
  `writer_id` int(11) NOT NULL AUTO_INCREMENT,
  `writer_name` varchar(1000) DEFAULT NULL,
  `writer_pic` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`writer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `writers`
--

LOCK TABLES `writers` WRITE;
/*!40000 ALTER TABLE `writers` DISABLE KEYS */;
INSERT INTO `writers` VALUES
(1,'David Benioff',NULL),
(2,'D.B. Weiss',NULL),
(3,'Bryan Cogman',NULL),
(4,'George R.R. Martin',NULL),
(5,'Aaron Sorkin',NULL),
(6,'Mario Puzo',NULL),
(7,'Francis Ford Coppola',NULL),
(8,'Phil Lord',NULL),
(9,'Rodney Rothman',NULL),
(10,'Scott Neustadter',NULL),
(11,'Michael H. Weber',NULL),
(12,'Ed Solomon',NULL),
(13,'Boaz Yakin',NULL),
(14,'Edward Ricourt',NULL),
(15,'Aaron Sorkin',NULL),
(16,'Jez Butterworth',NULL),
(17,'John-Henry Butterworth',NULL),
(18,'Jason Keller',NULL),
(19,'Graham Moore',NULL),
(20,'Edward Neumeier',NULL),
(21,'Michael Miner',NULL),
(22,'Quentin Tarantino',NULL),
(23,'Roger Avary',NULL);
/*!40000 ALTER TABLE `writers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-02-05 20:45:00
