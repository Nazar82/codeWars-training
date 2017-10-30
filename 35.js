// https://www.codewars.com/kata/sum-of-array-singles/train/javascript

function repeats(arr) {
    arr.filter((el, ind, arr) => arr.indexOf(el) !== ind).forEach(el => arr = arr.filter(item => item !== el));
    return arr.reduce((acc, el) => acc + el, 0);
};
