function prlpd(a, b, c) {
  const V = a * b * c;
  const S = 2 * (a * b + b * c + a * c);
  console.log(`V = ${V} and S = ${S}`);
}
prlpd(5, 2, 3);
