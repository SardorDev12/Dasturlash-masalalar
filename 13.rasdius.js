const P = 3.14;
function radius(r1, r2) {
  if (r1 > r2) {
    let s1 = r1 * P;
    let s2 = r2 * P;
    console.log(`Birinchisining yuzi = ${s1}, ikkinchisining yuzi ${s2}`);
    let s3 = s1 - s2;
    console.log(s3);
  } else {
    console.log("r1 r2 dan katta bo'lishi kerak.");
  }
}
radius(2, 3);
