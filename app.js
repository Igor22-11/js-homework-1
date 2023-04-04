/* Task 1 */


const answer = prompt('Введите текст:', '');

alert(`Введено: ${answer}`);



/* Task 2 */

const number_one = +prompt('Введите число №1:', '');
const number_two = +prompt('Введите число №2:', '');

if (!isNaN(number_one) && !isNaN(number_two)) {
  const sum = number_one + number_two;
  alert(`Сумма: ${sum}`);
} else {
  alert('Введены не числовые значения!')
}



/* Task 3 */

const yourName = prompt('Введите Ваше имя:', '');
const yourAge = +prompt('Сколько Вам лет?', '18');
console.log(yourName);
if (!isNaN(yourAge)) {
  if (yourAge >= 18) {
    alert(`Добро пожаловать ${yourName}`);
  } else {
    alert(`Простите, ${yourName}, доступ закрыт`);
  }
} else {
  alert('Введён некоректный возраст!')
}


/* Задание 4 */


let allNameBlock;

if (confirm('Хотите ввести название блока?')) {
  let blockName = prompt('Введите название блока:', '');
  if (blockName && blockName.trim() !== '') {
    allNameBlock = blockName;

    if (confirm('Хотите ввести название элемента?')) {
      let className = prompt('Введите название элемента:', '');
      if (className && className.trim() !== '') {
        allNameBlock += `__${className}`;
        if (confirm('Хотите ввести название модификатора?')) {
          let modifierName = prompt('Введите название модификатора:', '');
          if (modifierName && modifierName.trim() !== '') {
            allNameBlock += `-${modifierName}`;
          }
        }
      }
    }
  } else {
    alert('Элементу не присвоен класс');
  }
} else {
  alert('Элементу не присвоен класс');
}

if (allNameBlock && allNameBlock.trim() !== '') {
  alert(`Элементу присвоен класс ${allNameBlock}`);
}




/* Задание 5 */

const numberOneCalc = +prompt('Введите число №1:', '');
const numberTwoCalc = +prompt('Введите число №2:', '');

let result;

if (!isNaN(numberOneCalc) && !isNaN(numberTwoCalc)) {

  const arithmeticOperation = prompt('Введите арифметическую операцию (/ - деление, * - умножение, - - минус, + - плюс', '');

  if (arithmeticOperation === '+') {
    result = numberOneCalc + numberTwoCalc;
  } else if (arithmeticOperation === '-') {
    result = numberOneCalc - numberTwoCalc;
  } else if (arithmeticOperation === '*') {
    result = numberOneCalc * numberTwoCalc;
  } else if (arithmeticOperation === '/') {
    if (numberTwoCalc === 0) {
      alert('Делить на ноль нельзя!')
    }
    result = numberOneCalc / numberTwoCalc;
  } else {
    alert('введенная арифметическая операция некорректна')
  }

  if (result) {
    alert(`Результат арифметической операции ${numberOneCalc} ${arithmeticOperation} ${numberTwoCalc} = ${result}`)
  }


} else {
  alert('введенные данные некорректны')
}