package ex02;
public class Exercicio2 {

  public static void main(String[] args) {
    Exercicio2 exercicio2 = new Exercicio2();
    double porcento = exercicio2.calculaDezPorcento(1000);
    double desconto = exercicio2.calculaDesconto(1000, 10);
    double retornaDesconto = exercicio2.calculaRetornaDesconto(10000, 0.2);
    System.out.println(porcento);
    System.out.println(desconto);
    System.out.println(retornaDesconto);
  }

  /*
   * O primeiro método, chamado "calculaDezPorcento", recebe o salário de um funcionário como parâmetro e retorna o valor correspondente a 10% deste salário.
   * O método calcula o valor multiplicando o salário por 0.1, que é a forma de se obter 10% de um valor.
   */
  public double calculaDezPorcento(double salario) {
    double valorDezPorcento = salario * 0.1;
    return valorDezPorcento;
  }

  /*
   * O segundo método, chamado "calculaDesconto", recebe o salário do funcionário e um percentual de desconto como parâmetros.
   * O método então calcula o valor do desconto multiplicando o salário pelo percentual de desconto dividido por 100.
   * Isso é necessário porque o percentual é uma porcentagem, ou seja, uma fração em relação a 100.
   */
  public double calculaDesconto(double salario, double percentualDesconto) {
    double valorDesconto = salario * (percentualDesconto / 100);
    return valorDesconto;
  }

  /*
   * O terceiro método, chamado "calculaRetornaDesconto", é semelhante ao segundo, mas,
   * em vez de apenas calcular o valor do desconto, ele retorna este valor para ser utilizado em outro lugar no código.
   */
  public double calculaRetornaDesconto(double salario, double percentualDesconto) {
    double valorDesconto = salario * (percentualDesconto / 100);
    return valorDesconto;
  }
}
