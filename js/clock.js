let myName = document.querySelector("#myName");
let myClock = document.querySelector(`#myClock`);

myName.innerHTML = prompt(`Adinizi ve Soyadinizi Girin.`);

function writeTime(){
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();

    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

    let text = `${hours}:${minutes}:${seconds}, ${days[day-1]}`;

    myClock.innerHTML = text;
    setTimeout(writeTime,1000);
}
writeTime();