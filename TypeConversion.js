/*Explicit Conversion:-
The type conversion that we manually do is known as explicit type conversion. In JavaScript, explicit type conversions are done using the built-in methods like String (), Number(), etc.*/
// Number Conversion
let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number(' ')
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN

// Boolean Conversion
res=Boolean(1); // true
res= Boolean(0); // false
res= Boolean("hello"); // true
res= Boolean(""); // false

// String Conversion
let rest
let a = 90
rest = String(a) // returns a string from a number variable a
String(378009) // returns a string from a number literal 378009
console.log(a.toString());
(378009).toString();

// parseInt and parseFloat
console.log( parseInt('$100 dollars') ); // NaN
console.log( parseInt('+10.25990 kg') ); // 10
console.log( parseFloat(' +10.25 kg') ); // 10.25
console.log( parseFloat('ABC') ); //NaN

/*
Implicit Conversion:-
Sometimes JavaScript automatically converts one data type to another. This type of conversion is known as implicit conversion.*/

// Conversion To String
res = '3' + 4; 
console.log(res) // "34"
res = '9' + true; 
console.log(res); // "9true"
res= '0' + null; 
console.log(res); // "0null"

// Conversion To Number
res = '4' - '4'; 
console.log(res); // 0
res = '4' * 5;
console.log(res); // 20

// Boolean Conversion to Number
res = '5' - true;
console.log(res); // 4
res = 10 + false;
console.log(res); // 10

res = 4 + null; // 4
res = 4 - undefined;// NaN


