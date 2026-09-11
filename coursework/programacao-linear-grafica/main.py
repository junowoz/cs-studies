import tkinter as tk
from tkinter import messagebox, ttk  # Importa componentes da interface gráfica
import matplotlib.pyplot as plt       # Biblioteca para plotar gráficos
import numpy as np                    # Biblioteca para operações numéricas
from sympy import symbols, Eq, solve  # Biblioteca para álgebra simbólica
from matplotlib.patches import Polygon as mplPolygon  # Para desenhar a região viável

class ProgramaLinear:
    def __init__(self, root):
        # Método construtor da classe ProgramaLinear
        self.root = root
        self.root.title("Método Gráfico de Programação Linear")
        self.restricoes = []  # Inicializa a lista de restrições
        self.criar_interface()  # Chama o método para criar a interface gráfica

    def criar_interface(self):
        # Método para criar a interface gráfica do usuário (GUI)

        # Frame da Função Objetivo
        frame_obj = tk.LabelFrame(self.root, text="Função Objetivo")
        frame_obj.pack(padx=10, pady=5, fill="x")

        # Opções para selecionar se deseja Maximizar ou Minimizar
        self.tipo_objetivo = tk.StringVar(value="Maximizar")  # Variável que armazena o tipo de otimização
        tk.Label(frame_obj, text="Tipo:").grid(row=0, column=0, padx=5, pady=5)
        tk.Radiobutton(frame_obj, text="Maximizar", variable=self.tipo_objetivo, value="Maximizar").grid(row=0, column=1)
        tk.Radiobutton(frame_obj, text="Minimizar", variable=self.tipo_objetivo, value="Minimizar").grid(row=0, column=2)

        # Campos para entrada dos coeficientes da Função Objetivo
        tk.Label(frame_obj, text="Função Objetivo:").grid(row=1, column=0, padx=5, pady=5)
        self.coef_x1 = tk.Entry(frame_obj, width=5)  # Campo para o coeficiente de x1
        self.coef_x1.grid(row=1, column=1)
        tk.Label(frame_obj, text="* x1 +").grid(row=1, column=2)
        self.coef_x2 = tk.Entry(frame_obj, width=5)  # Campo para o coeficiente de x2
        self.coef_x2.grid(row=1, column=3)
        tk.Label(frame_obj, text="* x2").grid(row=1, column=4)

        # Frame das Restrições
        frame_res = tk.LabelFrame(self.root, text="Restrições")
        frame_res.pack(padx=10, pady=5, fill="x")
        self.container_res = tk.Frame(frame_res)  # Container para as restrições
        self.container_res.pack()

        # Cabeçalhos das colunas das Restrições
        cabecalhos = ["Coef. x1", "Coef. x2", "Operador", "Constante"]
        for idx, texto in enumerate(cabecalhos):
            tk.Label(self.container_res, text=texto).grid(row=0, column=idx, padx=5, pady=5)

        # Botão para adicionar mais restrições
        tk.Button(frame_res, text="Adicionar Restrição", command=self.adicionar_restricao).pack(pady=5)

        # Adiciona duas restrições por padrão
        self.adicionar_restricao()
        self.adicionar_restricao()

        # Botão para calcular e plotar o gráfico
        tk.Button(self.root, text="Calcular e Plotar", command=self.calcular_plotar).pack(pady=10)

    def adicionar_restricao(self):
        # Método para adicionar uma nova restrição na interface

        linha = len(self.restricoes) + 1  # Calcula o número da linha para posicionar os widgets
        coef_x1 = tk.Entry(self.container_res, width=5)  # Campo para o coeficiente de x1
        coef_x1.grid(row=linha, column=0)
        coef_x2 = tk.Entry(self.container_res, width=5)  # Campo para o coeficiente de x2
        coef_x2.grid(row=linha, column=1)
        operador = ttk.Combobox(self.container_res, values=["<=", ">=", "="], width=5)  # ComboBox para selecionar o operador
        operador.grid(row=linha, column=2)
        operador.current(0)  # Define o operador padrão como "<="
        constante = tk.Entry(self.container_res, width=5)  # Campo para a constante
        constante.grid(row=linha, column=3)
        # Adiciona a restrição à lista de restrições
        self.restricoes.append((coef_x1, coef_x2, operador, constante))

    def calcular_plotar(self):
        # Método para calcular a solução ótima e plotar o gráfico

        try:
            # Captura e valida os coeficientes da função objetivo
            tipo = self.tipo_objetivo.get()  # Tipo de otimização selecionado
            if not self.coef_x1.get() or not self.coef_x2.get():
                raise ValueError("Por favor, preencha todos os campos da função objetivo.")
            c1 = float(self.coef_x1.get())  # Converte o coeficiente de x1 para float
            c2 = float(self.coef_x2.get())  # Converte o coeficiente de x2 para float
            if tipo == "Minimizar":
                c1, c2 = -c1, -c2  # Inverte os coeficientes para o caso de minimização

            # Define as variáveis simbólicas x1 e x2
            x1, x2 = symbols('x1 x2', real=True, nonnegative=True)
            func_objetivo = c1 * x1 + c2 * x2  # Define a função objetivo simbólica

            # Captura e processa as restrições
            inequacoes = []  # Lista para armazenar as inequações (para verificação dos pontos)
            restricoes_equacoes = []  # Lista para armazenar as equações (para encontrar interseções)
            for coef_x1, coef_x2, operador, constante in self.restricoes:
                # Verifica se todos os campos da restrição foram preenchidos
                if not coef_x1.get() or not coef_x2.get() or not constante.get():
                    raise ValueError("Por favor, preencha todos os campos das restrições.")
                a1 = float(coef_x1.get())  # Coeficiente de x1 na restrição
                a2 = float(coef_x2.get())  # Coeficiente de x2 na restrição
                b = float(constante.get())  # Constante da restrição
                lhs = a1 * x1 + a2 * x2  # Lado esquerdo da restrição
                op = operador.get()  # Operador selecionado
                if op == "<=":
                    inequacoes.append(lhs <= b)  # Adiciona a inequação para verificação
                    restricoes_equacoes.append(Eq(lhs, b))  # Adiciona a equação para encontrar interseções
                elif op == ">=":
                    inequacoes.append(lhs >= b)
                    restricoes_equacoes.append(Eq(lhs, b))
                elif op == "=":
                    inequacoes.append(Eq(lhs, b))
                    restricoes_equacoes.append(Eq(lhs, b))
                else:
                    raise ValueError(f"Operador inválido: {op}")

            # Gera os vértices da região viável encontrando interseções entre as restrições
            vertices = []
            for i in range(len(restricoes_equacoes)):
                for j in range(i + 1, len(restricoes_equacoes)):
                    eq1 = restricoes_equacoes[i]
                    eq2 = restricoes_equacoes[j]
                    # Resolve o sistema de equações para encontrar o ponto de interseção
                    ponto = solve([eq1, eq2], (x1, x2))
                    if ponto and ponto.get(x1) is not None and ponto.get(x2) is not None:
                        x_val = ponto[x1]
                        y_val = ponto[x2]
                        # Verifica se o ponto está no primeiro quadrante (valores não negativos)
                        if x_val >= 0 and y_val >= 0:
                            # Verifica se o ponto satisfaz todas as restrições (inequações)
                            valido = all(ineq.subs({x1: x_val, x2: y_val}) for ineq in inequacoes)
                            if valido:
                                vertices.append((float(x_val), float(y_val)))  # Adiciona o ponto à lista de vértices

            # Adiciona os pontos de interseção das restrições com os eixos x1=0 e x2=0
            for ineq in restricoes_equacoes:
                # Interseção com x1 = 0
                sol = solve([ineq, Eq(x1, 0)], (x1, x2))
                if sol and sol.get(x1) is not None and sol.get(x2) is not None:
                    x_val = sol[x1]
                    y_val = sol[x2]
                    if x_val >= 0 and y_val >= 0:
                        valido = all(ineq_.subs({x1: x_val, x2: y_val}) for ineq_ in inequacoes)
                        if valido:
                            vertices.append((float(x_val), float(y_val)))
                # Interseção com x2 = 0
                sol = solve([ineq, Eq(x2, 0)], (x1, x2))
                if sol and sol.get(x1) is not None and sol.get(x2) is not None:
                    x_val = sol[x1]
                    y_val = sol[x2]
                    if x_val >= 0 and y_val >= 0:
                        valido = all(ineq_.subs({x1: x_val, x2: y_val}) for ineq_ in inequacoes)
                        if valido:
                            vertices.append((float(x_val), float(y_val)))

            if not vertices:
                # Se não houver vértices viáveis, a região viável não existe
                raise ValueError("Não há região viável com as restrições fornecidas.")

            # Remove vértices duplicados
            vertices = list(set(vertices))

            # Ordena os vértices no sentido anti-horário para plotar o polígono corretamente
            vertices = self.ordenar_vertices(vertices)

            # Calcula o valor da função objetivo em cada vértice
            valores_objetivo = [func_objetivo.subs({x1: v[0], x2: v[1]}) for v in vertices]

            # Determina o ponto ótimo (máximo ou mínimo) dependendo do tipo de otimização
            if tipo == "Minimizar":
                indice_otimo = valores_objetivo.index(min(valores_objetivo))
            else:  # Maximizar
                indice_otimo = valores_objetivo.index(max(valores_objetivo))
            ponto_otimo = vertices[indice_otimo]  # Coordenadas do ponto ótimo
            valor_otimo = valores_objetivo[indice_otimo]  # Valor da função objetivo no ponto ótimo

            # Exibe o gráfico com as restrições, região viável e ponto ótimo
            plt.figure(figsize=(8, 6))
            for ineq in restricoes_equacoes:
                # Prepara as equações das restrições para plotagem
                expr = ineq.lhs - ineq.rhs  # Isola a expressão
                y = solve(expr, x2)  # Resolve para x2
                if y:
                    y_expr = y[0]  # Expressão de x2 em função de x1
                    func = lambda x_val: y_expr.subs(x1, x_val)  # Função para calcular x2 dado x1
                    x_vals = np.linspace(0, max(v[0] for v in vertices) + 1, 200)  # Intervalo de x1
                    y_vals = [func(xi) for xi in x_vals]  # Valores correspondentes de x2
                    plt.plot(x_vals, y_vals, label=str(ineq))  # Plota a restrição

            # Adiciona a região viável (polígono) ao gráfico
            region = mplPolygon(vertices, color="gray", alpha=0.3, label="Região Viável")
            plt.gca().add_patch(region)
            # Destaca o ponto ótimo no gráfico
            plt.plot(ponto_otimo[0], ponto_otimo[1], 'ro', label="Ponto Ótimo")

            # Configurações adicionais do gráfico
            plt.xlabel("x1")
            plt.ylabel("x2")
            plt.legend()
            plt.grid()
            plt.show()

            # Exibe o resultado em uma janela de mensagem
            resultado = f"Ponto Ótimo:\nx1 = {ponto_otimo[0]:.2f}, x2 = {ponto_otimo[1]:.2f}\nValor da Função Objetivo: {valor_otimo:.2f}"
            messagebox.showinfo("Resultado", resultado)

        except ValueError as ve:
            # Exibe uma mensagem de erro caso haja alguma entrada inválida ou inconsistência
            messagebox.showerror("Erro", str(ve))
        except Exception as e:
            # Captura qualquer outro erro inesperado
            messagebox.showerror("Erro", f"Ocorreu um erro: {e}")

    def ordenar_vertices(self, vertices):
        # Método para ordenar os vértices no sentido anti-horário

        # Calcula o centro geométrico dos pontos (média das coordenadas)
        centro = (sum([v[0] for v in vertices]) / len(vertices), sum([v[1] for v in vertices]) / len(vertices))
        def angulo(v):
            # Calcula o ângulo de cada vértice em relação ao centro
            return np.arctan2(v[1] - centro[1], v[0] - centro[0])
        # Ordena os vértices com base no ângulo calculado (sentido anti-horário)
        return sorted(vertices, key=angulo)

def fechar_programa():
    # Função para confirmar e executar o fechamento do programa
    if messagebox.askokcancel("Sair", "Você tem certeza de que deseja sair?"):
        root.destroy()  # Fecha a janela principal do Tkinter

# Configuração inicial da interface gráfica
root = tk.Tk()
root.protocol("WM_DELETE_WINDOW", fechar_programa)  # Define a função a ser chamada ao fechar a janela
app = ProgramaLinear(root)  # Cria uma instância do programa
root.mainloop()  # Inicia o loop principal do Tkinter
