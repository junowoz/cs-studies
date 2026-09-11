-- Active: 1665775629680@@127.0.0.1@3306@IMOBILIARIO_DB
-- CRIANDO A BASE, E GERANDO TABELAS
CREATE DATABASE IMOBILIARIO_DB;

USE IMOBILIARIO_DB;

CREATE TABLE bairro (
baicod INT NOT NULL AUTO_INCREMENT,
bainome VARCHAR(30) NOT NULL,
PRIMARY KEY (baicod)
);

CREATE TABLE proprietario (
codprop INT NOT NULL AUTO_INCREMENT,
nomeprop VARCHAR(50) NOT NULL,
endprop VARCHAR(30) NOT NULL,
telprop INT NOT NULL,
emailprop VARCHAR(50) NOT NULL,
PRIMARY KEY (codprop)
);

CREATE TABLE corretor (
codcor INT NOT NULL AUTO_INCREMENT,
nomecor VARCHAR(50) NOT NULL,
endcor VARCHAR(30) NOT NULL,
telcor INT NOT NULL,
emailcor VARCHAR(50) NOT NULL,
PRIMARY KEY (codcor)
);

CREATE TABLE inquilino (
codinq INT NOT NULL AUTO_INCREMENT,
nomeinq VARCHAR(50) NOT NULL,
endinq VARCHAR(30) NOT NULL,
telinq INT NOT NULL,
emailinq VARCHAR(30) NOT NULL,
PRIMARY KEY (codinq)
);

CREATE TABLE imovel (
codimov INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(200) NOT NULL,
valor VARCHAR(50) NOT NULL,
endimov VARCHAR(30) NOT NULL,
condicao VARCHAR(20) NOT NULL,
PRIMARY KEY (codimov)
);

CREATE TABLE aluguel (
codalug INT NOT NULL AUTO_INCREMENT,
codpropX INT NOT NULL,
codcorX INT NOT NULL,
codinqX INT NOT NULL,
codimovX INT NOT NULL,
dataini DATETIME NOT NULL,
datafim DATETIME NOT NULL,
PRIMARY KEY (codalug),
FOREIGN KEY(codpropX) REFERENCES proprietario(codprop),
FOREIGN KEY(codcorX) REFERENCES corretor(codcor),
FOREIGN KEY(codinqX) REFERENCES inquilino(codinq),
FOREIGN KEY(codimovX) REFERENCES imovel(codimov)
);

-- INSERINDO DADOS

INSERT INTO proprietario(nomeprop, endprop, telprop, emailprop) 
VALUES ('Ana','Rua 10','42198754','ana@gmail.com'),('Dana','Rua 11','645345','dana@gmail.com'),
('Paul','Rua 12','2039023','paul@gmail.com'),('Paulo','Rua 16','62345253','paulo@gmail.com'),
('Jobs','Rua 13','4567664','Jobs@gmail.com'),('Narciso','Rua 17','523453','narci@gmail.com'),
('Robert','Rua 14','6345364','robert@gmail.com'),('Anderson','Rua 18','764643','ander@gmail.com'),
('Cannes','Rua 15','234523','cannes@gmail.com'),('Lobo','Rua 10','4520894','lobo@gmail.com'); 

INSERT INTO corretor(nomecor,endcor,telcor,emailcor) 
VALUES('Fernando','Rua 1','9293958','fernando@gmail.com'),('Natalina','Rua 2','934201','fernando@gmail.com'),
('Nunes','Rua 3','9238489','pedro@gmail.com'),('Alberto','Rua 4','3912903','katia@gmail.com'),
('Juan','Rua 5','9238932','alva@gmail.com'),('Marcio','Rua 6','4190380','nino@gmail.com'),
('Julia','Rua 7','9542894','rez@gmail.com'),('Putin','Rua 8','3409801','nendes@gmail.com'),
('Pepe','Rua 9','9530298','luka@gmail.com'),('Macron','Rua 10','1234098','vidi@gmail.com'); 


INSERT INTO inquilino(nomeinq, endinq, telinq, emailinq) 
VALUES ("Joao","Centro","9285838","jao@gmail.com"),("Carlos","Aleixo","952452","fili@gmail.com"),
("Juan","PN","9384828","biba@gmail.com"),("Jose","Compensa","952344","tesla@gmail.com"),
("Pedro","Amaro","95949391","neris@gmail.com"),("Anne","Amaro","9421235","apple@gmail.com"),
("Felipe","Aleixo","933432088","doug@gmail.com"),("Carol","Centro","9432148","nero@gmail.com"),
("Neto","Centro","9594929","pedr@gmail.com"),("Pin","CN","9439193","dub@gmail.com");

INSERT INTO imovel(descricao, valor, endimov, condicao)
VALUES ('Casa','8000','Rua 21','Disponivel'),('AP','9000','Rua 251','Disponivel'),
('Casa','5000','Rua 26','Disponivel'),('AP','1000','Rua 216','Indisponivel'),
('Ap','4000','Rua 22','Indisponivel'),('Casa','3500','Rua 31','Indisponivel'),
('Bunker','6000','Rua 23','Disponivel'),('Bunker','60300','Rua 0','Indisponivel'),
('Taca','1000','Rua 24','Indisponivel'),('Casa','3000','Rua 28','Disponivel');

INSERT INTO aluguel(codpropX, codcorX, codinqX, codimovX, dataini, datafim)
VALUES (1,1,1,1,"2021-03-03", "2024-05-05"),(1,1,1,1,"2022-03-03", "2024-05-05"),
(1,1,1,1,"2022-04-04", "2026-08-05"),(1,1,1,1,"2026-05-02", "2030-12-05"),
(1,1,1,1,"2023-05-05", "2027-09-05"),(1,1,1,1,"2027-04-05", "2031-11-05"),
(1,1,1,1,"2024-06-06", "2028-10-05"),(1,1,1,1,"2028-03-07", "2032-10-05"),
(1,1,1,1,"2025-07-07", "2029-11-05"),(1,1,1,1,"2029-06-21", "2033-09-05");

SELECT*FROM proprietario;
SELECT*FROM corretor;
SELECT*FROM inquilino;
SELECT*FROM imovel;
SELECT*FROM aluguel;