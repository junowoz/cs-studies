import javax.swing.JOptionPane;

class Main {
    public static void main(String[] args) throws Exception {
        String recebeNome, recebeEnd, recebeDep, recebeReg;
        Double recebeSalario;

        recebeNome = JOptionPane.showInputDialog("Digite o seu nome: ");
        recebeReg = JOptionPane.showInputDialog("Digite o seu registro: ");
        recebeEnd = JOptionPane.showInputDialog("Digite o seu endereco: ");
        recebeSalario = Double.parseDouble(JOptionPane.showInputDialog("Digite o seu salario: "));
        recebeDep = JOptionPane.showInputDialog("Digite o seu departamento: ");

        Funcionario.infoProjeto();

        Funcionario funcionario = new Funcionario(recebeNome, recebeReg, recebeEnd, recebeSalario, recebeDep);
        funcionario.dependente();

    }
}


