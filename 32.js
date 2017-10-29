// https://www.codewars.com/kata/missing-and-duplicate-number/train/javascript

// A number of solutions, all of them pass test cases, but none of them is quite efficient.


function solution(array) {
    const duplicate = array.filter((el, ind, arr) => arr.indexOf(el) !== ind)[0];
    let sum = 0;
    for (let i = 1, len = array.length; i <= len; i++) {
        sum += i;
    }
    const missing = sum - array.filter((el, ind, arr) => arr.indexOf(el) === ind).reduce((acc, el) => acc + el, 0);
    return [missing, duplicate];
}

function solution(array) {
    let duplicate;
    let y = array.length;
    while (y--) {
        if (array.indexOf(array[y]) != y) {
            duplicate = array.splice(y, 1);
        }
    }
    let set = new Set(array);
    const size = set.size;
    let newSize = 0;
    let i = 1;
    while (!newSize) {
        set.add(i);
        i++;
        newSize = set.size - size;
    }
    return [i - 1, duplicate[0]];
}



function solution(array) {
    let duplicate = 0;
    let set1 = new Set();
    let y = 0;
    do {
        set1.add(array[y]);

        duplicate = array[y];
        y++;
    } while (set1.size == y);

    let set2 = new Set(array);
    const size = set2.size;
    let newSize = 0;
    let missing = 0;
    let i = 1;
    while (!newSize) {
        set2.add(i);
        i++;
        newSize = set2.size - size;
    }
    return [i - 1, duplicate];
}


function solution(array) {
    let duplicate;
    let set1 = new Set();
    let y = 0;

    let set2 = new Set(array);
    let size = set2.size;
    let newSize = 0;
    let missing = 0;
    let i = 1;
    let len = 0;

    do {
        set1.add(array[y]);

        if (set1.size == y) {
            duplicate = array[y];
            y++;
            len++;
        }
        y++;

        set2.add(i);
        if (set2.size > size) {
            missing = i;
            size++;
            len++;
        }
        i++;
    } while (len < 2);
    return [missing, duplicate];
}
