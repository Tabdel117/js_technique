function decode (s) {
    var characterQueue = [];
    var char, index, string, num, i;
    while (s.length > 0) {
        char = s[0];
        if (char === '[') {
            s.splice(0, 1);
            index = s.indexOf('|');
            characterQueue.push(s.splice(0, index).join(''));
            s.splice(0, 1);
        } else if (char === ']') {
            string = characterQueue.pop();
            num = parseInt(characterQueue.pop(), 10);
            char = characterQueue.pop();
            if (char) {
                characterQueue.push(char + string.repeat(num));
            } else {
                characterQueue.push(string.repeat(num));
            }
            s.splice(0, 1);
        } else {
            i = 1;
            while (s[i] !== '[' && s[i] !== ']' && i < s.length) {
                i++;
            }
            characterQueue.push(s.splice(0, i).join(''));
        }
    }
    return characterQueue.join('');
}
decode('HG[6|B[2|CA]]EF[2|BB]'.split(''));