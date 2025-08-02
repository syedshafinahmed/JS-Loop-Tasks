let str = "A quick brown fox jumped over a lazy dog";
str = str.toLowerCase();
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
for(let j = 0; j <= str.length; j++){
    if(str[j]==='a'){
        a++;
    }
    if(str[j]==='e'){
        e++;
    }
    if(str[j]==='i'){
        i++;
    }
    if(str[j]==='o'){
        o++;
    }
    if(str[j]==='u'){
        u++;
    }
}

if((a > 0) && (e > 0) && (i > 0) && (o > 0) && (u > 0)){
    console.log("Contains all the vowels!");
}
