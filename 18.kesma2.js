function kesma(a, b, c) {
  if (a < c && c < b) {
    console.log((a + b) * (b + c));
  } else {
    console.log("c nuqta a va b nuqtalar orasida bo'lishi kerak");
  }
}
kesma(5, 9, 6);
