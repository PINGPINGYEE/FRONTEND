// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

setTimeout(function () {
    console.log("Hello, World!")
}, 2000); // 1000ms -> 1초

setTimeout(() => {
  console.log("Hello, World!")
}, 2000);