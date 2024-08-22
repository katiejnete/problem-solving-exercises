// add whatever parameters you deem necessary
function sameFrequency(firstNum, secondNum) {
    if (firstNum.toString().length !== secondNum.toString().length) return false;

    const createDigitFrequency = (num) => {
        const freqMap = new Map();
        for (let digit of num.toString()) {
            const digitCount = freqMap.get(digit) || 0;
            freqMap.set(digit, digitCount + 1);
        }
        return freqMap;
     }

     const firstDigitsFreq = createDigitFrequency(firstNum);
     const secondDigitsFreq = createDigitFrequency(secondNum);

     if (firstDigitsFreq.size !== secondDigitsFreq.size) return false;

     for (let key of firstDigitsFreq.keys()) {
        if (!secondDigitsFreq.has(key)) return false;

        if (firstDigitsFreq.get(key) !== secondDigitsFreq.get(key)) return false;
     }

     return true;
}

module.exports = sameFrequency;