CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCAR(30),
    devoured tinyint NOT NULL DEFAULT 0
);