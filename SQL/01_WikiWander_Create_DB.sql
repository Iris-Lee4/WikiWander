USE [master]

IF db_id('WikiWander') IS NULL
  CREATE DATABASE [WikiWander]
GO

USE [WikiWander]
GO


DROP TABLE IF EXISTS [Users];
DROP TABLE IF EXISTS [Articles];
DROP TABLE IF EXISTS [Games];
DROP TABLE IF EXISTS [Messages];
GO

-- Creating the Users table
CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    firstName NVARCHAR(50),
    lastName NVARCHAR(50),
    displayName NVARCHAR(50),
    email NVARCHAR(100)
);

-- Creating the Articles table
CREATE TABLE Articles (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255)
);

-- Creating the Games table
CREATE TABLE Games (
    id INT PRIMARY KEY IDENTITY(1,1),
    userId INT FOREIGN KEY REFERENCES Users(id),
    startArticleId INT FOREIGN KEY REFERENCES Articles(id),
    endArticleId INT FOREIGN KEY REFERENCES Articles(id),
    stepCount INT,
    duration INT
);

-- Creating the Messages table
CREATE TABLE Messages (
    id INT PRIMARY KEY IDENTITY(1,1),
    userId INT FOREIGN KEY REFERENCES Users(id),
    content NVARCHAR(MAX),
    timeStamp DATETIME
);
