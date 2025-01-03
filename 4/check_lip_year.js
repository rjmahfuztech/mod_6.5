const isLipYear = 2016;

if ((isLipYear % 4 == 0 && isLipYear % 100 != 0) || isLipYear % 400 == 0)
  console.log("Yes!! Lip Year!");
else {
  console.log("No!! Not a Lip Year!");
}
