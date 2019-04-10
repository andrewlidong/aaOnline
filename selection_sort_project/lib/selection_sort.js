function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(arr) {
    // Track the index that points to the first index.  
    // The sorted region is everything to the left of i
    // The unsorted region is everything to the right of i
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // Iterate through the unsorted region and find the minimum element.  
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        // After finding the minIndex in unsorted, swap it with the first index of the unsorted region, i.  
        swap(arr, i, minIndex);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};