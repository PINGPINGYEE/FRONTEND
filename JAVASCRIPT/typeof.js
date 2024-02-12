import getType from "./getType";

const PI = 3.141592
let str = PI.toFixed(2);
console.log(str);
console.log("--typeof--");
console.log(typeof "hello, world!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof PI);
console.log(typeof str);
str = parseInt(str);
console.log(typeof str);

console.log("--getType--");
console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));