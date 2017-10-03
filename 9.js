// https://www.codewars.com/kata/array-deep-count/train/javascript

function deepCount(a) {
    let count = a.length;

    function countArr() {
        a.forEach((el, ind) => {
            if (Array.isArray(el)) {
                a = el;
                count += a.length;
                countArr(a);
            }
        });
    }
    countArr();
    return count;
}
