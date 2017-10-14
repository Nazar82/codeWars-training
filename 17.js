// https://www.codewars.com/kata/greed-is-good/train/javascript


// Poor solution, but I couldn't come up with a better variant

function score(dice) {
    let score = 0;
    let i = 6;
    let arr = [];
    do {
        arr = dice.filter(el => el == i);
        i--;
    } while (arr.length < 3 && i > 0);
    if (arr.length > 2) {
        if (arr[0] == 1) {
            score += 1000 + (arr.length - 3) * 100;
            score += dice.filter(el => el === 5).length * 50;
        }
        if (arr[0] == 5) {
            score += 500 + (arr.length - 3) * 50;
            score += dice.filter(el => el === 1).length * 100;
        }
        if (arr[0] == 2 || arr[0] == 3 || arr[0] == 4 || arr[0] == 6) {
            score += arr[0] * 100;
            score += dice.filter(el => el === 5).length * 50;
            score += dice.filter(el => el === 1).length * 100;
        }
    } else {
        score += dice.filter(el => el === 1).length * 100;
        score += dice.filter(el => el === 5).length * 50;
    }
    return score;
}
