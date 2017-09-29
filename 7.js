// https://www.codewars.com/kata/consecutive-strings/train/javascript

function longestConsec(strarr, k) {
    let str = '';
    while (strarr.length >= k && k > 0) {
        strarr.slice(0, k).reduce( (acc, el) => acc + el).length > str.length ? str = strarr.slice(0, k).reduce( (acc, el) => acc + el) : str;
        strarr = strarr.slice(1);
    }
    return str;
}