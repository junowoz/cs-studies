# Visualize Data with Python

- Jupyter Notebooks for running code and viewing results
- pandas for loading and organizing data
- matplotlib and seaborn for visualizing data

pandas = imported as `pd`
matplotlib.pyplot = imported as `plt`
seaborn = imported as `sns`

## matplotlib

### load matplotlib and pandas

from matplotlib import pyplot as plt
import pandas as pd

### Graph Functions

- plt.plot(x_values, y_values) # Line chart
- plt.scatter(x_values, y_values) # Scatter plot
- plt.bar(x_values, y_values) # Bar graph
- plt.pie(x_values, y_values) # Pie chart
- plt.hist(x_values, y_values) # Histogram

### General Functions

- plt.show() # Displays the graph
- plt.clf() # Clears the current figure
- plt.xlabel('x-axis label') # Adds a label to the x-axis
- plt.ylabel('y-axis label') # Adds a label to the y-axis
- plt.title('Title') # Adds a title
- plt.legend(['label1', 'label2', 'label3']) # Adds a legend
- plt.axis([0, 5, 0, 20]) # Sets the axis limits to [xmin, xmax, ymin, ymax]

## Line Chart

### make a line chart from direct data

plt.plot(['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun'], [540, 500, 490, 590, 680, 710, 610])

### make a line chart using named arrays

day = ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat', 'Sun']
sales_totals = [540, 500, 490, 590, 680, 710, 610]
plt.plot(day, sales_totals)

### make a line chart with columns from a dataframe

df = pd.read_csv('restaurant_data.csv')
plt.plot(df.day, df.sales_totals)

### or

plt.plot(df['day'], df['sales totals'])
