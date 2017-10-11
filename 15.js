// https://www.codewars.com/kata/move-all-vowels/train/javascript

function moveVowel(input) {
    return input.replace(/[aeoiu]/g, '') + input.replace(/[^aeoiu]/g, '');
}
