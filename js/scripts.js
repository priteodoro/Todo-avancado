// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Funções
const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);  
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);    
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);  

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);  

    todoList.appendChild(todo);
    // limpa o campo
    todoInput.value = "";
};

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // impede reload da página
    
    const inputValue = todoInput.value.trim(); // tira espaços
    
    if (inputValue) {
        saveTodo(inputValue); // adiciona a tarefa
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    
});



