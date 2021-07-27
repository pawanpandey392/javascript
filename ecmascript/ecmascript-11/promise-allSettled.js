// When you want multiple Promises to complete, you can use Promise.all ([promise_1, promise_2]). In this process, if one of the promises fails, the JavaScript engine will throw an error. Luckily, there are cases in which the failure of one promise doesn’t matter, and the rest would resolve. To achieve that, the new JavaScript ES11 unpacks Promise.allSettled.

promise_1 = Promise.resolve('hi');

promise_2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'world'));

Promise.allSettled([promise_1, promise_2])
    .then(([promise_1_result, promise_2_result]) => {
      // output is: {status: 'fulfilled', value: 'hi'}
      console.log(promise_1_result);

      // output is: {status: 'rejected', reason: 'world'}
      console.log(promise_2_result);
    })

// Hence, only a resolved Promise returns an object with status and value; whereas, rejected Promise returns an object with status and reason.