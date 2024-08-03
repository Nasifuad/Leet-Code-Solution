/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

var canBeEqual = function (target, arr) {
    target.sort()
    arr.sort()
    let a = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != target[i]) {
            return false
        }
    }
    if (a == 0) {
        return true
    }
    else {
        return false
    }
};