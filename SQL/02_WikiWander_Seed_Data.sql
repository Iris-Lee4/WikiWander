-- Insert data into the UserProfile table
SET IDENTITY_INSERT UserProfile ON;

INSERT INTO UserProfile (Id, FirstName, LastName, DisplayName, Email)
VALUES
(1, 'John', 'Doe', 'johnd', 'john.doe@example.com'),
(2, 'Jane', 'Smith', 'janes', 'jane.smith@example.com'),
(3, 'Michael', 'Brown', 'michaelb', 'michael.brown@example.com');

SET IDENTITY_INSERT UserProfile OFF;

-- Insert data into the Article table
SET IDENTITY_INSERT Article ON;

INSERT INTO Article (Id, Name)
VALUES
(1, 'Panda'),
(2, 'Algorithm'),
(3, 'Philosophy'),
(4, 'Kangaroo'),
(5, 'Carbon'),
(6, 'Otter'),
(7, 'Ethics'),
(8, 'Pizza'),
(9, 'Evolution'),
(10, 'Greece'),
(11, 'Psychology'),
(12, 'Pasta'),
(13, 'Democracy'),
(14, 'Biodiversity'),
(15, 'Chocolate'),
(16, 'Telescope'),
(17, 'Turkey'),
(18, 'Japan'),
(19, 'Curry'),
(20, 'Gravity'),
(21, 'Tiramisu'),
(22, 'Cheetah'),
(23, 'Physics'),
(24, 'Virus'),
(25, 'Astronomy'),
(26, 'Culture'),
(27, 'Sloth'),
(28, 'Mars'),
(29, 'Waffle'),
(30, 'Oxygen'),
(31, 'Lemur'),
(32, 'Chile'),
(33, 'Neptune'),
(34, 'Architecture'),
(35, 'Camel'),
(36, 'Tacos'),
(37, 'Magnetism'),
(38, 'Tiger'),
(39, 'Donut'),
(40, 'Symmetry'),
(41, 'Solar'),
(42, 'Meteorology'),
(43, 'Elephant'),
(44, 'Bear'),
(45, 'Demography'),
(46, 'Rhino'),
(47, 'Biology'),
(48, 'France'),
(49, 'Sociology'),
(50, 'Virus'),
(51, 'Australia'),
(52, 'Hippo'),
(53, 'Fox'),
(54, 'Brazil'),
(55, 'Giraffe'),
(56, 'Botany'),
(57, 'Sushi'),
(58, 'Pollution'),
(59, 'Physics'),
(60, 'Economics'),
(61, 'Japan'),
(62, 'Zebra'),
(63, 'Relativity'),
(64, 'Antelope'),
(65, 'Drought'),
(66, 'Hummus'),
(67, 'Canada'),
(68, 'Quiche'),
(69, 'Penguin'),
(70, 'Genetics'),
(71, 'Portugal'),
(72, 'India'),
(73, 'Quantum'),
(74, 'Ecology'),
(75, 'Burger'),
(76, 'Steak'),
(77, 'Neptune'),
(78, 'Gelato'),
(79, 'Parrot'),
(80, 'Architecture'),
(81, 'Tapas'),
(82, 'Mars'),
(83, 'Whale'),
(84, 'Ramen'),
(85, 'Mexico'),
(86, 'Wolf'),
(87, 'Dolphin'),
(88, 'Bruschetta'),
(89, 'Jaguar'),
(90, 'Antelope'),
(91, 'Language'),
(92, 'Owl'),
(93, 'Scone'),
(94, 'Religion'),
(95, 'Crocodile'),
(96, 'Ethics'),
(97, 'Gravity'),
(98, 'Climate'),
(99, 'Steak'),
(100, 'Lasagna'),
(101, 'Symmetry'),
(102, 'Volcano'),
(103, 'Ecology'),
(104, 'Insect'),
(105, 'Virus'),
(106, 'Gelato'),
(107, 'Cybernetics'),
(108, 'Biryani'),
(109, 'Italy'),
(110, 'Spain'),
(111, 'Greece'),
(112, 'Sociology'),
(113, 'Fox'),
(114, 'Shark'),
(115, 'Evolution'),
(116, 'Ramen'),
(117, 'History'),
(118, 'Literature'),
(119, 'Falcon'),
(120, 'Cybernetics'),
(121, 'Pollution'),
(122, 'Biology'),
(123, 'Democracy'),
(124, 'Chocolate'),
(125, 'Parrot'),
(126, 'Finland'),
(127, 'Lynx'),
(128, 'Tiramisu'),
(129, 'Politics'),
(130, 'Bruschetta'),
(131, 'Climate'),
(132, 'Gelato'),
(133, 'Camel'),
(134, 'Religion'),
(135, 'Jaguar'),
(136, 'Bagel'),
(137, 'Fox'),
(138, 'Canada'),
(139, 'Ethics'),
(140, 'Tapas'),
(141, 'Climate'),
(142, 'Muffin'),
(143, 'Zebra'),
(144, 'Symmetry'),
(145, 'Bear'),
(146, 'Architecture'),
(147, 'Drought'),
(148, 'Evolution'),
(149, 'Falcon'),
(150, 'Tapas');


SET IDENTITY_INSERT Article OFF;

-- Insert data into the Game table
SET IDENTITY_INSERT Game ON;

INSERT INTO Game (Id, UserProfileId, StartArticleId, EndArticleId, StepCount, Duration, TimeStamp, Completed)
VALUES
(1, 1, 1, 2, 5, 15, '2024-10-08 10:00:00', 0),
(2, 2, 3, 4, 7, 20, '2024-10-08 10:05:00', 1),
(3, 3, 5, 1, 10, 30, '2024-10-08 10:10:00', 1);

SET IDENTITY_INSERT Game OFF;

-- Insert data into the Message table
SET IDENTITY_INSERT Message ON;

INSERT INTO Message (Id, UserProfileId, Content, TimeStamp)
VALUES
(1, 1, 'This is the first message.', '2024-10-08 10:00:00'),
(2, 2, 'Another message content here.', '2024-10-08 10:05:00'),
(3, 3, 'Yet another message for testing.', '2024-10-08 10:10:00');

SET IDENTITY_INSERT Message OFF;


