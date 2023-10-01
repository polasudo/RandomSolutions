const longestCommonPrefix = function(strs) {
    let res = ""
    if (strs.length === 0) return res
    for (let i = 0; i < strs[0].length; i++) {  // loop through first word
        let char = strs[0][i]                // get char at index i
        for (let j = 1; j < strs.length; j++) { // loop through other words
            if (strs[j][i] !== char) return res // if char at index i is not equal to char at index i in other words, return res
        }
        res += char                        // if char at index i is equal to char at index i in other words, add char to res
    }
    return res
};