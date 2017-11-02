// https://www.codewars.com/kata/vowel-count/train/javascript

function getCount(str) {
    return str.split('').filter(el => /[eaoiu]/.test(el)).length;
}
