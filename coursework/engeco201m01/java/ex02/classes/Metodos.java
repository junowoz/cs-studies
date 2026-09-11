package ex02.classes;

public class Metodos {
  private double valor;

  public double getValor() {
    return valor;
  }

  public void setValor(double valor) {
    this.valor = valor;
  }

  public void somarValor() {
    double calculo = valor + 100;
    System.out.println("Valor calculado: " + calculo);
  }
}