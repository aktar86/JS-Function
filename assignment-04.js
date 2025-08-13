// problem 1
function totalFine( fare ) {
    let extraCharge = 30;
    let totalCharge = fare + ((fare * 20) / 100) + extraCharge;
    if(fare <= 0){
        return "Invalid";
    }
    else if(typeof fare !== 'number'){
        return "Invalid";
    }
    else{
        return totalCharge;
    }
}
// const getFineWithRent = totalFine(200)
// console.log(getFineWithRent)

// problem 2
function  onlyCharacter( str ) {
    if(typeof str !== "string") {
        return "Invalid";
    }
    let character = str.trim().split(" ").join("");
    return character.toUpperCase();

}
// const getCleanStr = onlyCharacter("  h e llo wor   ld")
// console.log(getCleanStr)

// problem 3
function  bestTeam( player1, player2 ) {
    let score1 = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if(typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid";
    }

    if(score1 === score2){
        return "Tie";
    }
    else if(score1 > score2){
        return player2.name;
    }
    else{
        return player1.name;
    }
}

// const getBestTeam = bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 })
// console.log(getBestTeam)


// problem 4
function  isSame(arr1 , arr2 ) {
    if(Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return "Invalid";
    }
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
// const arr = isSame([1, 2, 3] , [1 , 2 , 3]);
// console.log(arr)


// Problem 5
function  resultReport( marks ) {
    if(Array.isArray(marks) === false){
        return "Invalid";
    }

    let totalMarks = 0;
    let pass = 0;
    let fail = 0;

    for(const mark of marks){
        if(mark >= 40){
            totalMarks+= mark;
            pass++;
        }
        else{
            totalMarks+= mark;
            fail++;
        }
    }
    let avg = Math.round(totalMarks / marks.length);
    const result = {};
    result.finalScore = avg;
    result.pass = pass;
    result.fail = fail;

    return result; 
}

const arr = resultReport(100)
console.log(arr)
