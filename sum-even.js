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