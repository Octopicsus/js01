console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
let myStr = 'JS magic';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: 'Andrii',
    last: 'Zhyvov'
};
console.log(myNum, myStr, myBool, myArr, myObj);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

let decimal2 = myNum.toFixed(2);
console.log(decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

let i = parseInt(decimal2);
console.log(i);

i++;
console.log(i);

++i;
console.log(i);

i--;
console.log(i);

--i;
console.log(i);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest

let myTest = 20;

// +=

myTest = myTest + myNum;

// –=

myTest = myNum - myTest;
myTest = myTest - myTest; // интересное поведение(минус на минус, даёт плюс)
myTest = myNum - myTest;

// *=

myTest = decimal2 * myTest;
myTest = myTest * 2;
myTest = myTest * 1;

// /=

myTest = myTest / myTest;
myTest = myTest / 0; // <- infinity
console.log(myTest);
myTest = myTest / 2;

myTest = parseInt(myTest); // <- NaN
console.log(myTest);
myTest = 20;

// %=

myTest = myTest % 2;
myTest = myTest % 0; // <-NaN
console.log(myTest);
myTest = 8;

console.log(myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi

const Pi = Math.PI;
let myPi = Pi;
console.log(myPi);

// округлене значення числа 89.279 → myRound

let myRound = Math.round(89.279)
console.log(myRound);

// випадкове число між 0..10 → myRandom

let myRandom = Math.random() * 10;
myRandom = Math.round(myRandom);
console.log(myRandom);

// 3 у 5 степені → myPow

let myPow = Math.pow(3, 5);
console.log(myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

let strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 'Мама мыла раму, рама мыла маму'.length
}
console.log(strObj); 

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos

let isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

// isRama

let isRama = strObj.str.includes('рама');
console.log(isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

let strReplace = strObj.str.replace('мыла', 'моет').replace('рама мыла', 'Рама держит'); // нашёл оформление, но непонятно до конца как работает replace(). Нужна более детальная документация и примеры.
console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr

let someStr = 'some STRING';

someStr = someStr.toLocaleUpperCase();
console.log(someStr);

someStr = someStr.toLocaleLowerCase();
console.log(someStr);

//----- E X T R A ------------------
console.log('-----------  EXTRA  ------------');

console.log(typeof someStr);
console.log(typeof strObj);
console.log(typeof myTest);
console.log(typeof myBool);
console.log(typeof myArr);
console.log(typeof nothing);

//----------------------------------

let myInt = 5.2;

myInt = parseFloat(myInt);
console.log(myInt);

myInt = parseInt(myInt);
console.log(myInt);

//---------------------------------

let convert = Number(myBool);

convert = convert + myInt;
console.log(convert);

//---------------------------------

let str;

str = "Hello, world;\nWe are here";
console.log(str);

str = "Hello, world;\tWe are here";
console.log(str);

str = "Hello, world;\\We are here";
console.log(str);

str = "Hello, world;\'We are here";
console.log(str);

str = "Hello, world;\"We are here";
console.log(str);

//---------------------------------

console.log(convert < myInt);
console.log(5 == 5);

let comp;
let x;
let y;

x = 5 == 5;
y = convert < myInt;
console.log('x ->', x, 'y ->', y)

comp = x || y;
console.log('||' ,comp);

comp = x == y;
console.log('==' ,comp);

comp = x != y;
console.log('!=' ,comp);

comp = x && y;
console.log('&&' ,comp);

console.log('invert >',!comp);

//---------------------------------

console.log('con'+'catination');

//---------------------------------

console.log('1 && true ->', 1 && true);

console.log('0 || 5 ->', 0 || 5);

console.log('3 || 5 ->', 3 || 5);

//---------------------------------

console.log('0 || 1 || 2 || 3 - >', 0 || 1 || 2 || 3);

console.log('1 && 3 && -1 && 0 && 7 ->', 1 && 3 && -1 && 0 && 7); 

console.log('-1 && 2 && 3 && 10 && 9 ->', -1 && 2 && 3 && 10 && 9); 

//---------------------------------

let n = 9;

n += 1;
n -= 1;
n *= 2;
n /= 2;

console.log('n ->', n);

//---------------------------------

let myValue = 99;
let currency = '€';
let message = `Only for this month price: ${myValue}${currency}`;

console.log(message);

//---------------------------------

let name = 'Octo';
// alert('Hello'+' '+name);
// alert(`Hi ${name.toLocaleLowerCase()}!`);

//---------------------------------

// let isAdmin = confirm('Are you serious?');
// alert(isAdmin);

//---------------------------------

let myNumber = 0;
// let yourNumber = prompt('What is your number?', myNumber);
// alert(yourNumber); 

//---------------------------------

let defaultDigit = 02;
// let digit = prompt('Enter any digit', defaultDigit);

// alert(digit); 
// alert(typeof digit); 
// alert(defaultDigit + digit); 

// digit = parseInt(digit);
// alert(typeof digit);
// alert(defaultDigit + digit);
