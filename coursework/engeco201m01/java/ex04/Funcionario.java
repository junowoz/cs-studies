package ex04;
public class Funcionario {
    private String nome;
    private String rg;
    private String endereco;
    private double salario;
    private Departamento departamento;
    private List<Projeto> projetos;
    private double descontoInss;

    public Funcionario(String nome, String rg, String endereco, double salario, Departamento departamento) {
        this.nome = nome;
        this.rg = rg;
        this.endereco = endereco;
        this.salario = salario;
        this.departamento = departamento;
        this.projetos = new ArrayList<>();
    }

    public void addProjeto(Projeto projeto) {
        this.projetos.add(projeto);
    }

    public double calcularDescontoInss() {
        this.descontoInss = this.salario * 0.1;
        return this.descontoInss;
    }

    // getters y setters
}
