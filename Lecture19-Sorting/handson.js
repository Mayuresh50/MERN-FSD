// function sortWithNegatives(arr) {
//     let minVal = Math.min(...arr);    //Min Value in the array
//     let maxVal = Math.max(...arr);    //Max value in the array

//     let neg = new Array(Math.abs(minVal) + 1).fill(0);   //Array for negative values
//     let pos = new Array(maxVal + 1).fill(0);    //Array for positive values

//     for (let num of arr) {
//         if (num < 0) {
//             neg[Math.abs(num)] = (neg[Math.abs(num)] || 0) + 1;
//         } else {
//             pos[num] = (pos[num] || 0) + 1;
//         }
//     }
//     let result = [];
//     for (let i = neg.length - 1; i > 0; i--) {
//         while (neg[i] > 0) {
//             result.push(-i);
//             neg[i]--;
//         }
//     }
//     for (let i = 0; i < pos.length; i++) {
//         while (pos[i] > 0) {
//             result.push(i);
//             pos[i]--;
//         }
//     }
//     return result;
// }
// let arr = [-1, -5, -2, 2, 0, 4];
// console.log(sortWithNegatives(arr)); 


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
let arr = [1, 4, 3, 2, 7]
console.log(selectionSort(arr))
