// *** 콜백 함수 ***

function checkMood(mood, goodCallback, badCallback) {
    if (mood === 'good') {
        // 기분 좋을 때 하는 동작
        goodCallback();
    }
    else {
        // 기분 안 좋을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}

function sing() {
    console.log("ACTION :: SING");
}

function dance() {
    console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);

//
//
//
// *** 객체 ***

// 객체 생성 방법 (1)
let person = new Object(); // new라는 키워드를 붙이면 생성할 수 있다.

// 객체 생성 방법 (2) - 객체 리터럴 방식
let person = {};

let person = {
    key: "value", // property, 객체 property라고 부름. 데이터라고 생각해도 됨.
    key1: "value2"
};

console.log(person.key1); // property에 접근하는 방법

//

let person = {
    name: "김민지",
    age: 25
}

console.log(getPropertyValue("name")) // 김민지

function getPropertyValue(key) {
    return person[key];
}

// property 추가, 수정, 삭제

person.location = "한국";
person["gender"] = "여성";

delete person["name"]; // 근데 이런 방법보다는
person.name = null; // 이렇게 하는 걸 추천. 메모리를 비우기 위해.

//
//
//
// *** 배열 ***

// 배열 만드는 방법
let arr = [];

// 배열의 내장함수
//
// 1. 모든 요소를 순회하며 *2 (forEach)
const arr = [1, 2, 3, 4];

arr.forEach(function(elm) {
    console.log(elm * 2); // 따로 배열로 저장이 된 건 아님. 그냥 출력한 것.
});

//
// 2. 모든 요소를 순회해서 새 배열 만들기 (map)
const arr = [1, 2, 3, 4];
const newArr = arr.map((elm) => {
    return elm * 2;
});
console.log(newArr);

//
// 3. 주어진 배열에 이 값이 존재하느냐 (includes)
const arr = [1, 2, 3, 4];
let number = 3;

console.log(arr.includes(number));