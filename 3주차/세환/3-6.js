// 객체 다루기 - 스프레드 연산자 ...
const cookie = {
  base: "cookie",
  madein: "korea",
};

const chocochipcookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberrycookie = {
  ...cookie,
  toping: "blueberry",
};

console.log(blueberrycookie);

const notopingcookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingcookies = ["바나나쿠키", " 블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allcookies = [...notopingcookies, "함정", ...topingcookies];

console.log(allcookies);
