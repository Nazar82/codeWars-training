// https://www.codewars.com/kata/n-centered-array/train/javascript

function isCenteredN(arr, n) {
    while (arr.length) {
        if ((arr.reduce((a, b) => a + b) == n) || (arr.length % 2 == 0 && n == 0)) {
            return true;
        }
        arr = arr.slice(1, arr.length - 1);
    }
    return false;
}
