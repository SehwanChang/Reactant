// useSTATE : 컴포넌트에서 상태 관리하는 훅

import { useEffect } from "react";

// import {useState} from “react”;

// const[ state, setState] =. useState(상태 초기 값)
// 상태값 저장 변수 // 상태 값 갱신 함수

// useEffect : 컴포넌트가 마운트 / 업데이트 / 언마운트 될때 특정 작업 처리하는 훅

//화면에 첫 렌더링 될때 실행 배열 안에 [value] 로 넣으면 value 값이 바뀔 때 실행

// useEffect(() => {
//     //작업
// }, []);

//cleanup  : 언마운트 // 다음 렌더링시 useeffect 실행되기전에 실행

// useEffect(() => {
//   return () => {
//     //clean up
//   };
// }, []);

//렌더링시 발생하는 side effect 방지 (함수 실행되며ㅣㄴ서 함수 외부에 존재하는 값이나 상태 변경시키는 행위 : 프로그램 읽기 어렵게함)

// .jsx:
// 이것은 자바스크립트 XML(Javascript XML)의 약어로 React에서 사용되는 파일 형식입니다.
// JSX는 자바스크립트에 HTML 구문을 사용하여 구조를 표현할 수 있도록 해주는 확장 문법입니다.
