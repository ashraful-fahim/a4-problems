function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
        return 'Invalid';
    }
    else {
        const rate = 1.75 / 100;
        const charge = money * rate;
        return charge;
    }
}

const money = cashOut('ssss');
console.log(money);