function plusMinus(arr){
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for(const num of arr){
        if(num > 0){
            positive ++;
        }
        else if(num < 0){
            negative++;
        }
        else{
            zero++;
        }
    }
    let positiRatio = positive / arr.length;
    let negativeRatio = negative / arr.length;
    let zeroRatio = zero / arr.length;
    
    
    console.log(positiRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr)

// task 2
function arrayDiff(a, b) {
  let count = [];
  for(const num of a){
    if(!b.includes(num)){
      count.push(num)
    }
  }
  console.log(count)
  
}
arrayDiff([1, 2], [1])



// 
function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num));
}

console.log(arrayDiff([1, 2], [1]));       
console.log(arrayDiff([1, 2, 2, 3], [2])); 


// walkApp
function dailyWalk(walk){
    if(walk.length > 10){
        return false
    }
    else{
        let northSouth = 0;
    let eastWest = 0;

    for(const dir of walk){
        switch(dir){
            case 'n':
                northSouth ++;
                break;
            case 's':
                northSouth--;
                break;
            case 'e':
                eastWest++;
                break;
            case 'w':
                eastWest--;
                break;     
        }
    }
    return northSouth === 0 && eastWest === 0;
    }
    
}
const walkArr = ['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'n', 's']
const getWalk = dailyWalk(walkArr);
console.log(getWalk)
// problem


// function openOrSenior(data){
    
//     let sum = 0;
//     for(const age of data ){
//         for(const a of age){
//             sum += a;
//         }
//     }
    
//     let storePerson =[];
//     if(sum < 50){
//         storePerson.push("Open");
//     }
//     if(sum > 50){
//         storePerson.push("Senior")
//     }
    
//     return storePerson;
// }
// const age =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
// const getarr = openOrSenior(age);
// console.log(getarr)