function monkeyTrouble(aSmile, bSmile){
    if (aSmile && bSmile)
       return true;
     else if (!aSmile && !bSmile)
       return true;
     else
       return false;
}
let result =   monkeyTrouble(true , true);
console.log(result);