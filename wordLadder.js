const wordLadder = (beginWord, endWord, wordList) => {
    const dict = new Set(wordList);
    const queue = [];
    queue.push([beginWord, 1]); // [beginWord, 1]

    while (queue.length) {
        let [currWord, coount] = queue.shift();

        if (currWord === endWord) return coount;

        for (let i = 0; i < 26; i++) {  // from a to z (26 letters)
            for (let j = 0; j < currWord.length; j++) { // from 0 to currWord.length
                let letter = String.fromCharCode(97 + i);   // 97 is the char code for 'a' so we are adding 1 to it to get the next letter
                let newWord = currWord.slice(0, j) + letter + currWord.slice(j + 1);    // slice(0, 0) + 'a' + slice(0 + 1) = 'a' + 'a' = 'aa'

                if (dict.has(newWord)) {     // if dict has 'aa'
                    queue.push([newWord, coount + 1]);  // push ['aa', 2]
                    dict.delete(newWord);   // delete 'aa' from dict
                }
            }
        }
    }

    return 0;
}

console.log(wordLadder('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 5