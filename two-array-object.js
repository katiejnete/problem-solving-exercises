// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    const obj = {};
    for (let i = 0; i < keyArr.length; i++) {
        obj[keyArr[i]] = valArr[i] || null;
    }
    return obj;
}

module.exports = twoArrayObject;
