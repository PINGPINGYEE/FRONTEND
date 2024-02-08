// 콜백(CallBack)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

timeout = () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 3000);
};

timeout();

function timeoutFunc(callback) {
  setTimeout(() => {
    console.log('setTimeout');
    callback();
  }, 3000);
}

timeoutFunc(() => {console.log('Done!');});
