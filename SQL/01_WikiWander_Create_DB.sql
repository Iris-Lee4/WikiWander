USE [master]

IF db_Id('WikiWander') IS NULL
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
    Id INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    DisplayName NVARCHAR(50),
    Email NVARCHAR(100)
);

-- Creating the Article table
CREATE TABLE Article (
    Id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255)
);

-- Creating the Game table
CREATE TABLE Game (
    Id INT PRIMARY KEY IDENTITY(1,1),
    UserProfileId INT FOREIGN KEY REFERENCES UserProfile(Id),
    StartArticleId INT FOREIGN KEY REFERENCES Article(Id),
    EndArticleId INT FOREIGN KEY REFERENCES Article(Id),
    StepCount INT,
    Duration INT
);

-- Creating the Message table
CREATE TABLE Message (
    Id INT PRIMARY KEY IDENTITY(1,1),
    UserProfileId INT FOREIGN KEY REFERENCES UserProfile(Id),
    Content NVARCHAR(MAX),
    TimeStamp DATETIME
);
