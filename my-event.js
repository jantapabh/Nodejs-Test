const EvenEmitter = require('./events');
const emitter = new EventEmitter();
emitter.addListener('myEvent',function(args) {

    console.log('Hello Worlds : myEvent');
});

emitter.emit('myEvent');