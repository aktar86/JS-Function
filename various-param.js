function doDoubleOrTripple(number, doDouble){
    if(doDouble === true){
        const double = number * 2;
        return double;
    }
    else{
        const tripple = number * 3;
        return tripple;
    }
}

const result = doDoubleOrTripple(5, true);
const result2 = doDoubleOrTripple(7, false);
console.log(result);
console.log(result2);


// ---------------------------------------------------------
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

// -----------------------------------------------------------------
function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0 ){
            sum += number;
        }
    }
    return sum;
}

const nums = [4, 6]
const result = sumOfNumbers(nums)
console.log(result)