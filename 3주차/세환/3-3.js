// 단락 회로 평가 : 논리연산자의 특성 이용 (왼쪽 -> 오른쪽) truthy와 falsy 사용할때 유용
//console.log(false && true);
//console.log(true || false);
//console.log(!true);

const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아님";
};
let person = { name: "장세환" };
const name = getName(person);
console.log(name);
