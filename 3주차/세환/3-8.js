// promise : 콜백 지옥을 해결하기 위해서 사용하는 객체 (비동기 처리를 돕는 객체)
/* 

    pending -> fulfill : resolve (해결)
    pending -> rejected : reject (거부)
    then , catch 로 이용 가능

*/

function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number == "number") {
      resolve(number >= 0 ? "양수" : "음수"); //성공 ->resolve
    } else {
      reject("주어진 값이 숫자형이 아님");
      //실패 ->reject
    }
  }, 2000);
}

// isPositive(
//   [],
//   (res) => {
//     console.log("성공적으로 수행됨 :", res);
//   },
//   (err) => {
//     console.log("실패 하였음 : ", err);
//   }
// );

// promise 사용한 비동기 처리

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number == "number") {
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수"); //성공 ->resolve
      } else {
        reject("주어진 값이 숫자형이 아님");
        //실패 ->reject
      }
    }, 1000);
  };
  const asyncTask = new Promise(executor); // promise 객체 생성
  return asyncTask; // promise 반환 = 비동기 작업 후 그 결과를 promise 로반환
}

const res = isPositiveP(101);
res
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

/* 콜백 지옥 예시 */
// taskA(3, 4, (a_res) => {
//   console.log("task A : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("task B : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C : ", c_res);
//     });
//   });
// });

const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("A Result : ", a_res);
  return taskB(a_res);
});
console.log("hi");
bPromiseResult
  .then((b_res) => {
    console.log("B Result : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C Result : ", c_res);
  });
