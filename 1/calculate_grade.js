// 0 to 39 = C
// 40 to 59 = B
// 60 to 69 = A-
// 70 to 79 = A
// 80 to 100 = A+

// Check Result
const result = 55;

if (result < 0) console.log("Failed");
else if (result >= 0 && result < 40) console.log("Tumi C grade paico");
else if (result >= 40 && result < 60) console.log("Tumi B grade paico");
else if (result >= 60 && result < 70) console.log("Tumi A- grade paico");
else if (result >= 70 && result < 80) console.log("Tumi A grade paico");
else if (result >= 80 && result <= 100) console.log("Tumi A+ grade paico");
else console.log("Invalid Input");
