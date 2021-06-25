
// To wait for a Promise to complete, a function with await operator should be defined within async function.

const Smartphone = async () => {
    const color = await fetch(silver)
};

// On the downside, if there is a need to wait for something in the global scope, it would not be possible, and generally needs an Immediately Invoked Function Expression.

(async () => {
    const color = await fetch(silver)
})();

// With the help of Top Level Await, you don’t have to wrap code in an async function. Instead, the below code will work:

const color = await fetch(silver);

// It is very useful when it comes to using a fallback source when the initial one fails or resolving module dependencies.

let Vue
try {
    Vue = await import('silver_1_to_vue')
} catch {
    Vue = await import('silver_2_to_vue')
} 