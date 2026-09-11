package ex03;

/**
 * JUAN JOSÉ GOUVÊA CARDENAS
 * POO - 2023.1
 * RA: 2255151
 * ENGECO201M01
 */

public class Metodos {

  /*PRIMEIRA QUESTÃO */
  public void calcularQuadrado(double valor1, double valor2) {
    double diferenca = valor1 - valor2;
    double quadrado = diferenca * diferenca;
    System.out.println("O resultado do quadrado é: " + quadrado);
  }

  /*SEGUNDA QUESTÃO */
  public void calculaSalarioMinimo(double salario, double salMin) {
    double salarioMinimo = salario / salMin;
    System.out.println("Quantidade de salarios mínimos: " + salarioMinimo);
  }

  /*TERCEIRA QUESTÃO */
  public void calcularValor(double valor, double taxa) {
    double valorFinal = valor + (valor * (taxa / 100));
    System.out.println("Valor final: " + valorFinal);
  }

  /*QUARTA QUESTÃO */
  public void restaurante(double despesas) {
    double total = despesas + (despesas * 0.10);
    System.out.println("Conta + 10% de gorjeta: " + total);
  }

  /*QUINTA QUESTÃO*/
  public void trocarValores(double valor1, double valor2) {
    double aux = valor1;
    valor1 = valor2;
    valor2 = aux;
    System.out.println("Valor 1: " + valor1);
    System.out.println("Valor 2: " + valor2);
  }

  /*SEXTA QUESTÃO*/

  public void calculaPrestacao(double valor, double taxa, double tempo) {
    double prestacao = valor + (valor * (taxa / 100) * tempo);
    System.out.println(prestacao);
  }

  /* SETIMA QUESTÃO */
  public void calculaSalarioLiquido(
    double valorHora,
    double numAulas,
    double desconto
  ) {
    double salarioBruto = valorHora * numAulas;
    double salarioLiquido = salarioBruto - (salarioBruto * (desconto / 100));
    System.out.println(salarioLiquido);
  }

  /* OITAVA QUESTÃO --- */

  public void calculaValorComDesconto(double valorProduto) {
    double desconto = valorProduto * 0.1; // 10% de desconto
    double valorComDesconto = valorProduto - desconto;
    System.out.println(valorComDesconto);
  }

  /* NONA QUESTÃO --- */
  public void reajustarSaldo(double saldo) {
    double novoSaldo = saldo * 1.1; // Reajuste de 10%
    System.out.println("Novo saldo: R$" + novoSaldo);
  }
}
