function masofa(arr1, arr2) {
  return Math.sqrt(
    Math.pow(arr2[0] - arr1[0], 2) + Math.pow(arr2[1] - arr1[1], 2)
  );
}
console.log(masofa([2, 3], [5, 2]));
