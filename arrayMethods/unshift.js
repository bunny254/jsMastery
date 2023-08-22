let numbers = [30, 40];

const length = numbers.unshift(10, 20);

console.log({ length });
console.log({ numbers });


let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

days.unshift(...weekends)

console.log(days);