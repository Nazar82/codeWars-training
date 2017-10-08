// https://www.codewars.com/kata/one-down/train/javascript

function oneDown(str) {
    if (typeof str != 'string') {
        return 'Input is not a string';
    }
    let re = /[a-zA-Z]/;
    let strArr = str.split('');
    strArr = strArr.map(function(el) {
        if (re.test(el)) {
            if (el == 'a') {
                return 'Z';
            }
            if (el == 'A') {
                return 'z';
            }
            return String.fromCharCode(el.charCodeAt() - 1);
        }
        return el;
    });
    return strArr.join('');
}



function oneDown(str) {
    const test = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return typeof str == 'string' ? str.split('').map(el => test.indexOf(el) > -1 ? el = test.substr(test.indexOf(el) - 1, 1) : el).join('') : 'Input is not a string';
}
