// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Try programiz.pro")

const n = 6;
const words = ["cat", "tea", "pet", "tac", "act", "eat"];

const q = 4;
const queries = ["cat", "tca", "eee", "tea"];


function inputStr(word,input)
{
    // console.log({word})
    // console.log({input})
       
       let temp="" 
        if(word.length == input.length)
        {
            let arr=[]
            for(let k=0;k<input.length;k++)
            { 
                //  if(!input.includes(word[k]))
                //  {
                //      return ""
                //  }
                 
                //  temp+=word[k]
                
                for(let m=0;m<input.length;m++)
                {
                      if(input[k]==word[m] &&  arr[m]!=1)
                      {
                          arr[m]=1;
                          temp+=input[k]
                          break;
                      }
                }
                
            }
            
            if(temp.length==input.length)
            {
                return temp
            }
            else{
                return ""
            }
        }
        else{
            temp=""
        }
      
     // return temp;
}

for(let i=0;i<queries.length;i++)
{
    let str=""
      for(let j=0;j<words.length;j++)
      {
            str+=inputStr(words[j],queries[i])
            str+=" "
      }
      
      if(str.length>6)
      console.log(str)
      else
      console.log("-1")
      
}