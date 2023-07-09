const form = document.querySelector(".todo_generator") //class
const todo_lists = document.querySelector("#todo_lists") //id
const todo_input = document.querySelector('#todo__input') //id

// getElemetbyID vs querySelector
// document.querySelector("#test");  vs document.getElementById("test");
// querySelector는 class, id 등 다양하게 사용 가능하지만 상대적으로 느림

let todos = [] //2


const paintTodo = (value) => {
  //1. create
  const li = document.createElement("li"); //li라는 요소 생성
  const span = document.createElement("span"); //span tag 생성

  span.innerHTM = value;
  li.appendChild(span); //부모의 자식 노드 중 마지막으로 붙임
  // <li> <span> value </span> </li>

  //2. read
  todos.push(value);

  //3. update
  const reviseBtn = document.createElement("img");
  reviseBtn.src = "./image/revision.png";
  reviseBtn.className = "revise_todo";
  li.appendChild(reviseBtn);

  li.id = `todo_${todos.length + 1}`;
  const todoObject = {
    value,
    id: `todo_${todos.length + 1}`,
  };
  todos.push(todoObject);
  todo_lists.appendChild(li);
    
  //4. delete
    const deleteBtn = document.createElement("img")
    deleteBtn.src = "./image/delete.png";
    deleteBtn.className = "delete_todo";
    todo_lists.appendChild(li);

}
// 1. create: paintTodo에 넘길 value 만들기
const maketodo = (event) => { //특정 event 시 실행
    event.preventDefault() //새로고침 방지
    
    const value = event.target.children[0].value
    //event target = 해당 event가 일어난 html 코드
    //todo_generator의 첫 번째 자식 todo__input의 값
    paintTodo(value);



    //2. read
    saveTodo();
    resetInput();



    

}

form.addEventListener("submit", maketodo); //제출되면 실행



//2. read
// list를 만들어 painttodo에서 push
const saverTodo = () => { 
    sessionStorage.setItem("todos", JSON.stringify(todos))
    //array를 JSON 문자열로 변환
}
//input에 들어가있는 문자열도 초기화 필요
const resetInput = () => {
    const todo_input = document.querySelector(".todo_generator > input")
    todo_input.value=""
}
//두 함수를 maketodo에 추가 (submit마다 실행)

//새로고침 시 storage에 있는 data 꺼내와야함
const loadTodo = () => {
    const loadedTodos = sessionStorage.getItem("todos");
    if (loadedTodos == null) return;

    const parsedTodos = JSON.parse(loadTodo) //json > js로 변환
    parsedTodos.forEach((toDo) => {  //배열 순회
        paintTodo(toDo.text) //모든 요소에 대해 실행
    });
};

//새로고침 시 실행되도록 init 함수 작성
const init = () => {
    loadTodo();
};

init();

//3. update
//maketodo 수정
const updateDelete = (event) => {
    const type = event.target.className;
    const target = event.target.parentNode;

    if (type === "revise_todo") {
        reviseTodo(target)
    } else if (type == "delete_todo") {
        deleteTodo(target)
    }
}

//수정 가능하도록 변경
const reviseTodo = (target) => {
    const form = document.createElement("form")
    const input = documet.createElement("input")
    input.type = "text";
    form.className = "revise__form"

    const value = target.children[0].innerHTML
    input.value = value

    form.appendChild(input)

    target.replaceChild(form, target.children[0]) 

    const reviseEnd = (event, target) => {
        event.preventDefault();

        //변경하지 않은 곳은 수정하지 않도록
        if (target.id != event.target?.parentNode?.id) return;
        
        const text = document.createElement("span")
        const revisedText = event.target.children[0].value
        text.innerHTML = revisedText

        todos.forEach((el) => {
            if (el.id === target.id) {
                el.text=revisedText
            }
        })
        target.replaceChild(text, target.children[0]);
        saverTodo();
    }
    form.addEventListener("submit", (e)=>reviseEnd(e, target))
}

todo_lists.addEventListener("click", updateDelete);


//4. delete
//painttodo 작성
const deleteTodo = (target) => {
    todo_lists.removeChild(target);

    const renewTodos = todos.filter((el) => {
        return el.id !== target.id;
    });
    todos = renewTodos;
    saverTodo();
}
