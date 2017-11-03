// https://www.codewars.com/kata/duplicate-encoder/train/javascript

function duplicateEncode(word) {
    return word.toLowerCase().split('')
        .map((el, ind, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')').join('');
}
