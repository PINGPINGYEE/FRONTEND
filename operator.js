let a = 2;
a = a + 1;
a++;
a += 1;

console.log(a);

const b = 2;
const c = 3;

console.log(b === c);

function isEqual(x, y) {
  return x === y;
}

function isEqualV2(x, y) {
  return x == y;
}

console.log(isEqual(1, 1));
console.log('===', isEqual(1, '1'));
console.log('==', isEqualV2(1, '1'));