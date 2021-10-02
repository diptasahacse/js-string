var str = 'Bangladesh';

console.log(str.substr(3)); 
console.log(str.substr(3,5)); 
console.log(str.substr(3,0)); // '' > length is 0 that means it will return empty string
console.log(str.substr(3,-5)); // '' > length can not be less than 0 that's why it will print empty string 
console.log(str.substr(5,10)); // adesh > if length is greater than the length of 5 index to last index then it will return 5 to rest of the string
console.log(str.substr(-3,5)); // 'esh' > cut the string from last 3rd index to rest
console.log(str.substr(12,5)); // '' > for the positive start value if index is not available in main string then it will return empty string
console.log(str.substr(-11,3)); // Ban > if the main string length is n and start index is set -(grater than n) then it will be -n
console.log(str.substr(12)); // '' => (for positive not found start value) 12 index is not present that's why it will return empty
console.log(str.substr(-12)); // Bangladesh => (for negative not found start value)-12 is not found that's why it will set -10

