// Check whether a string is palindrome or not.

let str="madam";
let new_str="";
for(let i=str.length-1 ; i>=0 ;i--)
{
new_str=new_str+str[i];
}

let x = str==new_str?"It is a Palindrome":"It is not a Palindrome";

console.log(x)