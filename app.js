const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저 기본동작(새로고침, 링크이동 등)을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName=loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    patinGreetings();
}

function patinGreetings() {
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${userName}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    patinGreetings();
}