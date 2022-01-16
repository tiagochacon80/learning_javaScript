//X = xnuml + (xnum2 / (xnum3 + xnum1))+ 2(xnuml - xnum2) + log64 base 2 
let xnum1 = 3;
let xnum2 = 5;
let xnum3 = 8;
let x = 0;

x = xnum1 + (xnum2 / (xnum3 + xnum1)) + 2 * (xnum1 - xnum2) + Math.log(64)/Math.log(2);

console.log(x);