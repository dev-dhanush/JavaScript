// TypeScript 1.4 or above versions gives programs the ability to combine one or two types. 
// Union types are a powerful way to express a value that can be one of the several types. 
// Two or more data types are combined using the pipe symbol (|) to denote a Union Type.
// A union type is written as a sequence of types separated by vertical bars.


// Union Variable.
var val:string|number;
val = 12;
// console.log("Numeric: "+val);
val = "God Is Great..!!";
// console.log("String: "+val);


// Union with Array.
var arr:number[]|string[]; 
// var i:number; 
arr = [1,2,4] 
// console.log("Numeric Array:")  

// for(i = 0;i<arr.length;i++) { 
// //    console.log(arr[i]) 
// }  

arr = ["Mumbai","Pune","Delhi"] 
// console.log("String Array:")  

// for(i = 0;i<arr.length;i++) { 
// //    console.log(arr[i]) 
// } 


//Union with Function
function showFun(nm:string|string[]) { 
    if(typeof nm == "string") { 
    //    console.log(nm) 
    } else { 
       var i:number; 
      for(i = 0;i<nm.length;i++) { 
        //   console.log(nm[i]);
       } 
    } 
 } 
//  console.log("i",i);
 
//  showFun("Abhishek Pujara");
//  showFun(["Abhishek","Nidhi","Jay"]);