function bubbleSort(array) {
    if (!Array.isArray(array)) {
        return false;
    }
    let sortedArray = array;
    for (let i = 0; i< sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
                if (sortedArray[j] > sortedArray[j + 1]) {
                    const temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
        }
    }
   return sortedArray;
}

console.log(bubbleSort([2, 1 , 4, 5, 8]));
console.log(bubbleSort(1));
