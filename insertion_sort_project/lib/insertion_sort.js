function insertionSort(arr) {
    // Iterate through every element of the array, beginning at i = 1, the first element being trivially sorted
    // Insertion sort allows us to insert new elements anywhere in the sorted region
    for (let i = 1; i < arr.length; i++) {
        // Take first element of the unsorted region
        let currentEle = arr[i]
        
        // Iterate left through the sorted region looking for a legitimate spot to insert currentEle
        let j = i - 1;
        for (j; j >= 0 && currentEle < arr[j]; j--) {
            // Keep moving left while currentEle is less than the j-th element

            arr[j + 1] = arr[j];
            // Move the j-th element to the right leaving a gap to insert currentEle
            // We can do this because currentEle is already saved
        }
        // Insert currentEle into the gap
        arr[j + 1] = currentEle;
    }
    return arr;
}

module.exports = {
    insertionSort
};