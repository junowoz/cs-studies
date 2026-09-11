import javax.swing.JOptionPane;

public class Funcionario {
    private String nomeDependente, aniverDependente, parentescoDependente;
    private int resposta;
    private static String projeto, supervisor;
    private static Double horas;

    public Funcionario(String nome, String registroGeral, String endereco, Double salario, String departamento){
        salario = salario - (salario*10/100);
        System.out.println("Nome do funcionario: "+nome);
        System.out.println("Registro do funcionario: "+registroGeral);
        System.out.println("Endereco do funcionario: "+endereco);
        System.out.println("Salario do funcionario: "+salario);
        System.out.println("Departamento do funcionario: "+departamento);
    }

    public void dependente(){
        this.resposta = JOptionPane.showConfirmDialog(null, "Possui dependentes?");
        if(resposta==0){
            this.nomeDependente = JOptionPane.showInputDialog("Nome do dependente: "+nomeDependente);
            this.aniverDependente = JOptionPane.showInputDialog("Data de nascimento do dependente: "+aniverDependente);
            this.parentescoDependente = JOptionPane.showInputDialog("Parentesco do dependente: "+parentescoDependente);

            System.out.println("Nome do dependente: "+this.nomeDependente);
            System.out.println("Data de nascimento do dependente: "+this.aniverDependente);
            System.out.println("Parentesco do dependente: "+this.parentescoDependente);
        }
        else{
            System.out.println("Nao ha dependentes");
        }
    }

    public static void infoProjeto(){
        projeto = JOptionPane.showInputDialog("Nome do projeto: "+projeto);
        horas = Double.parseDouble(JOptionPane.showInputDialog("Horas semanais trabalhadas: "));
        supervisor = JOptionPane.showInputDialog("Supervisor do projeto: "+supervisor);
    }

    public String getNomeDependente() {
        return nomeDependente;
    }
    public void setNomeDependente(String nomeDependente) {
        this.nomeDependente = nomeDependente;
    }
    public String getAniverDependente() {
        return aniverDependente;
    }
    public void setAniverDependente(String aniverDependente) {
        this.aniverDependente = aniverDependente;
    }
    public String getParentescoDependente() {
        return parentescoDependente;
    }
    public void setParentescoDependente(String parentescoDependente) {
        this.parentescoDependente = parentescoDependente;
    }
    public int getResposta() {
        return resposta;
    }
    public void setResposta(int resposta) {
        this.resposta = resposta;
    }
    public static String getProjeto() {
        return projeto;
    }
    public static void setProjeto(String projeto) {
        Funcionario.projeto = projeto;
    }
    public static String getSupervisor() {
        return supervisor;
    }
    public static void setSupervisor(String supervisor) {
        Funcionario.supervisor = supervisor;
    }
    public static Double getHoras() {
        return horas;
    }
    public static void setHoras(Double horas) {
        Funcionario.horas = horas;
    }

}

