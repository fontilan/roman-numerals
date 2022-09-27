const inputEl = document.getElementById('number-input');
const resultEl = document.getElementById('result-msg');
const buttonEl = document.getElementById('check-btn');

buttonEl.addEventListener('click', function () {
  convert(inputEl.value);
});

let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let roman = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

function convert(number) {
  let result = '';
  for (let i = 0; i < roman.length; i++) {
    while (number >= arabic[i]) {
      result += roman[i];
      number -= arabic[i];
    }
  }
  resultEl.textContent = result;
  return result;
}
