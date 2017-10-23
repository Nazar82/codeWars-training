// https://www.codewars.com/kata/basic-calculator/train/javascript

function calculate(num1, operation, num2) {
    const op = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
    };
    return (!op[operation] || (operation === '/' && num2 === 0)) ? null : Number(String(op[operation](num1, num2)));
}
