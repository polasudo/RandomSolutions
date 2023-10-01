const breakPalindrom = (palindrome) => {
    if (palindrome.length === 1) return '';

    let arr = palindrome.split(''); // ['a', 'b', 'c', 'c', 'b', 'a']

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {  //[['a', 'b', 'c']
        if (arr[i] !== 'a') {
            arr[i] = 'a';
            return arr.join('');
        }
    }

    arr[arr.length - 1] = 'b';
    return arr.join('');
};

console.log(breakPalindrom('abccba')); // aaccba