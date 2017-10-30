// https://www.codewars.com/kata/sort-by-last-char/train/javascript

function last(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
