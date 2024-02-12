// ES6 Classes

const firstPerson = {
  name: 'firstPerson',
  normal() { // 축약 가능
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}

firstPerson.normal();
firstPerson.arrow();

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const amy = new User('Amy', 'cousious');
const neo = new User('Neo', 'Smith');
console.log(amy);
console.log(neo);
console.log(amy.getFullName());
console.log(neo.getFullName());
