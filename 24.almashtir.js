function almashtirish(a, b, c) {
  let d = b;
  let e = a;
  a = c;
  b = e;
  c = d;
  console.log(a, b, c);
}
almashtirish(5, 10, 15);
