/* 
Sorting : 
-Data is arranged in a specific manner such that we can know and take decisions about Data

*/

// function sorting(arr) {
//     let start = arr[0];
//     let key = arr[arr.length - 1];
//     let j = -1;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < key) {
//             j = j + 1;
//             i = i + 1;
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//             }
//         } else {
//             let swap = arr[j + 1];
//             arr[j + 1] = key;
//             arr[arr.length - 1] = swap;
//         }
//     }
//     console.log({ arr })
// }
let arr = [4, 1, 3, 7, 5]
// sorting(arr);



//BubbleSort Algorithm
function bubbleSort(arr) {
    let j = 0;
    while (j < arr.length) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp
            }
        }
        j++;
    }
    console.log(arr)
}
bubbleSort(arr)