// https://www.codewars.com/kata/your-order-please/train/javascript

function order(words){
    return words.split(' ').sort( (a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
}