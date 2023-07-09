let a = null;
if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

/* 빈 문자열 : false 로 인식 */

const getName = (person) => {
  if (!person) {
    // undefined 와 null = falsy
    return "객체가 아님";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);
