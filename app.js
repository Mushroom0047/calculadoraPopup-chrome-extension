let inputValue = '';
let firstValue = '';
let lastValue = '';
let operator = '';
let result = '';
let inputResult = document.querySelector("#result-input");

//buttons
let clearButton = document.querySelector('#clear');
let sectionButtons = document.querySelector(".two-columns");

//Metodos
const calculateResult = (a, b, c) => {
  var res = 0;
  switch(c){
    case '+':
      res = parseFloat(a)+parseFloat(b);
      break;
    case '-':
      res = parseFloat(a)-parseFloat(b);
      break;
    case '*':
      res = parseFloat(a)*parseFloat(b);
      break;
    case '/':
      res = parseFloat(a)/parseFloat(b);
      break;
  }
  return res;
}
const clear = () => {
  inputResult.value = '';
  inputValue = '';
  firstValue = '';
  lastValue = '';
  operator = '';
  result = '';
}

//clicks
clearButton.addEventListener('click', clear);

sectionButtons.addEventListener('click', (e) => {
  e.stopPropagation();

  if(e.target.id != ''){
    if(result != ''){
      firstValue = result;
      result = '';
    }
    inputValue += e.target.textContent;
  }

  if(e.target.id == '+' ||e.target.id == '-' ||e.target.id == '*' ||e.target.id == '/'){
    if(firstValue != '' && lastValue != ''){
      result = calculateResult(firstValue, lastValue, operator);
      inputValue = result;
    }
    operator = e.target.id;
  }else{
    if(operator == ""){
      firstValue += e.target.id;
      console.log('first value',firstValue)
    }else{
      lastValue += e.target.value;
      console.log(lastValue)
    }
  }

  if(e.target.id == '='){
    lastValue = inputValue.substring(inputValue.indexOf(operator)+1, inputValue.length-1)

    result = calculateResult(firstValue, lastValue, operator);
    inputValue = result;
    operator = '';
  }

  //Mostrar los numeros
  inputResult.value = inputValue;
});
