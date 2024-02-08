# DOM API
> Document Object Model, Application Programming Interface

## 개념
- JS에서 HTML을 조작, 관리하는 명령들

## 사용법
- let boxEl = document.querySelector('.box');

## 주의점
- 브라우저가 코드를 위에서 아래로 읽어나가기 때문에 요소를 제대로 찾기 위해서는 defer을 사용하거나 body 태그 내에 해당 요소 뒤에 둬야 한다.
- script 태그는 정보를 뜻하기 때문에 body에 두는 것보다는 defer을 사용하여 head에 두는 것을 추천