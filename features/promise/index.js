const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error('Promise 1 rejected')
  }, 100)
})

// const promise1 = new Promise((_, reject) => setTimeout(reject,  100, new Error("a")));
// const promise2 = new Promise((resolve)   => setTimeout(resolve, 200, "b"));

// Promise.race([a, b]).then(
//     value => {
//         console.log(`race: fulfilled with ${value}`);
//     },
//     reason => {
//         console.log(`race: rejected with ${reason.message}`);
//     }
// );

// Promise.any([a, b]).then(
//     value => {
//         console.log(`any:  fulfilled with ${value}`);
//     },
//     reason => {
//         console.log(`any:  rejected with ${reason.errors.map(({message}) => message).join()}`);
//     }
// );