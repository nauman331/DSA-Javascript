function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    for (let k = 0; k < arr1.length + arr2.length; k++) {
        if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 


// function sort(arr1, arr2) {
//     const mergedArray = arr1.concat(arr2);
//     const sortedArray = mergedArray.sort((a,b) => a - b)
//     console.log(sortedArray);
// }

// sort(arr1, arr2);