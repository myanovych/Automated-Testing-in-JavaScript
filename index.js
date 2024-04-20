// Task 1
const str1 = 'ahb acb aeb aeeb adcb axeb';
const regex1 = /a.b/g;
const matches1 = str1.match(regex1);
console.log(matches1); 

// Task 2
const str2 = '2 + 3 223 2223';
const regex2 = /2 \+ 3/;
const match2 = str2.match(regex2);
console.log(match2[0]); 

// Task 3
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Month is zero-based
const year = currentDate.getFullYear();

console.log('Day:', day);
console.log('Month:', month);
console.log('Year:', year);