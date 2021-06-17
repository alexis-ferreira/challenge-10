'use strict';

// ************** CALCULATRICE **************

// ---> VARIABLES

let screenCalculator = document.getElementById('displayCalcul');
// console.log(screenCalculator);

let numberKey = document.getElementsByClassName('numberKey');
// console.log(numberKey);

let number = document.getElementsByClassName('number');
// console.log(number);

let operator = document.getElementsByClassName('operator');
// console.log(operator);

let operatorKey = document.getElementsByClassName('operatorKey');
// console.log(operatorKey);

let egal = document.getElementById('egal');
// console.log(egal);

let btnReset = document.getElementById('reset');
// console.log(btnReset);

let number1Stock = "";

let operatorStock = "";

let number2Stock = "";

let number1 = false;
console.log("number1 : " + number1);

let number2 = false;
console.log("number2 : " + number2);

let result = "";


// ---> SCRIPT

btnReset.addEventListener('click', function(){

    number1Stock = "";
    number2Stock = "";
    operatorStock= "";

    result = "";

    number1 = false;
    console.log("number1 : " + number1);

    number2 = false;
    console.log("number2 : " + number2);
    
    screenCalculator.textContent = 0;
});


// NUMBER KEY
for (let i = 0; i < numberKey.length; i++){

    numberKey[i].addEventListener('click', function(){

        if (number1 == false && number2 == false){

            number1Stock = number1Stock + number[i].textContent;

            screenCalculator.textContent = number1Stock;
    
            console.log(number1Stock);

        } else if (number1) {

            number2Stock = number2Stock + number[i].textContent;

            screenCalculator.textContent = number2Stock;

            console.log(number2Stock);
        } else if (number1 == false && number2){

            number2Stock = number2Stock + number[i].textContent;

            screenCalculator.textContent = number2Stock;

            console.log(number2Stock);
        }
    });
};

for (let i = 0; i < operatorKey.length; i++){

    operatorKey[i].addEventListener('click', function(){

        if (number1 == false && number2 == true){
            
            number2Stock = "";

            operatorStock = operator[i].textContent;
    
            screenCalculator.textContent = operatorStock;
    
            console.log(operatorStock);

        } else {
            
            operatorStock = operator[i].textContent;
    
            screenCalculator.textContent = operatorStock;
    
            console.log(operatorStock);
    
            number1 = true;
            console.log("number1 : " + number1);
        }
    });
};

egal.addEventListener('click', function(){

    if (number2){

        switch(operatorStock){

            case "+":
                result = parseFloat(result) + parseFloat(number2Stock);
                console.log(result);
                console.log(number2Stock);
                screenCalculator.textContent = result;
                break;
            
            case "-":
                result = parseFloat(result) - parseFloat(number2Stock);
                console.log(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
    
            case "/":
                result = parseFloat(result) / parseFloat(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
    
            case "x":
                result = parseFloat(result) * parseFloat(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
        }
    } else {

        switch (operatorStock){

            case "+":
                result = parseFloat(number1Stock) + parseFloat(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
            
            case "-":
                result = parseFloat(number1Stock) - parseFloat(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
    
            case "/":
                result = parseFloat(number1Stock) / parseFloat(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
    
            case "x":
                result = parseFloat(number1Stock) * parseFloat(number2Stock);
                console.log(result);
                screenCalculator.textContent = result;
                break;
        }
    }

    number1Stock = "";
    number1 = false;
    console.log("number1 : " + number1);

    number2 = true;
    console.log("number2 : " + number2);
});