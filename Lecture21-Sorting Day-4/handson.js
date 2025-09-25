//Quicksort Using Recursion
function placeLastElem(arr, low, high) {
  let lastElem = arr[high];
  let ind = low;

  for (let i = low; i <= high; i++) {
    if (arr[i] <= lastElem) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      ind++;
    }
  }

  return ind - 1;
}
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = placeLastElem(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}




/* 
Locale Compare : It is used to compare two strings in the current locale.
    It returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
*/

let students = [
    { name: "Mayuresh", age: 21, rollNum: 52 },
    { name: "Bhavesh", age: 20, rollNum: 11 },
    { name: "Hitesh", age: 25, rollNum: 21 }
];
students.sort((a, b) => b.name.localeCompare(a.name));
console.log(students);

students.sort((a, b) => {
    if (a.age > b.age) {
        return a.rollNum - b.rollNum;
    }
    return a.age - b.age;
});
console.log(students);
