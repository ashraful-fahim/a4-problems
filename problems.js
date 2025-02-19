function calculateVAT(price) {
    if (typeof price === 'number' && price >= 0) {
        const vatRate = 7.5 / 100;
        const vat = price * vatRate;
        return vat;
    }
    else {
        return 'Invalid';
    }
}




function validContact(contact) {
    if (typeof contact === 'string') {
        const len = contact.length;
        const first = contact[0];
        const second = contact[1];
        if (len !== 11 || first !== '0' || second !== '1' || contact.includes(' ') === true) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return 'Invalid';
    }
}




function willSuccess(marks) {
    const arr = Array.isArray(marks);
    if (arr !== true) {
        return 'Invalid';
    }
    else {
        const pass = [];
        const fail = [];
        for (const mark of marks) {
            if (mark >= 50) {
                pass.push(mark);
            }
            else {
                fail.push(mark)
            }
        }
        const passLen = pass.length;
        const failLen = fail.length;
        if (passLen > failLen) {
            return true;
        }
        else {
            return false;
        }
    }
}





function validProposal(person1, person2) {
    const arr1 = Array.isArray(person1);
    const arr2 = Array.isArray(person2);
    const ageDiff = Math.abs(person1.age - person2.age);
    if (typeof person1 !== 'object' || typeof person2 !== 'object' || arr1 === true || arr2 === true) {
        return 'Invalid';
    }
    else {
        if (person1.gender !== person2.gender) {
            if (ageDiff <= 7) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}




function calculateSleepTime(times) {
    const arr = Array.isArray(times);
    if (arr !== true) {
        return 'Invalid';
    }
    else {
        let sec = 0;
        for(const time of times){
            if(typeof time === 'number'){
                sec = sec + time;
            }
            else{
                return 'Invalid';
            }
        }
        const hour = sec / 3600;
        const objHour = parseInt(hour);
        const remainingHourSec = hour - objHour;
        const min = remainingHourSec * 60;
        let objMin = parseInt(min);
        const remainingMinSec = min - objMin;
        let objSec = Math.round(remainingMinSec * 60);
        if (objSec === 60){
            objMin++;
            objSec = 0;
        }
        const object = {
            hour : objHour,
            minute : objMin,
            second : objSec,
        }
        return object;
    }
}

const times = [100, 3800, "90" ];
const per = calculateSleepTime(times);
console.log(per);
