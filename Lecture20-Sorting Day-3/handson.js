//Merge Two sorted arrays using for loops
function mergeSortedArrays(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
    let ans = [];

    for (let k = 0; k < n + m; k++) {
        if (i < n && j < m) {
            if (arr1[i] < arr2[j]) {
                ans[k] = arr1[i];
                i++;
            } else {
                ans[k] = arr2[j];
                j++;
            }
        } else if (i < n) {
            ans[k] = arr1[i];
            i++;
        } else {
            ans[k] = arr2[j];
            j++;
        }
    }
    return ans;
}
let arr1 = [1, 3, 4, 7, 10];
let arr2 = [2, 9, 12, 14, 20]
console.log(mergeSortedArrays(arr1, arr2))