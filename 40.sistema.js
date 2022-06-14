function sistema(arrA, arrB, arrC) {
  let x, y, D;
  D = arrA[0] * arrB[1]; // - arrA[1] * arrB[0];
  console.log(D);
  x = (arrC[0] * arrB[1] - arrC[1] * arrB[0]) / D;
  y = (arrA[0] * arrC[1] - arrA[1] * arrC[0]) / D;
  console.log(`x = ${x} and y = ${y}`);
}
sistema([5, 2], [3, 8], [8, 4]);
