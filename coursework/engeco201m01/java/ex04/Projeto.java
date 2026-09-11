package ex04;
public class Projeto {
    private String nome;
    private List<Funcionario> funcionarios;
    private Map<Funcionario, Double> horasTrabalhadasPorSemana;
    private Funcionario supervisorDireto;

    public Projeto(String nome, Funcionario supervisorDireto) {
        this.nome = nome;
        this.funcionarios = new ArrayList<>();
        this.horasTrabalhadasPorSemana = new HashMap<>();
        this.supervisorDireto = supervisorDireto;
    }

    public void addFuncionario(Funcionario funcionario, double horasTrabalhadasPorSemana) {
        this.funcionarios.add(funcionario);
        this.horasTrabalhadasPorSemana.put(funcionario, horasTrabalhadasPorSemana);
    }

    // getters y setters
}
