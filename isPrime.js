/*
is prime
Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.
*/
let n=4
const isPrime=(n)=>{
    if(n<2){
        return true;
    }
    for(let i=2; i<n; i++){
        if(n % i ==0){
            return false
        }
    }
    return true;
}

console.log(isPrime(n));
