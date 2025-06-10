
function bubbleSort(arr) {
    let n = arr.length;
    arr.sort();
    return arr;
}

function binarySearch(sortedArr, target) {
    let low = 0;
    let high = sortedArr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (sortedArr[mid] === target) {
            return mid; 
        } else if (sortedArr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; 
}

let numbers = [34, 7, 23, 32, 5, 62];
console.log("Original Array:", numbers);

let sortedNumbers = bubbleSort(numbers);
console.log("Sorted Array:", sortedNumbers);

let target = 23;
let resultIndex = binarySearch(sortedNumbers, target);

if (resultIndex !== -1) {
    console.log(`Element ${target} found at index ${resultIndex}`);
} else {
    console.log(`Element ${target} not found in the array`);
}
