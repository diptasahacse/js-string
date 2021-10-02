var str = 'Bangladesh';
/*
substring() syntax:

varName.substring(start,end); //start is required


*/
console.log(str.substring(3)); // gladesh => cut the string from 3 index to last index
console.log(str.substring(3,6)); // gla => cut the string from 3 index to before 6 index
console.log(str.substring(3,2)); // n => if start parameter is greater than it will swap like (3,2) to (2,3) then cut the string according to the parameter (2,3)
console.log(str.substring(-1)); // Bangladesh => if any parameter value is less than 0 then that value will be 0 then calculate
console.log(str.substring(-1,4)); // Bang => in first parameter will 0 then calculate
console.log(str.substring(1,-4)); // B => 2nd parameter is negative that's why that value will be 0 then swap that parameter from (1,0) to (0,1) then calculate
console.log(str.substring(-4,-1)); // '' => if any parameter value is less than 0 then that value will be 0 then calculate
console.log(str.substring(4,4)); // '' => if both parameter is same then it will return empty string
console.log(str.substring(12)); // '' => (for positive not found start value) 12 index is not present that's why it will return empty
