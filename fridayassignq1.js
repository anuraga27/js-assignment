let m = [[0, 'fizz'], ['buzz', 'fizzbuzz']];
for (let i = 0; i < 100; i++) {
  let x = +(i % 3 === 0);
  let y = +(i % 5 === 0);
  if (x + y) {
    console.log(i, m[y][x]);
  }
}