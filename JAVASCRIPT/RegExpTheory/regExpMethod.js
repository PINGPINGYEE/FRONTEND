let str = `
010-1234-5678
theabcdef@abc.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
`

// 생성자 방식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식
const regexp = /fox/gi
const regexp2 = /hi/gi
console.log(regexp.test(str));
console.log(regexp2.test(str));
str = str.replace(regexp, 'AAA');
console.log(str);
