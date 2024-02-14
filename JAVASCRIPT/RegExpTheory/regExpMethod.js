let str = `
010-1234-5678
theabcdef@abc.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

// 생성자 방식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식
const regexp = /fox/gi

// 플래그
const regexp2 = /hi/gi
console.log(regexp.test(str));
console.log(regexp2.test(str));
str = str.replace(regexp, 'AAA');
console.log(str);

const regexp3 = /the/g
console.log(str.match(regexp3));

console.log(str.match(/\.$/gim));

// 패턴
console.log(
  str.match(/d$/gm)
);

console.log(
  str.match(/^t/gim)
);

console.log(
  str.match(/./g)
);

console.log(
  str.match(/http/g)
);

console.log(
  str.match(/h..p/g)
);

console.log(
  str.match(/quick|dog/g)
);

console.log(
  str.match(/quick|dog/) // quick만 찾음(먼저 찾아지는 것)
);

console.log(
  str.match(/https?/g)
);

console.log(
  str.match(/https?/g)
);

console.log(
  str.match(/d{2}/g)
);

console.log(
  str.match(/d{2,}/g)
);

console.log(
  str.match(/\w{2,3}/g) // \w는 알파벳을 포함한 모든 숫자
);

console.log(
  str.match(/\b\w{2,3}\b/g) // \b는 경계를 두는 것
);