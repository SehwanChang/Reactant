// 비 구조화 할당

let arr = ["one", "two", "three"];

let [first, second, third] = ["one", "two", "three"];
console.log(first, second, third, (fourth = "4"));

let a = 20;
let b = 30;
[a, b] = [b, a];
console.log(a, b);

let object = { one: "one", two: "two", three: "three", name: "장세환" }; // 키값으로 정렬
let { name: myname, one, two, three } = object;

console.log(myname, one, two, three);
