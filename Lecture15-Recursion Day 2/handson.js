// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// //console.log("Try programiz.pro")

// const n = 6;
// const words = ["cat", "tea", "pet", "tac", "act", "eat"];

// const q = 4;
// const queries = ["cat", "tca", "eee", "tea"];


// function inputStr(word,input)
// {
//     // console.log({word})
//     // console.log({input})
       
//        let temp="" 
//         if(word.length == input.length)
//         {
//             let arr=[]
//             for(let k=0;k<input.length;k++)
//             { 
//                 //  if(!input.includes(word[k]))
//                 //  {
//                 //      return ""
//                 //  }
                 
//                 //  temp+=word[k]
                
//                 for(let m=0;m<input.length;m++)
//                 {
//                       if(input[k]==word[m] &&  arr[m]!=1)
//                       {
//                           arr[m]=1;
//                           temp+=input[k]
//                           break;
//                       }
//                 }
                
//             }
            
//             if(temp.length==input.length)
//             {
//                 return temp
//             }
//             else{
//                 return ""
//             }
//         }
//         else{
//             temp=""
//         }
      
//      // return temp;
// }
// for(let i=0;i<queries.length;i++)
// {
//     let str=""
//       for(let j=0;j<words.length;j++)
//       {
//             str+=inputStr(words[j],queries[i])
//             str+=" "
//       }
      
//       if(str.length>6)
//       console.log(str)
//       else
//       console.log("-1")     
// }

//===============================================================================================

// write a recursive function to find the sum of first n natural numbers 

// function sumOFNaturalNumbers(n){
//     if(n<=0) return 0;
//  return n+sumOFNaturalNumbers(n-1);
// }
// console.log(sumOFNaturalNumbers(5)); //15

//============================================GCD===================================================

// function gcdWhile(a,b){

//     while(a!=0){
//         let temp=a;
//         a=b%a;
//         b=temp
//     }
//     return b;
// }

// console.log(gcdWhile(8,32)); //8

// function gcdRecursion(a,b){
//     if(a==0) return b;

//     return gcdRecursion(b%a,a);
// }
// console.log(gcdRecursion(8,32)); //8

/* GCD of Array */
// let arr = [27,12,18,24,30];
// let currGCD=0;

// for(let i=0;i<arr.length;i++){
//     currGCD = gcdRecursion(arr[i],currGCD);
// }
// console.log({currGCD});

// fibonacci series 
//  time complexity : O(2^n)

// function power(a,b){
//   Using while loop
//    let result=1;
//   while(b!=0){
//     result*=a;
//     b--;
//   }
//   return result;

// using for
//    let result=1;
//   for(let i=0;i<b;i++){
//     result*=a;
//   }
//   return result;
//using recursion
//   if(b==0) return 1;
//   return a*power(a,b-1);
// }
// console.log(power(2,3));

// function powerExponentiation(a,b){
//     if(b==0) return 1;
//     if(b==1) return a;
//     if(b%2 != 0){
//         return a*powerExponentiation(a,b-1);
//     }else{
//         return powerExponentiation(a*a,Math.floor(b/2));
//     }
// }
// console.log("power Exponentiation: ",powerExponentiation(2,3));
