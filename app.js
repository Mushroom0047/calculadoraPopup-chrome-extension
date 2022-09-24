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

  console.log('--------------------------')
  console.log('fv = ' + firstValue);
  console.log('lv = ' + lastValue);
  console.log('res = ' + result);
  console.log('ope = ' + operator);

  if(e.target.id != ''){
    if(result != ''){
      firstValue = result;
      result = '';
    }
    inputValue += e.target.textContent;
  }

  if(e.target.id == '+' ||e.target.id == '-' ||e.target.id == '*' ||e.target.id == '/'){
    operator = e.target.id;
    firstValue = inputValue.substring(0,inputValue.indexOf(operator));
  }

  if(e.target.id == '='){
    lastValue = inputValue.substring(inputValue.indexOf(operator)+1, inputValue.length-1)

    result = calculateResult(firstValue, lastValue, operator);
    inputValue = result;
  }

  //Mostrar los numeros
  inputResult.value = inputValue;
});
