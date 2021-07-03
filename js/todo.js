const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 로컬에 오브젝트 -> 스트링으로 변환
    // 저장, 삭제시 둘 다 적용
}

function deleteToDo(event) {
    const li = event.target.parentElement; // delete target
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newToDo.id;
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0"); // 스트링 길이가 2 미만이면 앞에 0을 추가
    const day = String(date.getDate()).padStart(2, "0");
    span.innerText = `${year}-${month}-${day}: ${newToDo.text}`;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
  //  li.style.type=none;
    toDoList.appendChild(li);
}

function hadnleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", hadnleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // 오브젝트에서 스트링으로 바꾼 array 형식으로 가져옴
    toDos = parsedToDos; // 로컬 값 가져오기
    parsedToDos.forEach(paintToDo);
}