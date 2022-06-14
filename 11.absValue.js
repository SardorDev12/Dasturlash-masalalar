function absValue(a, b) {
  let sum = a + b;
  let product = a * b;
  let absVala = Math.abs(a);
  let absValb = Math.abs(b);
  console.log(
    `sum = ${sum}, product = ${product} and abs of a and b are ${absVala} and ${absValb}`
  );
}
absValue(1, 2);
