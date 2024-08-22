// add whatever parameters you deem necessary
function isSubsequence(firstStr, secondStr) {
  const createLetterFrequency = (str) => {
    const freqMap = new Map();
    for (let char of str) {
      const letterCount = freqMap.get(char) || 0;
      freqMap.set(char, letterCount + 1);
    }
    return freqMap;
  };

  const createIndexMap = (str) => {
    const chars = new Map();
    const order = [];

    for (let char of str) {
        if (!chars.has(char)) {
            chars.set(char, order.length);
            order.push(char);
        }
    }

    return chars;
  }

  const secondStrFreq = createLetterFrequency(secondStr);

  const secondStrIdx = createIndexMap(secondStr);

  for (let i = 0; i < firstStr.length; i++) {
    const charKey = firstStr[i];
    if (!secondStrFreq.has(charKey)) return false;
    if (i < firstStr.length - 1) {
      if (secondStrIdx.get(charKey) > secondStrIdx.get(firstStr[i + 1]))
        return false;
    }
  }

  return true;
}

module.exports = isSubsequence;
