function triangle(a, b) {
  let c = Math.sqrt(a ** 2 + b ** 2);
  let p = a + b + Math.round(c);
  console.log(`c = ${c} and p = ${p}`);
}
triangle(5, 2);
