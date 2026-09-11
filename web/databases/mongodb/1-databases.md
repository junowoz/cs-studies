# Databases

We have many types of databases.

1. Relational Databases: SQL databases, meaning, in the tabular form databases. Composed by columns,
rows and data fields. They are very structured and organized. The most common associations are one-to-one,
 one-to-many and many-to-many.
   - They have a pre-defined schema, meaning that we decide the specific tables and their 
     relationships.
   - They mostly use SQL
   - Relational Database Management System: Relational Databases are managed by them. We have 
     many, like MySQL, Oracle, SQLite, PostgreSQL, etc.
   - Unique Disadvantages: At the enterprise level, where data sets are massive, setting up a 
   relational database can be costly, and the expenses required to maintain and scale it can 
   compound significantly over time. Furthermore, rows and columns consume a great deal of physical 
   space which can lead to implications for performance and cost.

2. Non-Relational Databases: NoSQL databases, meaning, non-tabular databases. Some examples are 
   document-databases, graph databases and key-value stores. They are less structured and organized.
   - Flexibility and Scalability: they are highly adaptable because schemas does not need to be 
     predefined. They are also horizontally scalable, meaning that we can add more servers to 
     handle traffic.
   - Custom Query Language: they have their own query languages, like MongoDB's query language.

## Types of NoSQL Databases

1. Key-Value: A key-value database consists of individual records organized via key-value pairs. 
   In this model, keys and values can be any type of data, ranging from numbers to complex objects. 
   However, keys must be unique. This means this type of database is best when data is attributed to
   a unique key, like an ID number. Ideally, the data is also simple, and we are looking to 
   prioritize fast queries over fancy features. For example, let’s say we wanted to store shopping 
   cart information for customers who shop in an e-commerce store.
   - DynamoDB and Redis.

2. Document: A document-based (also called document-oriented) database consists of data stored 
   in hierarchical structures. Some supported document formats include JSON, BSON, XML, and YAML. 
   The document-based model is considered an extension of the key-value database and provides 
   querying capabilities not solely based on unique keys. Documents are considered very flexible and
   can evolve to fit an application’s needs. They can even model relationships!
   - MongoDB and CouchDB.

3. Graph: A graph database stores data using a graph structure. In a graph structure, data is 
   stored in individual nodes (also called vertices) and establishes relationships via edges 
   (also called links or lines). The advantage of the relationships built using a graph database as 
   opposed to a relational database is that they are much simpler to set up, manage, and query.
   - Neo4j.

4. Column Oriented: A column-oriented NoSQL database stores data similar to a relational 
   database. However, instead of storing data as rows, it is stored as columns. Column-oriented 
   databases aim to provide faster read speeds by being able to quickly aggregate data for a 
   specific column.
   - Amazon’s Redshift.

## MongoDB

MongoDB is a document-oriented database. It stores data in flexible, JSON-like documents. It has a diverse Cloud Tooling, like MongoDB Atlas, which is a multi-cloud database service that allows developers to create, manage, and deploy MongoDB databases easily. All of the Databases are stored in the Cloud.

It also has Mongo Realm, which creates a DB in each device and syncs them with the Cloud. It is a serverless platform that allows developers to build modern, real-time applications with ease.

### MongoDB Data

At the highest level, we have our database – an instance of MongoDB that contains all the various data our store needs to operate.

Within this instance of MongoDB are collections. Collections are subsets of our data. So, assuming our database contains three types of data – purchase data, inventory, and customer info – each of these would have its own collection.

Within each collection, we store individual records called documents. These documents all belong to that particular subset of our data. So, for example, within the customer collection, we could store personal information about each of our customers. Every customer would have their own document within the collection.

To summarize, a document is simply a record that stores information about a particular entity. A collection, in turn, is just a group of documents containing similar information. And finally, a MongoDB database is just a number of collections assembled together to store data for a specific use case.

- Collections -> Tables
- Documents -> Rows
- Fields -> Columns
- Key-Value Pairs -> Data Fields

### Field-Value or Name-Value Pairs

- Fields: the name of the data field. For example, in a customer document, we might have a field called name, id, and email. It's like the column.
- Values: the actual data stored in the field. For example, in a customer document, we might have a value of "John Doe" for the name field, "12345" for the id field, and "juan@gmail.com"

### BSON - MongoDB’s Storage Format (Query Language)

Binary Javascript Object Notation, or BSON, is the format that MongoDB uses to store data. BSON is different than JSON in three fundamental ways:

- BSON is not human-readable.
- BSON is far more efficient storage-wise.
- BSON supports a number of data formats that JSON does not - like dates.

Our same JSON object from earlier looks like this in BSON:

```bson
\x00\x00\x00\x02name\x00\a\x00\x00\x00Rodney\x00\x02occupation\x00\r\x00\x00\x00photographer\x00\x10year_of_experience\x00\a\x00\x00\x00\x00
```

### 