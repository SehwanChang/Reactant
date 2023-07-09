// 삼항연산자 연습

let a = -5;
a >= 0 ? console.log("양수") : console.log("음수");
// 조건문 ? 참 : 거짓

let b = [];
b.length == 0 ? console.log("빈배열") : console.log("빈배열 아님");

let c = [2, 5];
const arrayStatus = c.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let d; //undefined 상태
const result = d ? true : false;
console.log(result);

/* 학점 계산 프로그램 */
// 90점 이상 a+
// 50점 이상 b+
// 둘다 아니면 F
let score = 30;
score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");
