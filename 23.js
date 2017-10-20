// JavaScript File

// https://www.codewars.com/kata/pirate-code/train/javascript

function amaroPlan(pirateNum) {
    var res = [];
    let num = 0;
    let iterator = 1;
    do {
        res.push(num);
        num ? num = 0 : num = 1;
        iterator++;
    } while (iterator < pirateNum) {
    }
    res.unshift(pirateNum * 20 - res.reduce((acc, el) => acc + el));
    return res;
}
