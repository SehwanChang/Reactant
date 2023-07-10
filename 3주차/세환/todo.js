    const form = document.querySelector(".todo__generator");
    const todo_list = document.querySelector("#todo_lists");
    const todo_input = document.querySelector("#todo__input");

    /* . : 클래스 선택, # : Id 선택 */

    let todos = [];



    const resetInput = () =>{
        todo_input.value = "";
    }

    const paintTodo = (value) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const newId = todos.length + 1;
        span.innerHTML = value;
        

        
        const img = document.createElement("img");
        img.src = "./image/delete.png";
        img.className = "todo__delete";

        li.id = newId;
        const data = {
            id: newId,
            value,
        };

        todos.push(data);

        li.appendChild(span); // span 태그가 li 태그의 자식요소로 들어감.
        li.appendChild(img);
        todo_list.appendChild(li); // li 태그가 ul 태그의 자식요소로 들어감.
    };

    const saveTodo = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }  
    
    const loadTodo = () => {
        const loadedTodos = localStorage.getItem("todos");
        if (loadedTodos === null) return ;

        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach((el) => paintTodo(el.value));
    };




    const makeTodoHandler = (e) => {
        e.preventDefault();
        const value = e.target.children[0].value;
        paintTodo (value); //화면에 렌더링
        saveTodo(); //로컬 스토리지에 저장
        resetInput(); //input 초기화
    };

    const init = () => {
        loadTodo();
    };
    const deleteHandler = (e) => {
        const targetClass = e.target.className;
        if(targetClass !== "todo__delete") return;
        const parentNode = e.target.parentNode;
        
        todo_list.removeChild(parentNode);
        const filteredTodos = todos.filter((item) => item.id != parentNode.id);
        todos = filteredTodos;
      
        localStorage.setItem("todos", JSON.stringify(todos));   
      };

    todo_list.addEventListener("click", deleteHandler);
    form.addEventListener("submit",makeTodoHandler);
    
