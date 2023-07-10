const form = document.querySelector(".todo__generator");
const todo_list = document.querySelector("#todo__list");
const todo_input = document.querySelector("#todo__input");

let todos = [];

const paintTodo = (value) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newId = todos.length + 1;

  span.innerHTML = value; // span 태그에 value를 텍스트로 넣어주겠다!

  li.id = newId;

  const reviseBtn = document.createElement("img");
  reviseBtn.src = "./image/revision.png";
  reviseBtn.className = "todo__revise";

  const deleteBtn = document.createElement("img");
  deleteBtn.src = "./image/delete.png";
  deleteBtn.className = "todo__delete";

  const data = {
    // data array에 객체 형태로 저장
    id: newId,
    value, // value: value,랑 똑같음. JS에선 명이 같으면 생략 가능하다
  };

  todos.push(data);
  li.appendChild(span); // appendChild = li 태그의 자식 요소로 넣어주겠다!
  li.appendChild(reviseBtn);
  li.appendChild(deleteBtn);
  todo_list.appendChild(li);
};

const resetInput = () => {
  todo_input.value = "";
};

const saveTodo = () => {
  localStorage.setItem("todos", JSON.stringify(todos)); // ("todos", todos);까지만 하면 오류남. 로컬 스토리지에는 문자열 형식만 저장 가능한데 지금은 array이기 때문
};

const loadTodo = () => {
  const loadedTodos = localStorage.getItem("todos");

  if (loadedTodos === null) return; // loadedTodos에 값이 있을 때만 이 코드를 무시하고 갈 수 있음

  const parsedTodos = JSON.parse(loadedTodos); // 문자열로 저장한 데이터를 다시 본인의 데이터 형태로 parsing하는 작업

  parsedTodos.forEach((el) => paintTodo(el.value)); // parsedTodos 안의 인덱스들을 순회 하면서 작업 함
};

const makeTodoHandler = (e) => {
  // e=event, 밑에 코드랑 똑같이 쓰면 됨!
  e.preventDefault(); // 새로고침을 막는 코드
  const value = e.target.children[0].value;
  paintTodo(value);
  saveTodo();
  resetInput();
};

const deleteHandler = (e) => {
  const targetClass = e.target.className;

  if (targetClass !== "todo__delete") return;
  const parentNode = e.target.parentNode;

  todo_list.removeChild(parentNode);

  const filteredTodos = todos.filter((item) => item.id != parentNode.id);
  todos = filteredTodos;

  localStorage.setItem("todos", JSON.stringify(todos));
};

const init = () => {
  // JS가 돌아갈 때 처음 무조건 실행되어야 하는 함수를 보통 관행적으로 init이라고 적음
  loadTodo();
};

init();

todo_list.addEventListener("click", deleteHandler);

form.addEventListener("submit", makeTodoHandler);
