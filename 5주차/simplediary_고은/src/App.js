import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// const dummyList = [
//   {
//     id: 1,
//     author: "정고은",
//     content: "hi1",
//     emotion: 5,
//     created_date: new Date().getTime(), //new Date() 현재시간 기준/ .getTime 밀리세컨으로 변환
//   },
//   {
//     id: 2,
//     author: "정고은",
//     content: "hi1",
//     emotion: 5,
//     created_date: new Date().getTime(), //new Date() 현재시간 기준/ .getTime 밀리세컨으로 변환
//   },
//   {
//     id: 3,
//     author: "정고은",
//     content: "hi1",
//     emotion: 5,
//     created_date: new Date().getTime(), //new Date() 현재시간 기준/ .getTime 밀리세컨으로 변환
//   },
// ];
function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      emotion,
      content,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
    console.log(newDiaryList);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      // 데이터 값을 바꿔줌
      data.map((it) =>
        it.id == -targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;
