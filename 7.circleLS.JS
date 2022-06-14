const P = 3.14;
function circleLS(r) {
  const L = 2 * P * r;
  const S = P * r ** 3;
  console.log(`L = ${L} and S = ${S}`);
}
circleLS(2);
