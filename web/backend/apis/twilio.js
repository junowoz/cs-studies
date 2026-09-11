const Twilio = require("twilio");

//Setting up a new client
const client = new Twilio("blabla", "blabla");

//Promisse
client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is ${messages[0].body}`)
  );

console.log('Gathering your message log');