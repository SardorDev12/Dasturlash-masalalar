const P = 3.14;
function radian(radian) {
  if (radian <= 2 * P) {
    let degree = radian / (P / 180);
    console.log(degree);
  } else {
    console.log("Invalid value");
  }
}
radian(3);
