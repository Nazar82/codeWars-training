// https://www.codewars.com/kata/so-easy-price-of-phone/train/javascript


// Unfortunately my solution doesn't work for all test cases. It seems there is something wrong with instructions. 


function ceilPrice(val) {
    let intVal = Math.round(val);
    while (intVal % 10 !== 0 && intVal % 5 !== 0) {
        intVal++;
    }
    return intVal;
}

function salePrice(cost) {
    const prices = cost.match(/\$\d+/g);
    prices.forEach(p => {
        const newPrice = ceilPrice(Number(p.slice(1)) + Number(p.slice(1)) / 100 * 15);
        console.log(newPrice);
        cost = cost.replace(String(p), `$${newPrice}`);
    });
    return cost.replace(/cost/g, 'sale');
}
