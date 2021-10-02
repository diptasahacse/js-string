var str = 'Bangladesh';
/*
slice() syntax:

varName.slice(start,end); //start is required

*/
console.log(str.slice(3)); // gladesh => slice from 3 index to last index
console.log(str.slice(3,6)); // gla => slice from 3 index to before 6 index
console.log(str.slice(3,2)); // '' => slice is not possible from 3 index to 2 index that's why it will return empty string
console.log(str.slice(-3)); // esh => slice from last -3 index to last index
console.log(str.slice(-3,8)); // e => slice from last 3rd index to before 8 index
console.log(str.slice(-5,-2)); // ade => slice from last 5th index to before last 2nd index
console.log(str.slice(-0)); // Bangladesh => -0 will convert to 0 then slice
console.log(str.slice(3,3)); // ''
console.log(str.slice(12)); // '' => (for positive not found start value) 12 index is not present that's why it will return empty
console.log(str.slice(-12)); // Bangladesh => (for negative not found start value)-12 is not found that's why it will set -10
console.log(str.slice(-2, 5)); // '' => nothing will return because always should slice from left to right.
