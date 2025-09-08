//Armstrong number
// function armstrongNumber(num) {
//     let count = num.toString().length;
//     let temp = num;
//     let sum = 0;
//     while (temp > 0) {
//         let rem = temp % 10;
//         sum = sum + Math.pow(rem, count);
//         temp = Math.floor(temp / 10);
//     }
//     if (num === sum) {
//         return true;
//         // console.log(`${num} is a Armstrong Number`)
//     } else {
//         return false
//         //console.log(`${num} is a not Armstrong Number`)
//     }
// }
// let num = 153    //--> count = 3 --> 1**3 + 5**3 + 3**3 --> 153
// console.log(armstrongNumber(num));

//Count Armstrong number in range
// function countArmstrongNumberInRange(range) {
//     let armStrongNumberList = "";
//     let count = 0;
//     for (let i = 1; i <= range; i++) {
//         if (armstrongNumber(i)) {
//             armStrongNumberList += i + " ";
//         }
//     }
//     return armStrongNumberList.trim();
// }
// console.log(countArmstrongNumberInRange(153));

//Prime number using Square root of N
// function isPrime(n) {
//     if (n == 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(13))
// function primeNumberInRange(range) {
//     let PrimeNumbers = "";
//     for (let i = 2; i <= range; i++) {
//         if (isPrime(i)) {
//             PrimeNumbers += i + " ";
//         }
//     }
//     return PrimeNumbers.trim();
// }
// console.log(primeNumberInRange(10));

//Student Grades using Switch case
// function studentGrades(marks) {
//     let grade;
//     if (marks > 90) grade = "A";
//     else if (marks > 80 && marks <= 90) grade = "B"
//     else if (marks > 70 && marks <= 80) grade = "C"
//     else if (marks > 60 && marks <= 70) grade = "D"
//     else if (marks > 50 && marks <= 60) grade = "E"
//     else grade = "F"

//     switch (grade) {
//         case "A":
//             console.log("Excellent");
//             break;
//         case "B":
//             console.log("Good");
//             break;
//         case "C":
//             console.log("Average");
//             break;
//         case "D":
//             console.log("Meets Expectation");
//             break;
//         case "E":
//             console.log("Fair")
//             break;
//         case "F":
//             console.log("Fail");
//             break;
//     }
// }
// studentGrades(80);
