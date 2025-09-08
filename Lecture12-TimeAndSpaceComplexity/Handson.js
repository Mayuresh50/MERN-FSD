// for (let i = n; i > 0; i = Math.floor(i / 2)) {   // log(n) times
//     for (let j = 1; j <= i; j++) { // i times
//         console.log(j);
//     }
//     console.log();
// }
//TC : O(n)

// let i = 1
// let n = 10
// while (i <= n) {
//     if (i % 2 == 0) {
//         console.log(i)
//         i += 2;      //Infinite loop because i starts from 1 which odd and it wont increment because condition is always fails
//     }
// }

