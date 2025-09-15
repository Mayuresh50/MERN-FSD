/*
What is Set :
-Set is collection of unique values,
-Order of elements is based on insertion
*/

//How to create a set
// let set = new Set([1, 2, 3, 4]);   //create a new set named as
// console.log({ set })   //Print set with the number of elements present in set

// //some other methods used in set
// set.add(5);  //adds an element 5 at the end of the set
// console.log({ set })
// set.has(5);  //checks if element 5 is present. return true if present else returns false
// set.delete(5)  //removes element 5 from set
// console.log({ set })
// console.log(set.size);  //return the size of element


// function powerExponentiation(a, b) {
//     if (b === 0) return 1;
//     if (b < 0) return 1 / powerExponentiation(a, -b);

//     if (b % 2 === 0) {
//         return powerExponentiation(a * a, Math.floor(b / 2));
//     } else {
//         return a * powerExponentiation(a, b - 1);
//     }
// }
// console.log(powerExponentiation(2, 3));

// function power(a, b) {
//     if (b == 0) return 1;   //base case  
    //always remember : Never put return 0 when you are multiplying anything in recursion because it will give output 0(Zero) only.
//     return a * power(a, b - 1);
// }
// console.log(power(2, 3));

