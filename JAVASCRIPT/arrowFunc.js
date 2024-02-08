// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2;
}
console.log('double:', double(7));

const doubleArrow = (x) => {
  return x * 2;
}
console.log('doubleArrow:', doubleArrow(7));

const doubleArrowShorten = (x) => x * 2;
console.log('doubleArrowShorten:', doubleArrowShorten(7));

const doubleArrowMoreShorten = x => x * 2;
console.log('doubleArrowMoreShorten:', doubleArrowMoreShorten(7));

const doubleArrowObject = x => ({ name: 'dknw', age: '20' });
console.log('doubleArrowObject', doubleArrowObject(7));
// 객체형은 {}을 쓰는데 이 기호가 함수의 선언과 겹치게 되어 ()를 앞에 붙힘