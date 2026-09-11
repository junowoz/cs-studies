--CRIAR UM BANCO DE DADOS--
--CRIAR DUAS TABELA
--RELACIONAR AS TABELAS
------------------------------------------
CREATE DATABASE Fametro;
CREATE TABLE funcionarios(
id int unsigned not null auto_increment,
nome varchar(40) not null,
salario double not null default '0',
departamento varchar(40) not null,
PRIMARY KEY(id)
);

CREATE TABLE veiculos(
id int unsigned not null auto_increment,
funcionarios_id int unsigned default null,
veiculo varchar(40) not null default '0',
placa varchar(10) not null default '0',
PRIMARY KEY(id),
CONSTRAINT fk_veiculos_funcionarios FOREIGN KEY (funcionario_id) REFERENCES funcionarios (id)
);
