/*Write a JavaScript function that accepts a number as 
a parameter and checks whether the number is positive or not*/

let num1=-10;

function checkNum(num1){
    if(num1>0){
        console.log("Positive number")
    }
    else if(num1<0){
        console.log("Negative number")
    }
    else{
        console.log("Zero")
    }
}


checkNum(num1);

//Using Conditional operator

let num2=50;
function checkNumber(num2){
    return (num2>0) ? "Positive number":
    (num2<0) ? "Negative number": "Zero";
}
console.log(checkNumber(num2))

