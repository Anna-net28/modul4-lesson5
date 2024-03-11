'use strict'


const rubIn = {
  dollar: 73,
  rubles: 86.7,
};
const symbol = {
  dollar: '$',
  rubles: 'P',
};
const convertTo = (currency, euro) => {
  return (euro * rubIn[currency]).toFixed(2) + symbol[currency];
};

const run = () => {
  const amount = parseInt(prompt('Введите стоимость покупки'));
  if (!amount) return alert('Не верная сумма');
  const inRubles = convertTo('rubles', amount);
  alert(inRubles);
};
run();

let str = 'привет Мир';
function modifiedString(str) {
  if (!str) return str;
  let firstChar = str.charAt(0);
  let upperFirstChar = firstChar.toUpperCase() + str.slice(1, 7);
  let thoChar = str.charAt(7);
  let restOfString = thoChar.toLowerCase() + str.slice(8);
  return upperFirstChar + restOfString;
} 
console.log(modifiedString(str));