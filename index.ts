let array : string[] = ["1", "2", "3"]; 

array[3] = "4"; 

array.push("5"); 

let scores : (string|number)[] = []; 

scores = ["Programming", 5, "Software design", 4]; 

//should use this 
let number = []; 

//instead of this
let number2 : number[] = []; 

console.log(scores); 