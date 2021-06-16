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

let number1Stock = "";

let operatorStock = "";

let number2Stock = "";

let number1 = false;

let number2 = false;

let result = "";


// ---> SCRIPT


// NUMBER KEY
for (let i = 0; i < numberKey.length; i++){

    numberKey[i].addEventListener('click', function(){

        if (number1 == false){

            number1Stock = number1Stock + number[i].textContent;

            screenCalculator.textContent = number1Stock;
    
            console.log(number1Stock);

        } else {

            number2Stock = number2Stock + number[i].textContent;

            screenCalculator.textContent = number2Stock;

            console.log(number2Stock);
        }
    });
};

for (let i = 0; i < operatorKey.length; i++){

    operatorKey[i].addEventListener('click', function(){

        operatorStock = operator[i].textContent;

        screenCalculator.textContent = operatorStock;

        console.log(operatorStock);

        number1 = true;
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

    number2 = true;
});