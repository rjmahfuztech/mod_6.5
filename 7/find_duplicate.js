const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// Manually Removing Duplicate
let newArr = [];
for (const num of numbers) {
  if (newArr.length > 0) {
    let check = false;
    for (const num2 of newArr) {
      if (num2 === num) check = true;
    }
    if (!check) newArr.push(num);
  } else {
    newArr.push(num);
  }
}
console.log(newArr);

// Using Set method
let uniqueArray = [...new Set(numbers)];
console.log(uniqueArray);
