

// Task 1

for (let i = 1; i <= 10; i++) {

    console.log(i);
}

// Task 2 

let sum = 0; 


for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Task 3 


for (let i = 1; i <= 20; i++) {
    
    if (i % 2 === 0) {

        console.log(i); 
    }
}

// Task 4

let n = 5; 
let result = 1;

for (let i = 1; i <= n; i++) {
    result *= i; 
}

console.log(result); 

// Task 5 

let number = 1234; 
let sum1 = 0; 

while (number > 0) {
    sum1 += number % 10; 
    number = Math.floor(number / 10); 
}

console.log(sum1);

// Task 6

let str = "Hello, World! 123"; 


for (let char of str) {

    if (char.match(/[a-zA-Z]/)) {
        console.log(char); 
    }
}

// Task 7

let maxNumber = parseInt(prompt("Введите максимальное число:"), 10);

if (isNaN(maxNumber) || maxNumber < 1) {

    console.log("Пожалуйста, введите положительное число.");

} else {

    console.log(`Числа от 1 до ${maxNumber}, кратные 3:`);

    for (let i = 1; i <= maxNumber; i++) {

        if (i % 3 === 0) {

            console.log(i);
        }
    }
}

// Task 8 

let str1 = "Наша строка"; 

let length = str1.length; 

console.log("Количество символов в строке:", length); 

// Task 9

let array = [1, 2, 3, 4, 5]; 

for (let element of array) {

    console.log(element); 
}

// Task 10

let array1 = [1, 2, 3, 4, 5]; 

let sum2 = 0; 
let i = 0; 

while (i < array1.length) {

    sum2 += array1[i]; 

    i++; 
}

console.log("Сумма всех элементов массива:", sum2); 

// Task 11

let array2 = [1, -2, 3, 4, 5]; 

let allPositive = array2.every(element => element > 0);

if (allPositive) {
    console.log("Все элементы положительные.");
} else {
    console.log("Есть отрицательные элементы.");
}

// Task 12

let array3 = [1, 2, 3, 4, 5]; 


let sum3 = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


let count = array3.length;


let average = sum3 / count;

console.log("Среднее арифметическое значение:", average); 

// Task 13 

let array4 = [5, 2, 9, 1, 7];

if (array4.length === 0) {

    console.log("Массив пуст.");

} else {

    let minElement = array4[0];

    for (let i = 1; i < array4.length; i++) {

        if (array4[i] < minElement) {

            minElement = array4[i];
        }
    }

    console.log("Наименьший элемент массива:", minElement);
}

// Task 14 

let array5 = [5, 2, 9, 1, 7, 4, 8];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < array5.length; i++) {
    if (array5[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Количество четных элементов:", evenCount);

console.log("Количество нечетных элементов:", oddCount);

// Task 15

let array6 = [5, -2, 9, -1, 7, -4, 8];

array6 = array6.filter(num => num >= 0);

console.log("Массив после удаления отрицательных чисел:", array6);

