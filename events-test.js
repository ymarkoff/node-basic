const Logger = require('./logger');

const logger = new Logger(); 

logger.on('message', data => console.log('Called listener', data));
logger.on('message', data => console.log('Another call to listener', data));

logger.log('Hello Alter World');