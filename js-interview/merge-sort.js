function mergeSort(array) {
    if (array.length <= 1) return array;
    if (array === undefined) return [];
    const partition = Math.floor(array.length / 2);
    const leftArray = mergeSort(array.slice(0, partition));
    const rightArray = mergeSort(array.slice(partition));
    if (leftArray.length === 0 || rightArray.length === 0) return [...leftArray, ...rightArray];
    let i = 0, j = 0;
    let result = [];
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            result.push(leftArray[i]);
            i++;
        } else {
            result.push(rightArray[j]);
            j++;
        }
    }
    if (i === leftArray.length) {
        result = [...result, ...rightArray.slice(j)];
    } else if (j ===leftArray.length) {
        result = [...result, ...leftArray.slice(i)];
    }
    return result;
}

const a = [8, 2, 4, 6, 7, 1, 5, 11, 3];
const result = mergeSort(a)
console.log(result)