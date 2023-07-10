// *** 삼향 연산자 **
// (조건) ? (맞으면 실행되는 코드) : (아니면 실행되는 코드)

// *** 스프레드 연산자 ***

const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocoCookie = {
  ...cookie, // 이거!
  toping: "choco",
};
