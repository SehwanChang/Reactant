// *** 문자열 함수 ***

// indexOf
var abc = "I am Iron man";
console.log(abc.indexOf("man")); // 10

// slice
console.log(abc.slice(0, 3)); // 문자열의 일부를 잘라냄

// toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());

// startsWith(), endWith 특정 문자로 시작하는지, 끝나는지 true/false 반환하는 메소드
var efg = "This is my car.";
console.log(efg.startsWith("Th")); // true

//includes
console.log(efg.includes("is")); // true

//
//
//

// *** 배열 ***

var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti[0]); // INFP
console.log(mbti.length); // 3

mbti[3] = "ESFP";
console.log(mbti); // ["INFP", "ENFJ", "INTJ", 'ESFP']

// 덮어쓰기
mbti[2] = "ISTJ";
console.log(mbti[2]); // ISTJ

// 뒤에 붙이기
var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti.push("ESFP", "ISTJ")); // ["INFP", "ENFJ", "INTJ", "ESFP", "ISTJ")]

// 스프레드 문법
var mbti = ["INFP", "ENFJ", "INTJ"];
var newMbti = [...mbti, "ESFP", "ISTJ"];
console.log(newMbti); // ["INFP", "ENFJ", "INTJ", "ESFP", "ISTJ")]

// pop (마지막 요소 제거)
var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti.pop()); // INTJ
console.log(mbti); // ["INFP", "ENFJ"]

// unshift (앞쪽에 붙이기)
var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti.unshift("ESFP", "ISTJ")); // ["ESFP", "ISTJ", "INFP", "ENFJ", "INTJ")

// shift (앞쪽에 있는 요소가 제거되면서 사용자에게 반환됨)
var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti.shift()); // INFP
console.log(mbti); // ["ENFJ", "INTJ"]

// slice 일부/전체 복사
var mbti = ["INFP", "ENFJ", "INTJ"];
console.log(mbti.slice(0, 2)); // 0번째부터 2전까지 // ["INFP", "ENFJ"]
console.log(mbti.slice()); // ["INFP", "ENFJ", "INTJ"];

// join (모든 요소들이 문자열로 반환돼서 출력됨. 기본적으로는 콤마를 사이에 두고)
console.log(mbti.join()); // INFP,ENFJ,INTJ
console.log(mbti.join("*")); // INFP*ENFJ*INTJ

// sort (순서대로 정리해주는)
console.log(mbti.sort()); // ['ENFJ', 'INFP', 'INTJ']
console.log(mbti.sort().reverse()); // ['INTJ', 'INFP', 'ENFJ']

//
//
//

// *** 조건문 ***

//if
if () {
    smth;
} else if {
    smth;
} else {
    smth;
}

// switch, break
var mbti = 'INFP'
var val;

switch (mbti) {
    case 'INFP':
        val = 'INFP';
        break;
    case 'ENFP':
        val = 'ENFP';
        break;
    case 'ENTP':
        val = 'ENTP';
        break;
    default:
        val = '유효한 값이 아닙니다.' // 위의 값이 없을 때 실행되는 디폴트 로직
}

//for, while
// for, while () {
//     ;
// }

//
//
//
// *** 에러 ***

try {
    // 에러가 발생할 가능성이 있는 코드

} catch (error) {
    // 에러가 발생했을 때 실행되는 코드
} finally {
    // 에러 발생 여부와 상관없이 무조건 실행
}


try {
    // 에러가 발생할 가능성이 있는 코드
    throw new Error("에러"); // 임의로 에러 터뜨리기

} catch (error) {
    // 에러가 발생했을 때 실행되는 코드
} finally {
    // 에러 발생 여부와 상관없이 무조건 실행
}

//
//
//
// *** 함수 ***

function multiply(a, b) {
    return a * b; // 반환
}
// 함수를 사용
console.log(multiply(10, 5)); // 50

//
var multiply = function (a, b) {
    return a * b;
};

console.log(multiply(10, 5));

//
//
//
// *** 변수 키워드: var, let, const ***

const // 변하지 않는 상수

//
//
//
// *** 화살표 함수 *** // 함수 선언식이 아닌 표현식이라고 한다!
// 함수 선언식은 호이스팅이 이루어져서 밑에 써도 위에로 가서 읽혀지게 된다. 표현식은 밑에 쓰면 밑에.
let plus = (a, b) => {
    return a + b;
};
console.log(plus(2, 5));

// 더 간략하게 표현 가능
let plus = (a, b) => a + b;
console.log(plus(2, 5));

// parameter가 하나일 때
let print = word => { // 소괄호를 치지 않는다
    console.log(word);
}
print("Hello!");

// parameter가 없는 함수
let myfunc = () => {
    return 1;
}
console.log(myfunc());