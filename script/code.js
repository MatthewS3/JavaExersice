let hours = +prompt("enter the hours you have worked");
let rate = +prompt("enter the hourly rate");
let salary = hours * rate 
let curFormat = Intl.NumberFormat()
console.log(`your salary is R${curFormat.format(salary)}`);
console.log('you salary is R${salary.toFixed(2)}');

