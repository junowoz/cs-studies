/**
 * Creating a new module to our app -> logger.js
 * At runtime, our module is wrapped in a function like this:
 * 
 * (function (exports, require, module, __filename, __dirname) {
 *    //Module code actually lives in here
 * })
 */

const EventEmitter = require('events'); //This is a core module. It's a built-in module. It's a part of the Node runtime.
const emitter = new EventEmitter(); //This is a class. We are creating an object of this class.

var url = 'http://mylogger.io/log';

//class NAME extends EVENTNAME
class Logger extends EventEmitter { //This is a class. We are creating an object/method of this class.
    log(message) {
        //Send an HTTP request
        console.log(message);

        //After this we want to raise an event
        // 'this.' is used to access the properties of the object. 
        this.emit('messageLogged', { id: 1, url: 'http://' }); //Raising an event.
    }
}

//We are exporting the log function from this module.
module.exports = Logger;

//we can also expose the url variable from this module and changing the name:
//module.export.endPoint = url;