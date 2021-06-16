const Events = require('events')
let Emitter = new Events.EventEmitter()

// Passing arguments to event listeners
Emitter.on('yell', (type = 'him') => {
  // console.log(`Why are you yelling at ${type}?`)
})
Emitter.emit('yell', 'Pawan')
Emitter.emit('yell')

// Passing this to event listeners
Emitter.on('blow', () => console.log(this))
Emitter.on('blow-me', function () { console.log(this) })
// Emitter.emit('blow')
// Emitter.emit('blow-me')


