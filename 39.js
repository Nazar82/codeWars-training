// https://www.codewars.com/kata/mumbling/train/javascript

function accum(s) {
    return s.toLowerCase().split('').map((el, ind) => el.toUpperCase() + el.repeat(ind)).join('-');
}
