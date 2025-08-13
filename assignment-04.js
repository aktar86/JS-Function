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


