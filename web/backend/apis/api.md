# RESTful APIs

It's a way for computers to talk. You write code to take information from a computer. Most APIs are RESTful, meaning they follow a set of rules and constraints (Representational State Transfer).

RESTful APIs organize data entities, resources, and URIs to differentiate between different types of data resources on a server. A client can get data about a resource by making a request to that endpoint over HTTP.

The request message has a specific format:

- START LINE: Contains the HTTP verb (request method) and URI (e.g. `POST /dinosaur http/1.1`)
- HEADERS: Metadata about the request, such as the `Accept` header to indicate desired data format, or the `Authorization` header to indicate permission to make the request.
- BODY: Custom payload of data

HTTP requests can be of different types:

- GET: Read
- POST: Create
- PATCH: Update
- DELETE: Destroy

## Application Programming Interface (API)

An API is a way for two computers to communicate with each other. Using an API is similar to using a website in your browser, but instead of clicking buttons and filling out forms, you write code to explicitly request data from a server.

## Representational State Transfer (REST)

Most APIs in the world are RESTful, which means they follow a set of rules or constraints known as Representational State Transfer (REST). REST has been the de facto standard for API development since the early 2000s.

## HTTP Request and Response

The server receives the request message, executes code (e.g. reading from a database), and sends a response message with a specific format:

- STATUS CODE: Indicates the outcome of the request
- HEADERS: Information about the server
- BODY: Data payload, usually in JSON format

## Stateless

An important aspect of RESTful APIs is that they are stateless, meaning that the parties don't need to store any information about each other. Every request-response cycle is independent, leading to predictable and reliable web applications.

## Building a RESTful API with Express.js

The most popular framework for building RESTful APIs in Node.js is Express.js. It's easy to use and can be installed using npm:

``npm install express``

Then you can require it in your application and start setting up your routes and handling HTTP requests and responses.

For example:

``javascript
const express = require('express');
const app = express();

// The "get" method is used to retrieve data from the server
app.get('/api/asteroids', (req, res) => {
    // The "res" object is used to send a response to the client
    res.send({
        "name": "Ceres",
        "diameter": "950 km"
    });
});
``
This code creates an endpoint at `/api/asteroids` that responds to `GET` requests with a JSON object containing information about the asteroid Ceres.

You can also use other HTTP methods like `POST`, `PATCH`, and `DELETE` to handle different types of requests and perform different actions on the server.

Express.js also allows you to add middleware functions to handle various tasks like parsing JSON data or handling authentication. Additionally, it supports the use of multiple routing and handling functions.

That is a basic example of how to use Express.js to create a RESTful API. There are many other features and functionalities that you can explore in the documentation.

---

## Handling HTTP Requests

Here's another example:

``javascript
const express = require('express');
const app = express();

// The "get" method is used to retrieve data from the server
app.get('/api/asteroids', (req, res) => {
    // The "res" object is used to send a response to the client
    res.json({
        message: "Retrieving asteroid data from the NASA API..."
    });
});

// The "post" method is used to create new resources on the server
app.post('/api/asteroids', (req, res) => {
    // The "req" object is used to access data sent by the client
    // In this case, we're expecting the client to send data in the request body
    const newAsteroid = req.body;

    // Here, we would typically store the new asteroid data in a database
    console.log(newAsteroid);

    res.json({
        message: "Successfully added new asteroid to the database."
    });
});

// The "patch" method is used to update existing resources on the server
app.patch('/api/asteroids/:id', (req, res) => {
    // The ":id" in the URI is a route parameter, which can be accessed via "req.params.id"
    const asteroidId = req.params.id;
    const updatedAsteroid = req.body;

    // Here, we would typically update the asteroid data in the database using the "asteroidId" and "updatedAsteroid" variables
    console.log(`Updating asteroid with ID ${asteroidId}: ${updatedAsteroid}`);

    res.json({
        message: "Successfully updated asteroid in the database."
    });
});

// The "delete" method is used to delete resources on the server
app.delete('/api/asteroids/:id', (req, res) => {
    // The ":id" in the URI is a route parameter, which can be accessed via "req.params.id"
    const asteroidId = req.params.id;

    // Here, we would typically delete the asteroid data from the database using the "asteroidId" variable
    console.log(`Deleting asteroid with ID ${asteroidId}`);

    res.json({
        message: "Successfully deleted asteroid from the database."
    });
});
``

In this example, we're handling four different types of HTTP requests: GET, POST, PATCH, and DELETE. Each request is associated with a specific route, for example /api/asteroids, and a callback function that is executed when a request is made to that route.

The callback function takes two arguments: req and res. The req object is used to access data sent by the client, such as the request body or route parameters. The res object is used to send a response to the client.

In this example, we're sending JSON data as the response, but you can also send other types of data, such as HTML or plain text.

You can also set up other middleware to handle other functionality such as authentication, validation, and logging.

As the video discussed, the most popular framework for building RESTful APIs in Node.js is Express.js. Express.js is a minimal and flexible framework that provides a robust set of features for web and mobile applications. It is easy to set up, and you can start building your API within minutes.

One of the main advantages of using Express.js is that it is built on top of Node.js, which means that it can take advantage of the performance and scalability of Node.js. Additionally, since it is built in JavaScript, it is easy to understand and use for developers who are already familiar with JavaScript.

Additionally, Express.js is highly customizable, which allows you to set up your API to fit your specific needs. You can easily add middleware functions to handle things like authentication, validation, and logging.

In summary, Express.js is a powerful and versatile framework that makes it easy to build RESTful APIs in Node.js. With its minimal and flexible design, it's a great choice for building a wide range of web and mobile applications.
