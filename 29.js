// https://www.codewars.com/kata/array-combinations/train/javascript


function solve(arr) {
    return arr.map(el => el.filter((el, ind, arr) => arr.indexOf(el) === ind)).reduce((acc, el) => acc * el.length, 1);
};
