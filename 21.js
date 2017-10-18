// https://www.codewars.com/kata/multiply-the-strings-in-the-array/train/javascript

function arrMultiply(arr) {
    return String(arr.reduce((acc, el) => acc * Number(el)));
}
