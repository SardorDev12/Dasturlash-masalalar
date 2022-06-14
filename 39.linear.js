function linear(a, b, c) {
  let d = b * b - 4 * a * c;
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  console.log(`discriminant = ${d}, root 1 = ${x1} and root2 = ${x2}`);
}
linear(1, 6, 5);
