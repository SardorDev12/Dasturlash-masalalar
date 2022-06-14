function addMultSqr(a, b) {
  let add = a + b;
  let mult = a * b;
  let aSqr = a ** 2;
  let bSqr = b ** 2;
  return `add = ${add}, mult = ${mult}, sqr of a = ${aSqr} and sqr of b = ${bSqr}`;
}
console.log(addMultSqr(2, 5));
