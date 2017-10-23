// https://www.codewars.com/kata/simple-division/train/javascript

// This function passes all tests, but it is not very efficient. I don't know how to improve it.

function solve(a, b) {
    let primes = [];
    let factors = [];

    function isPrime(number) {
        const numberSqrt = Math.sqrt(number);
        for (let i = 2; i <= numberSqrt; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= b; i++) {
        if (isPrime(i))
            primes.push(i);
    }
    primes.forEach(el => {
        if (b % el === 0)
            factors.push(el);
    });

    for (let i = 0, len = factors.length; i < len; i++) {
        if (a % factors[i] !== 0)
            return false;
    }
    return true;
};
