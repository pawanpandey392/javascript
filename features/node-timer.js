const timeoutTimer = setTimeout(() => {
  console.log('Say hello to Timeout.');
})

const immediateTimer = setImmediate(() => {
  console.log('Say hello to Immediate.');
})

const intervalTimer = setInterval(() => {
  console.log('Say hello to Interval.');
})

const nextTickTimer = process.nextTick(() => {
  console.log('Say hello to nextTick.');
})