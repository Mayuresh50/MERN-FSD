/*
we need Js Engine => v8(Chrome)
sabse pehle js engine index.html file mein script tag dhundhata hain 

steps just after loading js file
1. Sabse pehle File read karega
2. File is converted into a predefined structure 
    AST => abstract syntax tree
3. Syntax errors => {} , () []
4. if there are syntax error then no code will be run
5. if all things till now are great and good to go => 

    Execution context => Envirinment where js code actually executes

    phases : 
    1. Creation phase (Variable environment) ==> memory allocaton / creation 
            variables create kare jate hain aur unme value undefined value dali jati hain
            function declarations are copy pasted as it is into memory
    2. Execution phase ==> code is actually executed

    Types of execution context =>


        1. Global Execution Context (GEC) => 
            GEC Call Stack mein jayega
            variables create kare jate hain aur unme value undefined ko assigned kiya jata hain 
            function declarations are copy pasted as it is into memory
            Global object  => window is created 
            this is decided at this time => jo bhi hum this keyword likhte hain uski value yaha decide ki jaati hain 


        2. Function Execution Context (FEC) => 
            Now a Execution centext of FEC is created at Execution phase of GEC 




        3. Eval Execution Context (EEC) (Not Important) =>

    
    


    Stack => Data structure ==> usually array se is linked kiye jate hain ==> LIFO Structure
    
    Call Stack ==> 


    E C in case of let and const =>

    
*/

let a;

function addition() {
    a = 10;
    const b = 20;

    function printsum() {
        var c = 30;
        console.log(a + b + c);
    }
    printsum();
}
addition()