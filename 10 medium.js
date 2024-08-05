
// Task 1 

let str = "Hello, World!";
let reversedStr = "";
let index = str.length - 1;

while (index >= 0) {
    reversedStr += str[index];
    index--;
}

console.log("Перевернутая строка:", reversedStr);

// Task 2

let array = [5, 2, 9, 1, 7];
let minElement = array[0];
let index1 = 1;

while (index1 < array.length) {
    if (array[index1] < minElement) {
        minElement = array[index1];
    }
    index1++;
}

console.log("Наименьший элемент массива:", minElement);

// Task 3

let str1 = "Hello, World!";
let vowels = 'aeiouAEIOU';
let count = 0;
let index2 = 0;

while (index2 < str1.length) {
    if (vowels.includes(str1[index2])) {
        count++;
    }
    index2++;
}

console.log("Количество гласных букв:", count);

// Task 4

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [];
let index3 = 0;
let index4 = 0;

while (index3 < array1.length) {
    combinedArray.push(array1[index3]);
    index3++;
}

while (index4 < array2.length) {
    combinedArray.push(array2[index4]);
    index4++;
}

console.log("Объединенный массив:", combinedArray);

// Task 5

let array3 = [1, 2, 3, 2, 4, 1, 5, 6, 4];
let uniqueArray = [];
let index5 = 0;

while (index5 < array3.length) {
    if (!uniqueArray.includes(array3[index5])) {
        uniqueArray.push(array3[index5]);
    }
    index5++;
}

console.log("Массив после удаления дубликатов:", uniqueArray);

// Task 6
function isPalindrome(array4) {
    let left = 0;
    let right = array4.length - 1;

    while (left < right) {
        if (array4[left] !== array4[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

let array4 = [1, 2, 3, 2, 1]; 
console.log("Массив является палиндромом:", isPalindrome(array4));

// Task 7

function isPalindrome(str2) {
    let left = 0;
    let right = str2.length - 1;

    while (left < right) {
        if (str2[left] !== str2[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

let str2 = "racecar"; 
console.log("Строка является палиндромом:", isPalindrome(str2));

// Task 8
function countWords(str3) {
    let count1 = 0;
    let inWord = false;
    let index6 = 0;

    while (index6 < str3.length) {
        if (str3[index6] !== ' ') {
            if (!inWord) {
                count1++;
                inWord = true;
            }
        } else {
            inWord = false;
        }
        index6++;
    }

    return count1;
}

let str3 = "Hello, world! This is a test.";
console.log("Количество слов в строке:", countWords(str3));

// Task 9

let i = 7;
while (i <= 98) {
    console.log(i);
    i += 7;
}

// Task 10


let n = parseInt(prompt("Введите число N: "), 10);


if (isNaN(n) || n < 1) {
    console.log("Введите корректное положительное число.");
} else {
    let power = 1;

    while (power * 2 <= n) {
        power *= 2;
    }

    console.log("Наибольшая степень двойки, не превосходящая N:", power);
}


