const form = document.querySelector(".todo_generator")
const todo_lists = document.querySelector("#todo_lists")
const todo_input = document.querySelector("#todo__input")

todos=[]

const paintTodo = (value) => {
    //1. create
    const li = document.createElement("li")
    const span = document.createElement("span")

    span.innerHTML = value
    li.appendChild(span)
    console.log(li)
    
    //<li><span>value</span><img/><img/></li>

    const reviseBtn = document.createElement("img")
    reviseBtn.src = "./image/revision.png"
    reviseBtn.className = "revise_todo"
    li.appendChild(reviseBtn)

    text = value
    li.id=`todo_${todos.length}`

    const todoObject = {
        text,
        id: li.id
    }
    todos.push(todoObject);

    const deleteBtn = document.createElement("img")
    deleteBtn.src = "./image/delete.png";
    deleteBtn.className = "delete_todo"
    li.appendChild(deleteBtn)


    todo_lists.appendChild(li);
    
}

const maketodo = (event) => {
    event.preventDefault() //새로고침 방지 함수
  
    const value = event.target.children[0].value
    paintTodo(value)

    saveTodo()
    resetInput()

}

const saveTodo = () => {
    console.log((localStorage.getItem("todos")));
    localStorage.setItem("todos", JSON.stringify(todos));
}

const resetInput = () => {
    todo_input.value=""
}

const loadedTodo = () => {
    const loadedTodos=localStorage.getItem("todos");

    if(loadedTodos==null) return;

    const parsedTodos=JSON.parse(loadedTodos);
//    console.log(parsedTodos);
    parsedTodos.forEach((el)=>{
        paintTodo(el.text);
      //  console.log(el, el.value)
    });
}

const init = () => {
    loadedTodo()
}

const updateDelete = (event) => {
    const type = event.target.className
    const target = event.target.parentNode

    if (type === "revise_todo") {
        reviseTodo(target)
    } else if (type == "delete_todo") {
        deleteTodo(target)
    }
}

const reviseTodo = (target) => {
    const form = document.createElement("form")
    const input = document.createElement("input")

    input.type = "text"
    form.className = "revise_form";

    const value = target.children[0].innerHTML
    input.value = value

    form.appendChild(input)

    target.replaceChild(form, target.children[0])

    const reviseEnd = (event, target) => {
        event.preventDefault()

        if (target.id != event.target?.parentNode?.id) return
        
        const text = document.createElement("span")
        const revisedText = event.target.children[0].value
        text.innerHTML = revisedText
        
        todos.forEach((el) => {
            if (el.id === target.id) {
                el.text = revisedText
             //   console.log(revisedText)
            }
        })
        target.replaceChild(text, target.children[0])
        saveTodo()
    }

    form.addEventListener("submit", (e)=>reviseEnd(e, target))
}

const deleteTodo = (target) => {
    todo_lists.removeChild(target)

    const newTodo = todos.filter((el) => {
        return el.id !==target.id
    })
    todos = newTodo
    saveTodo()
}

init()

form.addEventListener("submit", maketodo)
todo_lists.addEventListener("click", updateDelete)