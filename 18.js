// https://www.codewars.com/kata/myjinxins-fairy-tales-number-004-ali-baba-and-the-forty-thieves-iii/train/javascript

function fillWater(buckets) {
    let count = 0;
    buckets = buckets.map(el => {
        if (/\brobber-/.test(el)) {
            count += 30 - el.length;
            while (el.length < 31) {
                el += "water";
            }
            return el.substring(0, 30);
        }
        return el;
    });
    buckets.push(count + (count > 1 ? ' litres' : ' litre'));
    return buckets;
}
