CREATE DATABASE fametro;
USE fametro;

CREATE TABLE funcionarios(
    id int unsigned not null auto_increment,
    nome VARCHAR(40) NOT NULL,
    salario double not null default '0',
    departamento VARCHAR(40) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE veiculos (
    id int unsigned not null auto_increment,
    funcionarios_id int unsigned default null,
    veiculo varchar(40) not null default '0',
    placa varchar (10) not null default '0',
    primary key(id),
    constraint fk_veic_func foreign key(funcionarios_id) references funcionarios(id)
);

/*FUNCIONARIOS*/
insert into funcionarios (id, nome, salario, departamento) 
values (0, 'juan', 10000, 'TI');
select * 
from funcionarios;

insert into funcionarios (id, nome, salario, departamento) 
values (2, 'alberto', 600, 'Med');
select * 
from funcionarios;

/*VEICULOS*/
insert into veiculos (id, funcionarios_id, veiculo, placa) 
values (0, 0, 'A4', '1131');
select * 
from veiculos;

insert into veiculos (id, funcionarios_id, veiculo, placa) 
values (0, 0, 'A4', '1131');
select *
from veiculos;
