function partition(arrayToSort, left, right) {
    swap(arrayToSort, right, left);
    let currentIndex = left;
    for (let i = left; i < right; i ++) {
        if (arrayToSort[i] < arrayToSort[right]) {
            swap(arrayToSort, i, currentIndex);
            currentIndex ++;
        }
    }
    swap(arrayToSort, right, currentIndex); 
    return currentIndex;
}

function swap(array, a, b) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

function quickSort(arrayToSort, left, right) {
    if (!Array.isArray(arrayToSort)) return false;
    if (left >= right) return;
    const newPivotIndex = partition(arrayToSort, left, right); 
    quickSort(arrayToSort, left, newPivotIndex - 1);
    quickSort(arrayToSort, newPivotIndex + 1, right);
}

const a = [8, 2, 4, 6, 7, 1, 5, 11];
quickSort(a, 0, a.length -1)
console.log(a)