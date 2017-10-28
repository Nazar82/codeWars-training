// https://www.codewars.com/kata/dominant-primes/train/javascript

function solve(a, b) {
    let primes = [];

    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        const sqrtNum = Math.sqrt(num);
        for (let i = 2; i <= sqrtNum; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i <= b; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes.filter((el, ind) => {
        if (isPrime(ind + 1) && el >= a) {
            return el;
        }
    }).reduce((acc, el) => acc + el, 0);
}
