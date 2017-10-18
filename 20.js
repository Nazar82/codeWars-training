// https://www.codewars.com/kata/so-easy-price-of-phone/train/javascript


// Unfortunately my solution doesn't work for all test cases. It seems there is something wrong with instructions. 


function salePrice(cost) {
    const prices = cost.match(/\$\d+/g);
    let sale = cost.match(/\$\d+/g).map(el => el = String(Math.round((Number(el.slice(1)) + Number(el.slice(1)) / 100 * 15))));
    sale = sale.map(el => {
        let temp = Number(el.slice(el.length - 1));
        if (temp > 0 && temp < 5) {
            return `$${Number(el) + 5 - temp}`;
        }
        if (temp > 5 && temp < 10) {
            return `$${Number(el) + 10 - temp}`;
        } else {
            return `$${el}`;
        }
    });
    cost = cost.replace(/cost/g, 'sale');
    for (let i = 0; i < sale.length; i++) {
        cost = cost.replace(prices[i], sale[i]);
    }
    return cost;
}
