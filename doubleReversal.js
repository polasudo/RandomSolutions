const isSameAfterReversals = function(num) {
    if (num===0) return true
    let str = String(num);
    if (str[str.length-1]==="0") return false;
    return true;
}