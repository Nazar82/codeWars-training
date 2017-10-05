// https://www.codewars.com/kata/bingo-card/train/javascript

function getCard() {
    let lettersArr = ['B', 'I', 'N', 'G', 'O'];
    let res = [];
    let numbers = [];
    let min = 1;
    let max = 15
    let randNum;

    const rand = (max, min) => {
        randNum = Math.floor(Math.random() * (max - min + 1) + min);
        numbers.indexOf(randNum) > -1 ? rand(max, min) : numbers.push(randNum);
        return randNum;
    };

    lettersArr.forEach((el, ind) => {
        for (let i = 0; i < lettersArr.length; i++) {
            res.push(el + rand(max, min));
        }
        min += 15;
        max += 15;
    });
    res.splice(14, 1);
    return res;
}
