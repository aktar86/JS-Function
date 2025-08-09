// problem one solve
function cubeNumber(number) {
    let cube = number * number * number;
    return cube;
}

const result1= cubeNumber("6");
console.log(result1);

// problem two solve
function matchFinder(string1, string2) {
    if(string1.includes(string2)){
        return true;
    }
    return false;
}
const result2 = matchFinder('JavaScript', 'Code');
console.log(result2)

// problem three solve
function sortMaker(numArry){
    let storeArrayElement = [];
    for(const num of numArry){
        if(num < 0){
            return "Invalid Input";
        }
        storeArrayElement.push(num)
    }
    // check if both element are same
    // take help from AI
    if(storeArrayElement[0] === storeArrayElement[1]){
        return "equal"
    }
    // sort in decending order
    let sortedArray = storeArrayElement.sort(function(a, b) {return b - a});
    return sortedArray;
}
const numArry = [4, 4]
const result3 = sortMaker(numArry);
console.log(result3)

// problem 4
function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__'

    return `${street},${house},${society}`;

}
const object = {street: 10, house: '15A', society: 'Earth Perfect'};
const result4 = findAddress(object);
console.log(result4)