// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (!message) return true;

    const createLetterFrequency = (str) => {
        const freqMap = new Map();
        for (let char of str) {
            const letterCount = freqMap.get(char) || 0;
            freqMap.set(char, letterCount + 1);
        }
        return freqMap;
     }

     const messageFreq = createLetterFrequency(message);
     const lettersFreq = createLetterFrequency(letters);
     console.log(messageFreq, lettersFreq);
     for (let key of messageFreq.keys()) {
        if (!lettersFreq.has(key)) return false;

        if (lettersFreq.get(key) < messageFreq.get(key)) return false;
     }

     return true;
}

module.exports = constructNote;