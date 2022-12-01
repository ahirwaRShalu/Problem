// Check whether a number is Prime or not

let num = 15;
let count = 0;

for(let i=1;i<=num;i++){
    if(num%i==0){
        count++
    }
}

let x = count==2?"Number is Prime":"Number is not Prime";

console.log(x)

