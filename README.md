# FRONTEND-STUDY

### JS 공부 시 npm 실행 방법
1. node.js 설치
2. nvm-windows 구글 검색 후 첫 링크
3. 스크롤을 내려 Download now 클릭
4. nvm-setup.zip 다운
5. nvm 설치
6. npm init -y
7. npm install parcel-bundler -D
8. "scrpit" 내 "test" 부분을 지우고 "dev": "parcel index.html", "build": "parcel build index.html" 작성
9. index.html 생성
10. npm run dev로 실행

### VUE 공부 시 vue 실행 방법(추천 확장자 vetur)
1. vscode terminal에서 npm install -g @vue/cli
2. 설치 후 vue create [파일명]
> PC가 Vue 명령어를 인식 못할 시
>   1. Windows PowerShell을 관리자로 실행
>   2. Get-ExecutionPolicy 명령어로 실행 정책 체크(Restricted)
>   3. Set-ExecutionPolicy RemoteSigned 명령어로 실행 정책 변경
>   4. Y를 입력하여 동의
>   5. Get-ExecutionPolicy 명령어로 실행 정책 변경 체크
3. 화살표 키보드로 vue 버전 선택(vue3 추천)
4. cd를 통해 프로젝트 폴더 접근
5. code . -r 명령을 통해 코드 접근
>> npm run dev시 실행이 안될 시
>> * package.json가 문제일 경우
>>   1. script가 dev인지 확인해보기
>> * version이 문제일 경우
>>   1. package.json 접근
>>   2. dev를 node --openssl-legacy-provider node_modules/webpack-dev-server/bin/webpack-dev-server.js --mode development로 script 수정
>> * export 'createElementBlock' (imported as '_createElementBlock') was not found in 'vue'가 오류로 뜰 시
>>   1. npm i vue@next 명령어 실행
