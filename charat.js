var str = "Bangladesh";
console.log(str.charAt(2)); // n
console.log(str.charAt(str.length -1)); // h
console.log(str.charAt(-2)); // charAt method does not support -ve value that's why return nothing or empty string
console.log(str.charAt(11)); // if index is not found then return nothing or empty string




console.log(str[2]); // n
console.log(str[-2]); // in array style, if index is not found then return undefined
console.log(str[15]); // in array style, if index is not found then return undefined
