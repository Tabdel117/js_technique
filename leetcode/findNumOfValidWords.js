/**
 * 1178. 猜字谜
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const newWords = words.map(word => [...new Set(word.split(''))]);
    const result = puzzles.map(puzzle => puzzle.split('')).map(puzzle => {
        return newWords.reduce((count, word) => {
            if (word.includes(puzzle[0])) {
                var isAns = true;
                for (var i = 0; i < word.length; i++) {
                    if (!puzzle.includes(word[i])) {
                        isAns = false;
                        break;
                    }
                }
                if (isAns) {
                    count++;
                }
            }
            return count;
        }, 0);
    });
    return result;
};

findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], 
    ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"])