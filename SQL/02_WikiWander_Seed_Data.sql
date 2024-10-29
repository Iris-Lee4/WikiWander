-- Insert data into the UserProfile table
SET IDENTITY_INSERT UserProfile ON;

INSERT INTO UserProfile (Id, FirstName, LastName, DisplayName, Email)
VALUES
(1, 'Roxane', 'Li', 'roxli', 'roxane@example.com'),
(2, 'Emily', 'Nguyen', 'nguyeners', 'emily@example.com'),
(3, 'Michael', 'Kang', 'michaelk', 'mike@example.com');

SET IDENTITY_INSERT UserProfile OFF;

-- Insert data into the Article table
SET IDENTITY_INSERT Article ON;

INSERT INTO Article (Id, Name)
VALUES

    (1, 'Panda'), (2, 'Algorithm'), (3, 'Philosophy'), (4, 'Kangaroo'), (5, 'Carbon'),
    (6, 'Otter'), (7, 'Ethics'), (8, 'Pizza'), (9, 'Evolution'), (10, 'Greece'),
    (11, 'Psychology'), (12, 'Pasta'), (13, 'Democracy'), (14, 'Biodiversity'),
    (15, 'Chocolate'), (16, 'Telescope'), (17, 'Turkey'), (18, 'Japan'), (19, 'Curry'),
    (20, 'Gravity'), (21, 'Tiramisu'), (22, 'Cheetah'), (23, 'Physics'), (24, 'Virus'),
    (25, 'Astronomy'), (26, 'Culture'), (27, 'Sloth'), (28, 'Mars'), (29, 'Waffle'),
    (30, 'Oxygen'), (31, 'Lemur'), (32, 'Chile'), (33, 'Neptune'), (34, 'Architecture'),
    (35, 'Camel'), (36, 'Tacos'), (37, 'Magnetism'), (38, 'Tiger'), (39, 'Donut'),
    (40, 'Symmetry'), (41, 'Solar'), (42, 'Meteorology'), (43, 'Elephant'), (44, 'Bear'),
    (45, 'Demography'), (46, 'Rhino'), (47, 'Biology'), (48, 'France'), (49, 'Sociology'),
    (50, 'Astronaut'), (51, 'Australia'), (52, 'Hippo'), (53, 'Fox'), (54, 'Brazil'),
    (55, 'Giraffe'), (56, 'Botany'), (57, 'Sushi'), (58, 'Pollution'), (59, 'Ecosystem'),
    (60, 'Economics'), (61, 'Algebra'), (62, 'Zebra'), (63, 'Relativity'), (64, 'Antelope'),
    (65, 'Drought'), (66, 'Hummus'), (67, 'Canada'), (68, 'Quiche'), (69, 'Penguin'),
    (70, 'Genetics'), (71, 'Portugal'), (72, 'India'), (73, 'Quantum'), (74, 'Ecology'),
    (75, 'Burger'), (76, 'Steak'), (77, 'Molecule'), (78, 'Gelato'), (79, 'Parrot'),
    (80, 'Opera'), (81, 'Tapas'), (82, 'Ozone'), (83, 'Whale'), (84, 'Ramen'),
    (85, 'Mexico'), (86, 'Wolf'), (87, 'Dolphin'), (88, 'Bruschetta'), (89, 'Jaguar'),
    (90, 'Windmill'), (91, 'Language'), (92, 'Owl'), (93, 'Scone'), (94, 'Religion'),
    (95, 'Crocodile'), (96, 'Solar System'), (97, 'Vaccine'), (98, 'Climate'), 
    (99, 'Paleontology'), (100, 'Lasagna'), (101, 'Tundra'), (102, 'Volcano'),
    (103, 'Hydrology'), (104, 'Insect'), (105, 'Coral Reef'), (106, 'Algorithmic Trading'),
    (107, 'Cybernetics'), (108, 'Biryani'), (109, 'Italy'), (110, 'Spain'), 
    (111, 'Holography'), (112, 'Ancient Rome'), (113, 'Photography'), (114, 'Shark'),
    (115, 'Renaissance'), (116, 'Ramen'), (117, 'History'), (118, 'Literature'), 
    (119, 'Falcon'), (120, 'Anthropology'), (121, 'Pluto'), (122, 'Orchestra'), 
    (123, 'Physics'), (124, 'Chocolate'), (125, 'Parrot'), (126, 'Finland'),
    (127, 'Lynx'), (128, 'Tiramisu'), (129, 'Politics'), (130, 'Bruschetta'), 
    (131, 'Climate'), (132, 'Gelato'), (133, 'Camel'), (134, 'Neuroscience'),
    (135, 'Jaguar'), (136, 'Bagel'), (137, 'Fox'), (138, 'Canada'), (139, 'Ethics'),
    (140, 'Tapas'), (141, 'Cheesecake'), (142, 'Muffin'), (143, 'Zebra'), 
    (144, 'Symmetry'), (145, 'Bear'), (146, 'Architecture'), (147, 'Drought'), 
    (148, 'Evolution'), (149, 'Falcon'), (150, 'Rhetoric')


SET IDENTITY_INSERT Article OFF;

-- Insert data into the Game table
SET IDENTITY_INSERT Game ON;

INSERT INTO Game (UserProfileId, StartArticleId, EndArticleId, StepCount, Duration, TimeStamp, Completed) 
VALUES
(1, 5, 15, 7, 300, '2024-10-01 12:00:00', 1),
(2, 10, 20, 5, 200, '2024-10-02 14:30:00', 1),
(3, 8, 12, 10, 600, '2024-10-03 16:45:00', 0),
(3, 3, 18, 8, 400, '2024-10-04 09:15:00', 1),
(2, 6, 22, 6, 250, '2024-10-05 18:10:00', 1),
(1, 7, 25, 12, 700, '2024-10-06 20:25:00', 0),
(2, 9, 14, 9, 450, '2024-10-07 08:30:00', 1),
(3, 11, 17, 4, 180, '2024-10-08 11:00:00', 1),
(2, 13, 21, 11, 650, '2024-10-09 13:45:00', 0),
(1, 2, 16, 7, 300, '2024-10-10 15:30:00', 1),
(1, 14, 24, 5, 220, '2024-10-11 17:20:00', 1),
(2, 19, 23, 8, 420, '2024-10-12 19:00:00', 0),
(3, 4, 9, 6, 240, '2024-10-13 21:45:00', 1),
(3, 10, 27, 10, 560, '2024-10-14 23:00:00', 1),
(2, 18, 30, 3, 150, '2024-10-15 07:30:00', 1);

SET IDENTITY_INSERT Game OFF;

-- Insert data into the Message table
SET IDENTITY_INSERT Message ON;

INSERT INTO Message (Id, UserProfileId, Content, TimeStamp)
VALUES
(1, 1, 'This is the first message.', '2024-10-08 10:00:00'),
(2, 2, 'Another message content here.', '2024-10-08 10:05:00'),
(3, 3, 'Yet another message for testing.', '2024-10-08 10:10:00');

SET IDENTITY_INSERT Message OFF;


