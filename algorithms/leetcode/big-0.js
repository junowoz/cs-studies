/**
 * BIG O NOTATION:
 * 
 * Big O Notation fala sobre como um algoritmo escala com o input, não sobre performance
 * Quão bem o algoritmo escala dependendo do Input.
 * 
 * Pode ser usado para medir complexidade temporal: tempo de execução (runtime). Por exemplo num array,
 * num O(n), percorrendo um array por exemplo [][][][][], para encontrar o maior elemento.
 * Quanto tempo demora em runtine, quantos calculos fazemos, ou quantas analises.
 * 
 * Complexidade espacial diz quanto de memoria adicionar precisamos alocar.
 * Nesse caso do array onde encontramos o item maior, alocamos apenas um espaço  na memória.
 * Isso seria complexidade O(1)
 * 
 * Vamos para os tipos de O notation.
 * 1. O(1) significa tempo/memoria constante. Independente do tamanho de input, tem o mesmo tempo
 * de execução. Um exemplo disso seria achar o primeiro elemento de um array. Conforme o input aumenta,
 * o requisito de memória continua, ou no caso de tempo, o tempo continua igual.
 * 
 * 2. O(Log N): Binary Search escala em Log N. Conforme nosso input aumenta muito rapido, o tempo de execução
 * não aumenta tão rápido quanto ele. Escala de forma logaritmica. Enquanto o input escala exponencialmente,
 * o tempo de execução ou memória escala linearmente. 
 * 
 * Log2(10) -> 3.32
 * Log2(20) -> 4.32
 * Log2(40) -> 5.32
 * 
 * Mesmo dobrando o tamanho de input, o tempo de execução dobraria em uma busca a mais
 * 
 * 3. O(n): Se falamos de complexidade temporal, O(n) escala exatamente na medida que o input cresce.
 * Em termos de complexidade espacial também é exatamente igual, Armazena a mesma quantidade do input -
 * que é dado.
 * 
 * 4. O(N Log N): Complexidade temporal, sempre.
 * - Quase todos os algoritmos de Sorting, como Quicksort e Mergesort);
 * - Divide and Conquer também.
 * 
 * 5. O(n^2): Basicamente loopings dentro de loopings. Fors dentro de fors. Quando ele escala numa complexidade
 * onde para cada item de um array, ele checa todos os outros itens.
 */

/**
 * Binary Search: Vamos supor que estamos procurando o elemento 3 em um array. Partimos ele no meio,
 * após isso, partimos de novo no meio, e assim até chegar no elemento que queremos.
 * 
 * Mergesort: Divide um array no meio, e separa em 2, e trata como arrays separados, depois divide novamente
 * esses subarrays, e trata como individuais, até chegar em elementos individuais, e a partir daí, ordena.
 */