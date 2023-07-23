import { useState, useRef } from "react";
const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: "1",
  });
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요");
      authorInput.current.focus(); //useRef로 생성한 레퍼런스 객체를 current라는 property로 가져와서 focus
      return;
    }
    if (state.content.length < 5) {
      // alert("일기 본문은 최소 5글자 이상 입력해주세요");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);

    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1, //초기화
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput} //input 에 접근할 수 있게 함
          name="author"
          value={state.author}
          // onChange={(e) => {
          //   // console.log(e.target.value);
          //   // console.log(e.target.name);
          //   // setAuthor(e.target.value);
          //   setState({
          //     ...state, //스프레드 연산자 순서대로 업데이트 되기 때문에 원래 스테이트를 먼저 적고 변경하고자 하는 프로퍼티의 값을 적어줘야함
          //     author: e.target.value,
          //   });
          // }}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          name="content"
          // onChange={(e) => {
          //   setState({
          //     ...state,
          //     content: e.target.value,
          //     // author: state.author,
          //   });
          //   // console.log(e.target.value);
          // }}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
