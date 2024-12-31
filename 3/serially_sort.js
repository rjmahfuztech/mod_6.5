const arr = [
  10, 5, 20, 19, 12, 4, 2, 1, 3, 7, 6, 9, 8, 11, 13, 14, 15, 17, 16, 18,
];

console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);

// Descending order sort
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);
