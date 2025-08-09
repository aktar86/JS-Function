/**
 * 
 *step-1: declare a function
 *step-2: call che3k whether the function is called properly
 *Step-3: set a parameter(s)
 */

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        // const element =  number;
        // sum += Element;
        sum += number;
    }
    return sum;
}
const nums =  [4, 6, 8, 3]
const sum = sumOfNumbers(nums);
console.log('sum of numbers is:', sum);
