-- EXERCÍCIO 4
-- JUAN JOSÉ GOUVÊA CARDENAS
CREATE DATABASE HONDA;
USE HONDA;

CREATE TABLE MARCAS (
 MARCA VARCHAR(50) NOT NULL,
 MODELO VARCHAR(100) NOT NULL,
 PRIMARY KEY(MARCA)
);

CREATE TABLE CARROS (
 CODIGO INT UNSIGNED NOT NULL AUTO_INCREMENT,
 MARCA VARCHAR(100) NOT NULL,
 MODELO VARCHAR(100) NOT NULL,
 ANO INT UNSIGNED NOT NULL,
 COR VARCHAR(100),
 PRIMARY KEY(CODIGO),
 INDEX FK_MARCAS(MARCA),
 FOREIGN KEY (MARCA) REFERENCES MARCAS(MARCA)
);

-- INSERTAR
INSERT INTO MARCAS(MARCA, MODELO) 
VALUES ('VW','Volkswagem'), ('Ford','Ford'),
('GM','General Motors'), ('Fiat','Fiat'),
('Renault','Renault'), ('MB','Mercedes Bens'), 
('Peugeot','Peugeot'), ('Chrysler','Chrysler');
SELECT * FROM MARCAS;

INSERT INTO CARROS(MARCA, MODELO, ANO, COR) 
VALUES ('VW','Fox',2005,'preto'),('VW','Fox',2008,'preto'),
 ('Ford','Ecosport',2009,'verde'),('Ford','KA',2008,'prata'),
 ('Fiat','Punto',2008,'Branco'),('Fiat','Uno',2007,'preto'),
 ('Fiat','Stilo',2004,'prata'),('Fiat','Uno',2005,'prata'),
 ('Fiat','Stilo',2008,'verde'),('Fiat','Uno',2009,'Branco'),
 ('Peugeot','207',2010,'prata'),('Peugeot','207',2007,'azul'),
 ('Chrysler','300 C',2008,'verde');
SELECT * FROM CARROS;