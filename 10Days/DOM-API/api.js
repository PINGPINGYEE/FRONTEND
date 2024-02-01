/*
// 1. HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');
// querySelector 같은 경우 먼저 찾은 하나를 반환

// 2. HTML 요소에 적용할 수 있는 메소드!
//boxEl.addEventListener();
// 2개의 인수(Arguments)를 추가 가능!
//boxEl.addEventListener(1, 2);
// 2-1. 첫 번째 인자의 경우 이벤트(Event, 상황)을 나타냄
//boxEl.addEventListener('click', 2);
// 2-2. 두 번째 인자의 경우 핸들러(Event, 실행할 함수)을 나타냄
boxEl.addEventListener('click', function () {
  console.log('Click~!')
});
*/

/*
// HTML 요소(Element) 검색/찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);
*/

/*
const boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('Click~!')
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});
*/

/*
// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
// querySelectorAll의 경우 요소 모두 찾기

console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach(function () {});

// 첫 번째 매개변수(boxEl): 반복 중인 요소.
// 두 번째 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

// 출력!
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
})
*/

/*
// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');

console.log(boxEls);

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
})
*/

/*
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 지정하는 용도
boxEl.textContent = 'WhoIsIt?!';
console.log(boxEl.textContent);
*/

const boxEls = document.querySelectorAll('.box');
let count = 0;
boxEls.forEach(function (boxEl) {
  boxEl.addEventListener('click', function() {
    boxEl.textContent = `Grade is ${count += 1}`;
    console.log(boxEl);
  })
})