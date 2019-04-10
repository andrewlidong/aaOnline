function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}

function bubbleSort(array) {
    // Tracck whether or not a swap was made on a previous pass.  If not, the array must already be sorted.  
    let swapped = true;

    // Keep doing passes if a swap was made on the previous pass.  
    while (swapped) {
        swapped = false;

        // Performs a single pass
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i+1);
                // Recall that a swap was made, and we should perform another pass.  
                swapped = true;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};