function mashina(car1, car2, S, T) {
  let car1S = car1 * T;
  let car2S = car2 * T;
  let bothS = car1S + car2S;
  console.log(S - bothS);
}
mashina(50, 60, 500, 2);
