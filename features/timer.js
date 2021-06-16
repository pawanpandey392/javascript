const Events = require('events')
let Emitter = new Events.EventEmitter()

Emitter.on('myevent', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously | Priority 2');
  });

  process.nextTick(() => {
    console.log('this happens on process.nextTick | Priority 1');
  });

  console.log('this happens synchronously | Priority 0');

});
// Emitter.emit('myevent')

// Workaround with process.nextTick & setImmediate
process.nextTick(() => {
  setImmediate(() => {
    process.nextTick(() => {
      console.log('this happens on process.nextTick | Priority 5');
    });

    console.log('this happens asynchronously | Priority 4');
  });

  console.log('this happens on process.nextTick | Priority 0');

  setImmediate(() => {
    console.log('this happens asynchronously | Priority 2');
  });
})