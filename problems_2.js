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

// const money = cashOut('ssss');
// console.log(money);




function validEmail(email) {
    const end = email.endsWith('.com');
    const att = email.substr(1);
    if (typeof email !== 'string') {
        return 'Invalid';
    }
    else if (email[0] === '.' || email[0] === '-' || email[0] === '_' || email[0] === '+' || email[0] === '@') {
        return false;
    }
    else if (end !== true || att.includes('@') !== true || email.includes(' ')) {
        return false;
    }
    else {
        return true;
    }
}

const email = 'chat420@gpt.com';
const output = validEmail(email);
console.log(output);