function monthlySavings(monthlyEarn, livingCost) {
  if (typeof monthlyEarn !== "object" || typeof livingCost !== "number")
    return "invalid input";
  else {
    let total = 0;
    for (let money of monthlyEarn) {
      if (money >= 3000) {
        const tax = (money * 20) / 100;
        money -= tax;
        total += money;
      } else total += money;
    }
    return total - livingCost;
  }
}
const ar1 = [1000, 2000, 3000]; // 5400
const ar2 = [1000, 2000, 2500]; // 5000
const ar3 = [900, 2700, 3400]; // 10000
const ar4 = [900, 2700, 3400]; // 100
// input here
const savings = monthlySavings(100, ar3);

if (typeof savings !== "string" && savings < 0) console.log("earn more");
else console.log(savings);
