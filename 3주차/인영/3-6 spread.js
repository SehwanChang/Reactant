// spread 연산자 사용 예..

const bestfriends = ["정인영", "정해영", "김정후"];
const friends = ["노선재", ...bestfriends];

console.log(friends);

const 선형대수학 = {
  학교: "서강대학교",
  학과: "수학과",
  학점: "A+",
};
const 대학수학 = {
  ...선형대수학,
  학점: "A0",
};

console.log(대학수학);
