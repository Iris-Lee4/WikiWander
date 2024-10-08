USE [master]

IF db_id('WikiWander') IS NULL
  CREATE DATABASE [WikiWander]
GO

USE [WikiWander]
GO


DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Article];
DROP TABLE IF EXISTS [Game];
DROP TABLE IF EXISTS [Message];
GO

-- Creating the User table
CREATE TABLE UserProfile (
    id INT PRIMARY KEY IDENTITY(1,1),
    firstName NVARCHAR(50),
    lastName NVARCHAR(50),
    displayName NVARCHAR(50),
    email NVARCHAR(100)
);

-- Creating the Article table
CREATE TABLE Article (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255)
);

-- Creating the Game table
CREATE TABLE Game (
    id INT PRIMARY KEY IDENTITY(1,1),
    userProfileId INT FOREIGN KEY REFERENCES UserProfile(id),
    startArticleId INT FOREIGN KEY REFERENCES Article(id),
    endArticleId INT FOREIGN KEY REFERENCES Article(id),
    stepCount INT,
    duration INT
);

-- Creating the Message table
CREATE TABLE Message (
    id INT PRIMARY KEY IDENTITY(1,1),
    userProfileId INT FOREIGN KEY REFERENCES UserProfile(id),
    content NVARCHAR(MAX),
    timeStamp DATETIME
);
