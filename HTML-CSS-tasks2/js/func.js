
function Result(str) { // Палиндром
    return str.toLowerCase().replaceAll(' ', '') == str.split('').reverse().join('').toLowerCase().replaceAll(' ', '');
}
var str = prompt('Введите строку:');
alert(Result
    (str));

let str = 'skdj34lsg4  4te' //Целое положительное число
let numbers = str.replace(/\D/g, '');
if (numbers!="")
{
console.log(Number(numbers));
}
else {console.log(NaN)}

function Result
(str, len, symbol) { // Добавление в начало строки
    if (str.length >= len) {
      return str;
    } else {
      const lenSymbol = len - str.length;
      const dopSymbol = symbol.repeat(Math.ceil(lenSymbol / symbol.length)).slice(0, lenSymbol);
      return dopSymbol + str;
    }
  }
  console.log(Result
    ('qwerty',6,'fdg'));

function Result
(str,len) { //Проверка длины строки
    if (str.length>len){
      return false
    }
  else {return true}
}
console.log('проверяемая строка', 20)
console.log('проверяемая строка', 18)
console.log('проверяемая строка', 10) 
