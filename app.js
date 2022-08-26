let tempValue = '';
let inputResult = document.querySelector(".result__input");

//buttons
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  inputResult.value = '';
  tempValue = '';
});


let sectionButtons = document.querySelector(".two-columns");


sectionButtons.addEventListener('click', (e) => {
  e.stopPropagation();

  if(e.target.id != ''){
    tempValue += e.target.textContent;
  }

  inputResult.value = tempValue
})