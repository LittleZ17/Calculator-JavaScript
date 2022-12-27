const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

let arrayCalculation = [];
let resultScreen;

function calculate(button){
   const value = button.textContent;
   if (value === "C"){
    arrayCalculation = []
    screen.textContent = " "
   }else if(value === "="){
    screen.textContent = eval(resultScreen)
   }else{
    arrayCalculation.push(value);
    resultScreen = arrayCalculation.join('');
    screen.textContent = resultScreen;
   }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button
    )))