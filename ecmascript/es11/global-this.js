// You can execute JavaScript codes in different environments, such as browsers or Node.js. In browsers, a global object is available under the window variable; whereas, in Node.js, it is an object called global. With globalThis, it is now easy to use a global object regardless of the environment in which the code is running.

// In a browser
window == globalThis // true

// In node.js
global == globalThis // true