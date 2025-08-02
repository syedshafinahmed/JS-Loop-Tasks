let str = "aaaAA";
let counta = 0;
let countA = 0;
for(let i = 0; i <= str.length; i++){
    if(str[i]==='a'){
        counta++;
    }
    if(str[i]==='A'){
        countA++;
    }
}
console.log(counta);
console.log(countA);