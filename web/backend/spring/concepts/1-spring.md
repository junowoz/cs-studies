# Spring

It contains templates for many different kinds of applications, or “Spring Projects”, (including Spring Cloud, Spring Web Services, Spring Security, etc.). Spring Boot is one of the easiest ways to build Spring web projects, enabling applications to run with minimal configuration.

## How does it work?

1. The client sends a GET request to the Spring web server (i.e. the Spring application). 
2. The server sends a data request to the data store to retrieve the information requested by the client.
3. The data store sends the requested data back to the server, if available.
4. The server sends that data – the HTTP Response – back to the client and displays it on the browser.

Browser (HTTP Request) -> Web Server (Spring) -> Data request to Database
Browser (HTTP Response) <- Web Server (Spring) <- Data response from Database

It’s important to note that this is just one scenario of a browser-based client initiating a GET request.
In the case of a DELETE, maybe the database does not response.

