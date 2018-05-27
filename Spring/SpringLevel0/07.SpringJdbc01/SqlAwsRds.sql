CREATE SCHEMA Rider; 
DROP TABLE IF EXISTS Rider.Ride;
CREATE TABLE Rider.Ride (Id int(11) NOT NULL AUTO_INCREMENT,Name varchar(100) NOT NULL,Duration int(11) NOT NULL,PRIMARY KEY (Id));
LOCK TABLES Rider.Ride WRITE;
INSERT INTO Rider.Ride(Id,Name,Duration) VALUES (1,'Bobsled Trail Ride',35),(4,'Willow Trail Ride',30),(5,'Round Valley Ride',38),(6,'Sagebrush Trail',33),(7,'Yellow Fork Trail',33);
UNLOCK TABLES;
Select * From Rider.Ride;
Truncate Table Rider.Ride;
ALTER TABLE Rider.Ride ADD RideDate DATETIME AFTER Duration;--Added For BatchUpdate