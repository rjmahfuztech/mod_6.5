const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// Manually find max
let maxNumber = 0;
for (const num of numbers) {
  if (maxNumber < num) maxNumber = num;
}
console.log(maxNumber);

// Using Math.max()
const maxNum = Math.max(...numbers);
console.log(maxNum);
