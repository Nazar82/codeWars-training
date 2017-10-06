// https://www.codewars.com/kata/remember/train/javascript

// One-line variant

function remember(str) {
    return str.split('').filter((el, ind, ar) => ar.indexOf(el) != ind).filter((el, ind, ar) => ar.indexOf(el) == ind);
}
// User-friendly variant 

function remember(str) {
    let arr = str.split('');
    arr = arr.filter((el, ind, ar) => ar.indexOf(el) != ind);
    return arr.filter((el, ind, ar) => ar.indexOf(el) == ind);
}
