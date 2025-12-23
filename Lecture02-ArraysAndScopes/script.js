//======================================Arrays Start Here============================================
/*
Weird Behaviours
if Js, can be initialized with given size if only
one argument (of type number) is passed and it creates "EMPTY" spaces foro all the elements
and they are not defined, but EMPTY
*/

// const arr = new Array("2");
// console.log(arr);

// const arr2 = new Array(2);
// console.log(arr2);

const teams = ["CSK", "MI", "SRH", "KKR", "GT"];
//indexOf(value)
// console.log(teams.indexOf("SRH"));  //index of SRH is 2
// console.log(teams.indexOf("ABC"));  //As there is no team named as ABC


//Task 1 : Replace GT With LSG
//If GT exist the replace GT with LSG if not then return -1
// let gtIndex = teams.indexOf("GT");
// if (gtIndex != -1) {
//     teams[gtIndex] = "LSG"
// }
// console.log(teams);

//Using include() fuction
// if (teams.includes("KKR")) {
//     let kkrIndex = teams.indexOf("KKR")
//     teams[kkrIndex] = "LSG";
// }
// console.log(teams);


//include() function in array -> tells if a value exists in array or not
//returns boolean only -> true / false

// console.log(teams.includes("SRH"));  //Returns true
// console.log(teams.includes("SRK"));  //Return False

// const oldTeam = "GT";
// const newTeam = "RR";
// if (teams.includes(oldTeam)) {
//     const kkrIndex = teams.indexOf(oldTeam);
//     teams[kkrIndex] = newTeam;
// }
// console.log(teams);

// concat() function
// const otherTeams = ["LSG", "RR", "MI"];
// const otherTeams2 = ["LSG2", "RR2", "MI2"];
// const otherteams3 = otherTeams.concat(otherTeams2);
// console.log(otherteams3)

//Average of array
// let arr = [4, 8, 3, 5];
// function CalculateSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     let avg = (sum / arr.length);
//     return avg;
// }
// console.log(CalculateSum(arr));

//factorial of Number
//let num = 5
// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(num))

// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(num))

// function nCr(n, r) {
//     if (n - r < 0) return -1;

//     const nFact = factorial(n);
//     const rFact = factorial(r);
//     const nrFact = factorial(n - r);

//     return nFact / (rFact * nrFact);
// }

// function nCrOfArray(arr) {
//     const r = 4;
//     const ans = [];
//     for (let number of arr) {
//         const ncr = nCr(number, r);
//         ans.push(ncr);
//     }
//     return ans;
// }

// let arr = [4, 10, 6, 8];
// console.log(nCrOfArray(arr));


//Reverse a string
function reverseString(str) {
    let reversed = "";
    // let n = str.split("")
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let str = "Mayuresh";
console.log(reverseString(str));

//Factorial 
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
let n = 5
console.log(factorial(n));

//fibonacci series
function fibbonacci(n) {
    let a = 0;
    let b = 1;
    let result = [];
    for (let i = 1; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        result.push(a);
    }
    return result;
}
console.log(fibbonacci(10));

