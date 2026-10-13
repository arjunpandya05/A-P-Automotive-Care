// Ex64
const numbers = new Float32Array(4);
numbers[0] = 1.5;
numbers[1] = 2.75;
numbers[2] = 3.14;
numbers[3] = 42;
console.log(numbers);

const regularArray = [1.5, 2.75, 3.14, 42];
console.log(regularArray);
const floatArray = new Float32Array(regularArray);
console.log(floatArray);





