const car = {
  color: 'black',
}

car.color = 'green';

car.power = function() {
  console.log('Engine power: 200hp');
};

console.log(car);
car.power();

const addFruits = (pears, apples) => pears + apples;
console.log(addFruits(1,2));

const greetTerminal = (name) => {
  if(name === 'Marko') {
    console.log('Hello, ' + name);
  } else {
    console.log('There is no such name in the payment terminal');
  }
}
greetTerminal('Marko');
greetTerminal('Max');

const calculateType = (arg) => console.log('Argumet type: ' + typeof(arg));
calculateType('test');
calculateType(1);

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(6));
