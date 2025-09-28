// const library = {
//     name: "City Library",
//     books: [
//         { id: 1, title: "JavaScript Basics", author: "John", copies: 3 },
//         { id: 2, title: "CSS Mastery", author: "Jane", copies: 5 },
//         { id: 3, title: "HTML in Depth", author: "David", copies: 2 },
//     ],

//     displayBooks: function () {
//         this.books.forEach((book) => {
//             console.log(`Book id: ${book.id}, title: ${book.title}, copies: ${book.copies}`);
//         });
//     },

//     addBook: function (id, title, author, copies) {
//         const exists = this.books.find((b) => b.id === id);
//         if (exists) {
//             console.log(`Book with id ${id} already exists`);
//             return;
//         }
//         this.books.push({ id, title, author, copies });
//     },

//     borrowBook: function (id) {
//         const book = this.books.find((b) => b.id === id);
//         if (book && book.copies > 0) {
//             book.copies--;
//             console.log(`${book.title} borrowed successfully! Remaining copies: ${book.copies}`);
//         } else {
//             console.log("Book not available");
//         }
//     },

//     totalCopies: function () {
//         return this.books.reduce((acc, b) => acc + b.copies, 0);
//     },
// };

// library.displayBooks();
// library.addBook(4, "React Guide", "Smith", 6);
// library.borrowBook(2);
// console.log("Total copies in library: " + library.totalCopies());


// /* Arrow function example */
// const multiply = (a, b) => a * b;
// console.log("Multiplication:", multiply(6, 7));


// /* Check even number */
// const isEven = (n) => n % 2 === 0;
// console.log("Is 10 even? ", isEven(10));


// /* Student Marks Example with HOF */
// const students = [
//     { name: "Ravi", marks: 85 },
//     { name: "Sneha", marks: 42 },
//     { name: "Aman", marks: 67 },
//     { name: "Divya", marks: 95 },
// ];

// // filter
// const passed = students.filter((s) => s.marks >= 50);
// console.log("Passed students:", passed);

// // map
// const namesUpper = students.map((s) => s.name.toUpperCase());
// console.log("Uppercase names:", namesUpper);

// // reduce
// const avgMarks = students.reduce((acc, s) => acc + s.marks, 0) / students.length;
// console.log("Average Marks:", avgMarks);

// // find
// const topper = students.find((s) => s.marks > 90);
// console.log("Topper:", topper);


// /* Sorting practice */
// // Sort students by marks (descending)
// students.sort((a, b) => b.marks - a.marks);
// console.log("Sorted by marks:", students);

// // Sort by name alphabetically
// students.sort((a, b) => a.name.localeCompare(b.name));
// console.log("Sorted by name:", students);


// /* Contest style questions */

// // 1. Bubble Sort
// let nums = [5, 3, 8, 4, 2];
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log("Bubble Sort:", bubbleSort(nums));

// // 2. Reverse a string
// const reverseString = (str) => str.split("").reverse().join("");
// console.log("Reverse of 'JavaScript' :", reverseString("JavaScript"));

// // 3. Count vowels in a string
// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     return str.split("").filter((ch) => vowels.includes(ch)).length;
// }
// console.log("Vowels in 'Hello World':", countVowels("Hello World"));

// // 4. Check if array is sorted
// const isSorted = (arr) => arr.every((val, i, a) => i === 0 || a[i - 1] <= val);
// console.log("Is [1,2,3,4] sorted?", isSorted([1, 2, 3, 4]));
// console.log("Is [3,1,2] sorted?", isSorted([3, 1, 2]));

