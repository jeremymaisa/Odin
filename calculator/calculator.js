const resultContainer = document.querySelector('.result-container');
const button = document.querySelectorAll('button');

let expression = '';

button.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.innerText;

    if (value === 'C') {
      expression = '';
      resultContainer.innerText = '';
      return;
    }

    if (value === '=') {
      try {
        expression = calculateExpression(expression);
        resultContainer.innerText = expression;
      } catch (error) {
        expression = '';
        resultContainer.innerText = '';
      }
      return;
    }

    expression += value;
    resultContainer.innerText = expression;
  });
});

function calculateExpression(exp) {
  const tokens = exp.match(/(\d+|\+|\-|\*|\/)/g);

  if (!tokens) return '';

  let operators = [];
  let numbers = [];

  tokens.forEach(token => {
    if (['+', '-', '*', '/'].includes(token)) {
      operators.push(token);
    } else {
      numbers.push(Number(token));
    }
  });

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '*' || operators[i] === '/') {
      let result =
      operators[i] === '*'
      ? numbers[i] * numbers[i + 1]
      : numbers[i] / numbers[i + 1];

      numbers.splice(i, 2, result);
      operators.splice(i, 1);

      i--;
    }
  }

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '+') result += numbers[i + 1];
    if (operators[i] === '-') result -= numbers[i + 1];
  }
  return result;
}