// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function doMultiply(a,b,c,d){
    const multiply = a * b * c * d;
    return multiply;
}

const result = doMultiply(4, 3, 2, 2)
console.log(result);

// ----------------------------------------------------------------------------------------

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result

function oddEvenOperation(number){
    if(number % 2 === 1){
        const multi = number * 2;
       return multi;
    }
    else{
        const divide = number / 2;
        return divide;
    }
}
const number = 6;
const result = oddEvenOperation(number);
console.log(result);

// --------------------------------------------------------------------------
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(marks){
    let sum = 0;
    for(const mark of marks){
        sum += mark;
    }
    let ave = sum / marks.length;
    return ave;
}
const marks = [95, 41, 64, 65, 40];
const result = make_avg(marks);
console.log(result);

// --------------------------------------------------------------------------
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(zeros) {
    let sum = 0;
    for(const zero of zeros){
        if(zero === 0) {
            sum += 1;
        }
    }
    return sum;
}

const binaryNumbers = [0, 0, 1, 1, 1, 0, 0, 1, 1, 0,0,0,0,0,0,0,0, 1, 1,0]
const result = count_zero(binaryNumbers);
console.log(result);




// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if(number % 2 === 0){
        return 'even';
    }
    else{
        return 'odd'
    }
}
const checkNumber = 4;
const result =  odd_even(checkNumber);
console.log(result);
