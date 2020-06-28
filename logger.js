const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // console.log(msg);
        this.emit('message', { id: uuid.v4(), msg})
    }
}

module.exports = Logger;