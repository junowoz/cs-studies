package ex04;
public class Main {
    public static void main(String[] args) {
        // Creamos los departamentos
        Departamento departamento1 = new Departamento("Departamento 1");
        Departamento departamento2 = new Departamento("Departamento 2");

        // Creamos los funcionarios
        Funcionario funcionario1 = new Funcionario("Funcionario 1", "123456", "Endereco 1", 1000.0, departamento1);
        Funcionario funcionario2 = new Funcionario("Funcionario 2", "789012", "Endereco 2", 2000.0, departamento2);

        // Asignamos proyectos a los funcionarios
        Projeto projeto1 = new Projeto("Projeto 1", funcionario1);
        projeto1.addFuncionario(funcionario1, 20.0);
        projeto1.addFuncionario(funcionario2, 30.0);
        funcionario1.addProjeto(projeto1);
        funcionario2.addProjeto(projeto1);

        // Agregamos los dependientes de los funcionarios
        Dependente dependente1 = new Dependente("Dependente 1", new Date(), "Filho");
        funcionario1.addDependente(dependente1);

        // Calculamos el desconto de INSS del salario de cada funcionario
        double descontoInssFuncionario1 = funcionario1.calcularDescontoInss();
        double descontoInssFuncionario2 = funcionario2.calcularDescontoInss();

        // Imprimimos la información de los funcionarios
        System.out.println(funcionario1.getNome() + " trabalha no " + funcionario1.getDepartamento().getNome() + " e recebe um salário de R$" + funcionario1.getSalario() + ", com um desconto de INSS de R$" + descontoInssFuncionario1);
        System.out.println(funcionario2.getNome() + " trabalha no " + funcionario2.getDepartamento().getNome() + " e recebe um salário de R$" + funcionario2.getSalario() + ", com um desconto de INSS de R$" + descontoInssFuncionario2);
    }
}

