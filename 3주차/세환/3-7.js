// 동기 & 비동기
/* 동기적 방식 : 스레드에서 a -> b -> c 순서대로 실행 
 문제점 : 오래걸리는 작업이 있을 경우 작업 효율이 낮아짐 
 js = 싱글스레드 방식으로 작동

 비동기적 방식 : 여러개의 작업을 동시에 실행 , -> 함수 호출할떄 콜백함수를 붙여서 비동기 처리의 결과 전달  


 자바스크립트의 작동 방식 : Heap 과 Call stack이 존재
  main context가 call stack 에 추가
  종료되면 call stack 에서 제거됨.

*/

// 동기적 방식
// function taskA() {
//   console.log("a 작업 끝");
// }
// taskA();

//비동기적 방식
function taska(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000); // 인자 : 콜백, 딜레이타임(ms)
}

function taskb(a, cb) {
  setTimeout(() => {
    const res = 2 * a;
    cb(res);
  }, 1000);
}

function taskc(c, cb) {
  setTimeout(() => {
    const res = c * -1;
    cb(res);
  }, 2000);
}

taska(4, 5, (a_res) => {
  console.log("A Task result : ", a_res);
  taskb(a_res, (b_res) => {
    console.log("B Task result : ", b_res);
    taskc(b_res, (c_res) => {
      console.log("C Task result : ", c_res);
    });
  });
});

console.log("코드 끝");
