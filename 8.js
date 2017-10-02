// https://www.codewars.com/kata/reverse-or-rotate/train/javascript

function revrot(str, sz) {
    if (sz <= 0 || str == '' || sz > str.length) {
        return '';
    }
    const arr = str.split('');
    let res = '';
    do {
        let chunk = arr.splice(0, sz);
        if (chunk.reduce((acc, el) => acc + Math.pow(Number(el), 2), 0) % 2 == 0) {
            res += chunk.reverse().reduce((acc, el) => acc + el, '');
        }
        else {
            let ending = chunk.splice(0, 1);
            chunk.push(ending[0]);
            res += chunk.reduce((acc, el) => acc + el, '');
        }
    } while (arr.length >= sz);
    return res;
}
