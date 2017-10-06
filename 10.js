// https://www.codewars.com/kata/bingo-card/train/javascript

function getCard() {
    const arr = ['B', 'I', 'N', 'G', 'O'];
    let res = [];
    let min = 1;
    let max = 15;

    const rand = () => {
        let min = 1;
        let max = 15;
        let randNum;
        let numbers = [];
        let randTwo = (max, min) => {
            randNum = Math.floor(Math.random() * (max - min + 1) + min);
            if (numbers.indexOf(randNum) > -1) {
                randTwo(max, min);
            } else {
                numbers.push(randNum);
            }
            return randNum;
        };
        return randTwo;
    };

    const randThree = rand();

    arr.forEach((el, ind) => {
        for (let i = 0; i < arr.length; i++) {
            res.push(el + randThree(max, min));
        }
        min += 15;
        max += 15;
    });
    res.splice(14, 1);
    return res;
}
