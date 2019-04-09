// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(4));
// console.log(factorial(5));

function fib(n) {
    
    if (n === 1 || n === 2) {
        return 1;
    }
    
    return fib(n - 1) + fib(n - 2);
}