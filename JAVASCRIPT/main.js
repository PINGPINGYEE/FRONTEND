let count = 0;
let timer = 0;
let loadArray = [];

for (let i = 0; i < 50; i++) loadArray[i] = '-';
const h1El = document.querySelector('#message');
const h1El2 = document.querySelector('#time');
const h2El = document.querySelector('#ment');

let loadTextNode = document.createTextNode(loadArray.join(''));
let endTextNode = document.createTextNode(' status: connected');
let timerTextNode = document.createTextNode(`Time: ${timer.toFixed(2)}ms`); // 타이머 초기값 설정

// h1El과 h1El2에 텍스트 노드 추가
h1El.appendChild(loadTextNode);
h1El2.appendChild(timerTextNode);

const onlineStatus = document.createElement('span'); // 상태 표시를 위한 span 요소 생성
onlineStatus.textContent = '    ●'; // 동그라미 점 추가
onlineStatus.style.color = 'green'; // 초록색으로 설정
onlineStatus.style.fontSize = '10px'; // 점의 크기 조절
onlineStatus.style.marginRight = '5px'; // 텍스트와의 간격 조절


const loadInterval = setInterval(() => {
  loadArray[count] = '*';
  loadTextNode.data = loadArray.join('');
  timer += 0.0001;
  timerTextNode.data = `Time: ${timer.toFixed(4)}ms`; // 타이머 업데이트
  count++;
  if (count === loadArray.length) {
    clearInterval(loadInterval);
    const br1 = document.createElement('br'); // <br> 요소 생성
    const br2 = document.createElement('br'); // <br> 요소 생성
    const br3 = document.createElement('br'); // <br> 요소 생성
    const br4 = document.createElement('br'); // <br> 요소 생성
    const br5 = document.createElement('br'); // <br> 요소 생성
    h2El.appendChild(endTextNode); // 연결 성공 메시지 추가
    h2El.appendChild(onlineStatus);
    h2El.appendChild(br1); // <br> 요소 추가하여 줄바꿈
    h2El.appendChild(document.createTextNode(`time: ${timer.toFixed(3)}ms`)); // 타이머 최종 값 추가
    h2El.appendChild(br4);
    const typeText = document.createTextNode('access_type: ');
    const typeTextSpan = document.createElement('span');
    typeTextSpan.textContent = 'assistant';
    typeTextSpan.style.color = 'black';
    h2El.appendChild(typeText);
    h2El.appendChild(typeTextSpan);
    h2El.appendChild(br5);
    const serverText = document.createTextNode('sys_server: ');
    const serverTextSpan = document.createElement('span');
    serverTextSpan.textContent = 'inner-55476::jp=`5';
    serverTextSpan.style.color = 'black';
    h2El.appendChild(serverText);
    h2El.appendChild(serverTextSpan);
    h2El.appendChild(br2);
    // 'IP Address:' 메시지와 'hidden' 색상 변경
    const ipAddressText = document.createTextNode('ip_address: ');
    const hiddenTextSpan = document.createElement('span'); // 'hidden'을 위한 span 요소
    hiddenTextSpan.textContent = 'ACCESS-DENIED';
    hiddenTextSpan.style.color = 'red'; // 글자 색상을 변경할 색상 지정
    // 'IP Address:'와 'hidden' 메시지 추가
    h2El.appendChild(ipAddressText);
    h2El.appendChild(hiddenTextSpan);
    h2El.appendChild(br3);
    const policyText = document.createTextNode('policy: ');
    const openTextSpan = document.createElement('span');
    openTextSpan.textContent = 'all-standards';
    openTextSpan.style.color = 'brown';
    h2El.appendChild(policyText);
    h2El.appendChild(openTextSpan);
  }
}, 15);
