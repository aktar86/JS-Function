// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function celciousToFahrenheit(celcious){
     return (celcious * 9/5) + 32;
}
const celcious = 20;
const getFahrenheit = celciousToFahrenheit(celcious);
console.log("Your converted fharenhiet:", getFahrenheit) 

// task 2
function findDuplicate(numbers, find){
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === find){
            count++
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5]
const find = 5;
const result2 = findDuplicate(numbers, find);
console.log( "Total Similar Eliment:", result2)

// Task-3:
// Write a function to count the number of vowels in a string.
function countVowel(str){
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(const char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
const str = " i love you";
const getVowel = countVowel(str);
console.log('Total vowel is:', getVowel);

// task 4
function findLongestWord(str2){
    let strToArray = str2.split(' ')
    let longWord = '';
    for(let i = 0; i < strToArray.length; i++){
        const element = strToArray[i];
        if(element.length > longWord.length){
            longWord = element;
        }
    }
    return longWord;
}
const str2 = 'JavaScript makes programming fun and challenging at the same time';
const getLongestWord = findLongestWord(str2);
console.log("Your Desire Word:", getLongestWord)

// task 5
// Generate a random number between 10 to 20.
const genNumber = Math.floor(10 + Math.random() * 11);
console.log("Your Generated Number:", genNumber)