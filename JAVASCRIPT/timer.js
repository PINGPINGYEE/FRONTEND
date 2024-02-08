// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// let cnt = 0;

// setTimeout(function () {
//     console.log("TimeOut!1");
// }, 2000); // 1000ms -> 1초

// setTimeout(() => {
//   console.log("TimeOut!2");
// }, 1000);

// setInterval(function () {
//   if(cnt<10) {console.log("Interval1!"); cnt++;}
// }, 500)

// setInterval(() => {
//   if(cnt<10) {console.log("Interval2!"); cnt++;}
// }, 1000)

const timer = setTimeout(() => {
  console.log("SettimeOutClear!");
}, 3000)

const h2El = document.querySelector('h2');
h2El.addEventListener('click', () => {
  clearTimeout(timer);
});
// defer 잘 생각해주기

const timerInterval = setInterval(() => {
  console.log("setIntervalClear!");
}, 3000)

const h3El = document.querySelector('h3');
h3El.addEventListener('click', () => {
  clearInterval(timerInterval);
});
// defer 잘 생각해주기