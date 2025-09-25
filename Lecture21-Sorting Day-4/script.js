//Sorting Day 4

//Vaibhav Sir Approach
// function insertInSortedArray(arr) {
//     let n = arr.length;
//     let lastElement = arr[n - 1];
//     for (i = n - 2; i >= 0; i--) {
//         if (arr[i] > lastElement) {
//             arr[i + 1] = arr[i];
//         } else {
//             arr[i + 1] = lastElement;
//             return arr;
//         }
//     }
//     return arr;
// }
// let arr = [1, 2, 7, 9, 6]
// console.log(insertInSortedArray(arr));

//Insertion Sort
// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {
//         let firstEleOfUnsortedArray = arr[i];
//         let indexToInsertAt = 0;
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[j] > firstEleOfUnsortedArray) {
//                 arr[j + 1] = arr[j];
//             } else {
//                 indexToInsertAt = j + 1;
//                 break;
//             }
//         }
//         arr[indexToInsertAt] = firstEleOfUnsortedArray;
//     }
//     return arr;
// }
// let arr = [1, 2, 7, 9, 6];
// console.log(insertionSort(arr))


// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {
//         current = arr[i];
//         prev = i - 1;
//         while (prev >= 0 && arr[prev] > current) {
//             arr[prev + 1] = arr[prev];
//             prev--;
//         }
//         arr[prev + 1] = current;
//     }
//     return arr;
// }

//Given an array, place its last element at a position such that all smaller element are in left and all greater element are in right

// //Try Brute force on your own (HW)

let arr = [2, 1, 7, 3, 5, 4]
function placeLastElem(arr) {
    let n = arr.length;
    let lastElem = arr[n - 1];
    let ind = 0; //index that's available to place elements <= lastElem

    for (let i = 0; i < n; i++) {
        if (arr[i] <= lastElem) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]];
            ind++;
        }
    }

    return arr;
}
console.log(placeLastElem(arr));

function quicksort(arr, low, high) {

}

console.log(quicksort(arr, 0, arr.length - 1));



//Sort Method in js
// arr = [3, 1, 6, 2, 8, 7, 4];
// arr.sort();
// console.log(arr.join(","));  //Prints array in ascending order

// arr.sort((a, b) => a - b);  //Also Prints array in ascending order
// console.log(arr.join(","));

// arr.sort().reverse();
// console.log(arr.join(","));  //Prints array in descending order

// arr.sort((a, b) => b - a);  //Also Prints array in descending order
// console.log(arr.join(","));

// arr = ["apple", "Mango", "banana", "grapes", "kiwi"];
// arr.sort();
// console.log(arr.join(","));  //Prints array in lexicographical order (Capital letters first)


//HW : Explore localeCompare function of js

// let students = [{
//     name: "Mayuresh", age: 20, rollNum: 52
// }, {
//     name: "Bhavesh", age: 20, rollNum: 11
// }];


// students.sort((a, b) => {
//     if (a.age == b.age) {
//         return a.rollNum - b.rollNum;
//     }
//     return a.age - b.age;
// });

// console.log(students);


