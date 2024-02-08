const dkn = () => ({
  firstName: 'dkn',
  lastName: 'dnkt',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
})

// console.log(dkn().getFullName());

const dknLiteral = {
  firstName: 'dkn',
  lastName: 'dnkt',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

// console.log(dknLiteral.getFullName());

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
} // 리터럴 방식

User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
} // prototype 이해

const amy = new User('Amy', 'cousious');
const neo = new User('Neo', 'Smith');
console.log(amy);
console.log(neo);
console.log(amy.getFullName());
console.log(neo.getFullName());

let a = [1, 2, 3];
let judgeIncludes = a.includes(3);
console.log(judgeIncludes);
judgeIncludes = a.includes(4);
console.log(judgeIncludes);