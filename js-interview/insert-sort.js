function insertSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let result = [];
    result.push(arr[0]);
    let i = 1;
    while (i < arr.length) {
        let j = 0;
        const tmp =arr[i];
        while (tmp > result[j] && j < result.length) {
            j++;
        }
        if (j === result.length) {
            result.push(tmp);
        } else {
            result = [...result.slice(0, j), tmp, ...result.slice(j)];
        }
        i++;
    } 
    return result;
}

const a = [8, 2, 4, 6, 7, 1, 5, 11];
const result = insertSort(a);
console.log(result)