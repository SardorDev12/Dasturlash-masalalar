function uchburchak(arr1, arr2, arr3) {
  // tomonlarni hisoblash
  const AB = Math.sqrt(
    Math.pow(arr2[0] - arr1[0], 2) + Math.pow(arr2[1] - arr1[1], 2)
  ).toFixed(2);
  const BC = Math.sqrt(
    Math.pow(arr3[0] - arr2[0], 2) + Math.pow(arr3[1] - arr2[1], 2)
  ).toFixed(2);
  const AC = Math.sqrt(
    Math.pow(arr3[0] - arr1[0], 2) + Math.pow(arr3[1] - arr1[1], 2)
  ).toFixed(2);
  //   peremetrini hisoblash
  const P = (+AB + +BC + +AC) / 2;
  //   yuzini hisoblash
  const S = Math.sqrt(P * (P - AB) * (P - BC) * (P - AC));
  console.log(
    `AB = ${AB}, BC = ${BC}, AC = ${AC}, P = ${P.toFixed(2)}, S = ${S.toFixed(
      2
    )}`
  );
}

uchburchak([1, 2], [3, 4], [5, 1]);
