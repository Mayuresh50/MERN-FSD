// Factorial of a number
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log("Factorial:", factorial(5));
// console.log("Factorial:", factorial(3));

// Fibonacci number
// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log("Fibonacci:", fibonacci(6));

// Sum of first N numbers
// function sumOfN(n) {
//     if (n === 0) return 0;
//     return n + sumOfN(n - 1);
// }
// console.log("Sum of N:", sumOfN(5));

// Reverse a string
// function reverseString(str) {
//     if (str.length === 0) return "";
//     return reverseString(str.slice(1)) + str[0];
// }
// console.log("Reverse String:", reverseString("abc"));

// // Print numbers 1 to N
// function printNumbers(n) {
//     if (n === 0) return;
//     printNumbers(n - 1);
//     console.log(n);
// }
// printNumbers(5);

// Print numbers N to 1
// function printNto1(n) {
//     if (n === 0) return;
//     console.log(n);
//     printNto1(n - 1);
// }
// printNto1(5);


// Nth Even Fibonacci number
// function nthEvenFibonacci(n) {
//     if (n === 1) return 2;
//     if (n === 2) return 8;
//     return 4 * nthEvenFibonacci(n - 1) + nthEvenFibonacci(n - 2);
// }
// console.log("Nth Even Fibonacci:", nthEvenFibonacci(4));


// Print range recursively
// function printRange(x, y) {
//     if (x > y) return;
//     console.log(x);
//     printRange(x + 1, y);
// }
// printRange(5, 8);


// Recursive Exponentiation
// function power(x, y) {
//     if (y === 0) return 1;
//     if (y % 2 === 0) return power(x * x, Math.floor(y / 2));
//     return x * power(x, y - 1);
// }
// console.log("Power:", power(2, 10));

// Print reverse from N
// function printReverse(n) {
//     if (n === 0) return;
//     console.log(n);
//     printReverse(n - 1);
// }
// printReverse(5);


// Remove 'x' from string
// function removeX(str) {
//     if (str.length === 0) return "";
//     if (str[0] === "x") return removeX(str.slice(1));
//     return str[0] + removeX(str.slice(1));
// }
// console.log("Remove X:", removeX("ancxkxux"));


// Count "abc" or "aba"
// function countABC(str, i = 0) {
//     if (i > str.length - 3) return 0;
//     if ((str[i] === "a" && str[i + 1] === "b" && (str[i + 2] === "c" || str[i + 2] === "a"))) {
//         return 1 + countABC(str, i + 1);
//     }
//     return countABC(str, i + 1);
// }
// console.log("Count ABC/ABA:", countABC("abaaba"));
// console.log("Count ABC/ABA:", countABC("abcxxabc"));


// Count 'x' in string
// function countX(str) {
//     if (str.length === 0) return 0;
//     if (str[0] === "x") return 1 + countX(str.slice(1));
//     return countX(str.slice(1));
// }
// console.log("Count X:", countX("abcxxabc"));
// console.log("Count X:", countX("addthe"));


// Palindrome string
// function isPalindrome(str, low = 0, high = str.length - 1) {
//     if (low > high) return true;
//     if (str[low] !== str[high]) return false;
//     return isPalindrome(str, low + 1, high - 1);
// }
// console.log("Palindrome:", isPalindrome("abba"));
// console.log("Palindrome:", isPalindrome("abc"));


// Valid Parenthesis
// function validParenthesis(s) {
//     if (s.length % 2 !== 0) return false;
//     let open = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(") open++;
//         else {
//             if (open > 0) open--;
//             else return false;
//         }
//     }
//     return open === 0;
// }
// console.log("Valid Parenthesis:", validParenthesis("()()(())"));
// console.log("Valid Parenthesis:", validParenthesis("())(())("));


// Generate Parenthesis combinations
// let allParen = [];
// function generateParenthesis(n, str = "", index = 0, open = 0, close = 0) {
//     if (open < close) return;
//     if (index === n) {
//         if (open === close) allParen.push(str);
//         return;
//     }
//     generateParenthesis(n, str + "(", index + 1, open + 1, close);
//     generateParenthesis(n, str + ")", index + 1, open, close + 1);
// }
// generateParenthesis(4);
// console.log("Generate Parenthesis:", allParen);


// String Permutations
// let permutations = [];
// function swap(str, i, j) {
//     let arr = str.split("");
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     return arr.join("");
// }
// function stringPermutations(str, index = 0) {
//     if (index === str.length - 1) {
//         permutations.push(str);
//         return;
//     }
//     for (let i = index; i < str.length; i++) {
//         let swapped = swap(str, i, index);
//         stringPermutations(swapped, index + 1);
//     }
// }
// stringPermutations("abc");
// console.log("String Permutations:", permutations);
