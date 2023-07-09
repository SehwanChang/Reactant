function isPositive(number) {
    setTimeout(() => {
        if (typeof number === "number") {
            resolve(number>=0?"양수":"음수")
        }
        else {
            PromiseRejectionEvent("주어진 값이 숫자형 값이 아닙니다")
        }
    }, 2000);
}

function isPositiveP(number) {
    const executor = (resole, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number >= 0 ? "양수" : "음수")
            }
            else {
                PromiseRejectionEvent("주어진 값이 숫자형 값이 아닙니다")
            }
        }, 2000);
    };
    const asynctask = new Promise(executor);
    return asynctask
}

const res = isPositiveP(100);

res
    .then((res) => {
        console.log("작업 성공 ", res);
    })
    .catch((err) => {
        console.log("작업 실패 ", err);
    });

// isPositive(
//     10,
//     (res) => {
//         console.log("성공")
//     },
//     (err) => {
//         console.log("실패")
    
//     }

// )

function taskA(a, b, cd) {
    setTimeout(() => {
        const res = a + b;
        cb(res)
    }, 3000)
}

function taskB(a, cd) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}
function taskC(a, cd) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

//callback 지옥
taskA(3, 4, (a_res) => {
    console.log("A: ", a_res);
    taskB(a_res, (b_res) => {
        console.log("B: ", b_res);
        taskC(b_res, (c_res) => {
          console.log("C: ", c_res);
        });
    });
});

//promise 이용한 비동기 처리
function taskA(a, b, cd) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
      //   cb(res);
    }, 3000);
  });
}

function taskB(a, cd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res)
       //   cb(res);
        }, 1000);
    })
  
}
function taskC(a, cd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res)
            //   cb(res);
        }, 2000);
    })
}

//wrong example
taskA(5, 1).then((a_res) => {
    console.log("A: ", a_res)
    taskB(a_res).then((b_res) => {
        console.log("B: ", b_res);
        taskC(b_res).then((c_res) => {
          console.log("C: ", c_res);
        });
    })

})

//가독성 있고 깔끔
taskA(5, 1).then((a_res) => {
    console.log("A: ", a_res);
    return taskB(a_res) //promise return
}).then((b_res) => {
    console.log("B: ", b_res);
    return taskB(b_res);
}).then((c_res) => {
    console.log("C: ", c_res);
});
