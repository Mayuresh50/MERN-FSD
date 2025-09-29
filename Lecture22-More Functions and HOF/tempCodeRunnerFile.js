let arr = [2, 11, 5, 4, 7];
let squaredarr = arr.map((value, index, array) => {
    //return value * value;
    console.log(value * value); 
});
console.log({ squaredarr });