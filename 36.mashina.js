function mashina(mashina1, mashina2, S, T) {
  let masofa1 = mashina1 * T;
  let masofa2 = mashina2 * T;
  let oraliq;
  if (masofa2 > masofa1) {
    oraliq = masofa2 - masofa1;
  } else {
    oraliq = masofa1 - masofa2;
  }
  if (oraliq > S) {
    console.log(oraliq - S);
  } else {
    console.log(S - oraliq);
  }
}
mashina(50, 40, 1, 3);
