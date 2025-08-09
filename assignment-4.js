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