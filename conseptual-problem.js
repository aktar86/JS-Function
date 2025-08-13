// task 1
function sum(a, b){
    let sum = a + b;
    let mul = a * b;
    let addSM = sum + mul;
    return addSM;
}

// let a = 2;
// let b = 3;
let getSum = sum(4, 5);
console.log(getSum);

// task 2

function sumOfArray(arr){
    let sum = 0;
    if(Array.isArray(arr) == false){
        return 'Invalid';
    }
    for(const num of arr){
        if(typeof num !== 'number'){
            return 'Invalid'
        }
        sum += num;
    }
    return sum;
}
let array = [2, 3, 4, 5];
let getSumOfArray = sumOfArray(array);
console.log(getSumOfArray);

// task 3
function countVowels(str){
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(const char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
let strr =  'Data';
let getCountVowels = countVowels(strr)
console.log(getCountVowels)

// task 4
function cashOut(money){
    let getback = money * 1.75 / 100;
    if( money < 0){
        return "Invalid";
    }
    else if( money === 0 ){
        return money;
    }
    else if(typeof money !== 'number'){
        return "Invalid";
    }
  return getback ;
}
let getDiscount = cashOut(2000);
console.log(getDiscount)



// task 5

function validContact(contact){
    // string na hoy
    if(typeof contact !== 'string'){
        return "Invalid"
    }
    else if(contact.includes('01') && contact.length === 11){
        return true;
    }
    else{
        return false;
    }
}
const phoneNumber = '01728456744';
const getValidNumber = validContact(phoneNumber);
console.log(getValidNumber);

// task 6 admission Success 
function willSuccess(marks){
    let pass = 0;
    let fail = 0;
    if(Array.isArray(marks) !== true ){
        return "Invalid";
    }
    for(const mark of marks){
        if(mark < 50){
            fail++;
        }
        else{
            pass++;
        }
    }
    if(pass > fail){
        return true;
    }
    else{
        return false;
    }
}
const marks = [60, 70, 44, 45, 30];
const getSuccess = willSuccess(marks);
console.log(getSuccess)
