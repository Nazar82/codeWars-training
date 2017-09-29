// https://www.codewars.com/kata/reverse-factorials/train/javascript

function reverseFactorial(num) {
  let temp = 1;
  for (let i = 2; i <= num; i++) {
    temp *= i;
    if (temp == num) {
      return `${i}!`;
    }
    if (temp > num)  {
      return 'None';
    }
  }
  return num ==  1 ? '1!' : 'None';
}