// https://www.codewars.com/kata/string-breakers/train/javascript


function stringBreakers(n, string) {
    const fixedStr = string.replace(/\s/g, '');
    const re = new RegExp('\\w{' + n + '}', 'g');
    let strArr = fixedStr.match(re);
    const ending = fixedStr.slice(strArr.reduce((acc, el) => acc + el, '').length);
    ending ? strArr.push(ending) : false;
    return strArr.join('/n');
}


function stringBreakers(n, string) {
    return string.replace(/\s/g, '').match(new RegExp(`\\w{1,${n}}`, 'g')).join('\n');
}
