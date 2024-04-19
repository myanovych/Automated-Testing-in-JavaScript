let numVal = 3;
let strVal = 'hello'
let boolVal = true;

// Addition 
console.log('\nAddition:')
console.log(strVal + boolVal);
console.log(strVal + numVal);
console.log(numVal + boolVal);

// Multiplication
console.log('\nMultiplication:')
console.log(strVal * boolVal);
console.log(strVal * numVal);
console.log(numVal * boolVal);

// Division
console.log('\nDivision:')
console.log(strVal / boolVal);
console.log(strVal / numVal);
console.log(numVal / boolVal);

// Explicit Conversion
console.log('\nExplicit Conversion:')
console.log(Number(strVal));
console.log(String(numVal)); 
console.log(Boolean(strVal));