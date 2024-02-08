let person = {
  name: "whois",
  age: 85,
  isTrue: true,
  number: "010-4795-3363"
};

let dontKnow = '3214';
let defNum = `010-4462-${dontKnow}`;
dontKnow = '3265';

function output() {
  console.log(person.name);
  console.log(person.age);
  return 123;
}

let outputing = output();

output();
console.log(output);