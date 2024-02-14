const str = `
010-1234-5678
theabcdef@abc.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown for jumps over the lazy dog.
abbcccddd
`

// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp));