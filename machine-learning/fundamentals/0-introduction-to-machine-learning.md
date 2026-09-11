# Introdução a Machine Learning

Machine Learning pode se dividir em duas areas: Aprendizado Supervisionado e Aprendizado Não Supervisionado.

## Aprendizado Supervisionado

É onde a informação está rotulada, ou seja, o algoritmo sabe o que é cada coisa. Por exemplo, se você quer que o algoritmo aprenda a diferenciar um cachorro de um gato, você vai ter que dar a ele uma base de dados com fotos de cachorros e gatos, e dizer quais são cachorros e quais são gatos. A partir disso, o algoritmo vai aprender a diferenciar os dois.

Podem ser divididos em problemas de classificação e problemas de regressão.

**Regressão:** Tentamos prever uma saída continua, ou valor numérico. Por exemplo, se você quer prever o preço de uma casa, você vai dar ao algoritmo uma base de dados com o preço de várias casas, e ele vai aprender a prever o preço de uma casa a partir de suas características.

Aqui tem um exemplo:

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# Load the data
housing_data = pd.read_csv('housing_data.csv')
X = housing_data[['Sq ft', 'Burglaries']]
y = housing_data['Rent']

# Create the model
reg = LinearRegression()

# Train the model
reg.fit(X, y)

square_footage = 950
number_of_burglaries = 2

y_pred = reg.predict(np.array([square_footage, number_of_burglaries]).reshape(1, 2))

print(y_pred)
```

**Classificação:** Tentamos prever uma saída discreta, ou seja, um valor que não é contínuo. Por exemplo, identificar se uma imagem é de um cachorro ou de um gato, ou se um email é spam ou não.

Exemplo usando o algoritmo k-nearest neighbors para diferenciar humanos e robos.

```python
import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

# Load the data
photo_id_times = pd.read_csv('photo_id_times.csv')

# Separate the data into independent and dependent variables
X = np.array(photo_id_times['Time to id photo']).reshape(-1, 1)
y = photo_id_times['Class']

# Create a model and fit it to the data
neigh = KNeighborsClassifier(n_neighbors=3)
neigh.fit(X, y)

time_to_identify_picture = 5

# Make a prediction based on how long it takes to identify a picture
y_pred = neigh.predict(np.array(time_to_identify_picture).reshape(1, -1))

if y_pred == 1:
    print("We think you're a robot.")
else:
    print("Welcome, human!")
```

## Aprendizado Não Supervisionado

É um tipo de aprendizado de máquina onde o programa aprende a estrutura inerente de uma base de dados com exemplos nao rotulados.

Clustering é um método de aprendizado de máquina que encontra padrões e estruturas em informação não rotulada, que é agrupada em clusters. Por exemplo:

- Redes sociais fazem clusters de seu news feed.
- Sites fazem clusters de usuários para recomendar produtos.
- Motores de busca agrupam páginas com base em similaridade de conteúdo.

Outro exemplo: Uma rede social quer separar seus usuários em categorias, baseado no tipo de conteúdo que eles engajam mais. Para isso, ela usa o algoritmo k-means clustering. Juntaram assim, 3 tipos de dados dos usuários:

- Números de horas por semana que passaram lendo posts.
- Números de horas por semana que passaram assistindo vídeos.
- Números de horas por semana que passaram ouvindo música.

```python
import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
import codecademylib3
from plot import plot_clusters

# Load the data
media_usage = pd.read_csv('media_usage.csv')

# Create the model
kmeans = KMeans(n_clusters=3)

# Fit the model to the data
kmeans.fit(media_usage)

labels = kmeans.predict(media_usage)

# Plot the clusters
plot_clusters(media_usage, labels)

```
