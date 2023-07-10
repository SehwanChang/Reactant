const form = document.querySelector(".todo_generator"); // . : 클래스
const todo_lists = document.querySelector("#todo_lists"); // # : 인풋.
const todo_input = document.querySelector("#todo__input");

todos = [];

const paintTodo = (value) => {
  //1.create
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerHTML = value;
  li.appendChild(span);
  //<li> <span> value </span> <img></img></li>

  const revisedBtn = document.createElement("img");
  revisedBtn.src = "./image/revision.png";
  revisedBtn.className = "revise_todo";
  li.appendChild(revisedBtn);

  text = value;
  li.id = `todo_${todos.length}`;

  const todoObject = {
    text,
    id: li.id,
  };

  todos.push(todoObject);

  const deleteBtn = document.createElement("img");
  deleteBtn.src = "./image/delete.png";
  deleteBtn.className = "delete_todo";
  li.appendChild(deleteBtn);

  todo_lists.appendChild(li);
};

const maketodo = (event) => {
  event.preventDefault(); // 새로고침 방지

  const value = event.target.children[0].value;
  paintTodo(value);

  saveTodo();
  resetInput();
};

const saveTodo = () => {
  localStorage.setItem("todos", JSON.stringify(todos)); //local storage에 저장되는 Key
};

const resetInput = () => {
  todo_input.value = "";
};

const loadedTodo = () => {
  const loadedTodos = localStorage.getItem("todos");
  if (loadedTodos == null) return;

  const parsedTodos = JSON.parse(loadedTodos);
  console.log(parsedTodos);
  parsedTodos.forEach((todo) => {
    paintTodo(todo.text);
    console.log(todo, todo.text);
  });
};

const init = () => {
  loadedTodo();
};

const updatDelete = (event) => {
  const type = event.target.className;
  const target = event.target.parentNode;

  if (type == "revise_todo") {
    reviseTodo(target);
  } else if (type == "delete_todo") deleteTodo(target);
};

const reviseTodo = (target) => {
  const form = document.createElement("form");
  const input = document.createElement("input");

  input.type = "text";
  form.className = "revise_form";

  const value = target.children[0].innerHTML;
  input.value = value;

  form.appendChild(input);

  target.replaceChild(form, target.children[0]);

  const reviseEnd = (event, target) => {
    event.preventDefault();

    if (target.id != event.target?.parentNode?.id) return;

    const text = document.createElement("span");
    const revisedText = event.target.children[0].value;
    text.innerHTML = revisedText;

    todos.forEach((el) => {
      if (el.id == target.id) {
        el.text = revisedText;
      }
    });
    target.replaceChild(text, target.children[0]);
    saveTodo();
  };
  form.addEventListener("submit", (e) => reviseEnd(e, target));
};

const deleteTodo = (target) => {
  todo_lists.removeChild(target);

  const newTodo = todos.filter((el) => {
    return el.id != target.id;
  });
  todos = newTodo;
  saveTodo();
};

init();

form.addEventListener("submit", maketodo);
todo_lists.addEventListener("click", updatDelete);
