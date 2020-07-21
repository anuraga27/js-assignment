var numbers = [5, 32, 43, 4];
var odd = numbers.filter(function(n) {
  return n % 2 !== 0;
});
let odd = numbers.filter(n => n % 2 !== 0); // can be shortened to (n => n % 2)
Math.pow(numbers, 3);