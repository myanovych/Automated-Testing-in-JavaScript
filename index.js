try {
  console.log(a); 
  let a = 3;
} catch {
  console.log('let must be declared before use'); 
}

try {
  const divisor = 0;
  if (divisor === 0) {
      throw new Error('cannot be divided by zero');
  }
  1 / divisor;
} catch (err) {
  console.error(err.message); 
}
