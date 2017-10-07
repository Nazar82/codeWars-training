// https://www.codewars.com/kata/weight-lifting-calculator/train/javascript

function liftingCalc(w) {
    const weightsArr = [20, 15, 10, 5, 2.5, 1.25];
    const weight = (w - 20) / 2;

    if (w < 20) {
        return false;
    }
    
    let sum = 0;
    const res = [];
    let i = 0;

    while (weight != sum) {
        while ((sum + weightsArr[i]) > weight) {
            i++;
        }
        if (!weightsArr[i]) {
            return false;
        }
        sum += weightsArr[i];
        res.push(weightsArr[i]);
    }
    return res;
}
