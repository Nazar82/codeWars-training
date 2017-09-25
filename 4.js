// https://www.codewars.com/kata/string-tops/train/javascript

function tops(msg) {
    let m = 1, res = '';
    while(msg.length) {
        res += msg[1];
        m = m + 4; 
        msg = msg.slice(m);          
    }
    return res.split('').reverse().join('');
}