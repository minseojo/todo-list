const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // 스트링 길이가 2 미만이면 앞에 0을 추가
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const AMPM = "";
    if(date.getHours()<12 && date.getMinutes()<60 && date.getSeconds()<60) { 
        clock.innerText = `오전 ${hours}:${minutes}`;
    } else {
        clock.innerText = `오후 ${hours}:${minutes}`;
    }

}
getClock();
setInterval(getClock, 1000); //주기적으로 연속 실행
/*setTimeout(sayHello, 5000); //주기 기다렸다가 실행


console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
*/