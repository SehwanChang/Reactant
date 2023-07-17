//import "./App.css";
import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./Myheader";
import React from "react";
/* 리턴으로 jsx 문법 -> 컴포넌트 만들 수 있음 */

function App() {
  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  return (
    <Container>
      <div>
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
