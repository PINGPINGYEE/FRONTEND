// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7;

double();

function double() {
  console.log(a*2);
} // 호이스팅

arrowDouble = x => x*2;
console.log(arrowDouble(a)); // 화살표 함수

(function () {
  console.log(a*2);
} ()) // IIFE