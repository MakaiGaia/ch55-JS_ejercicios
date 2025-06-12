/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
    1. pedir el periodo de segundos antes de mostrar */

let setTimeSec = prompt("Introduce el tiempo para mostrar la alarma");
setTimeSec = parseInt(setTimeSec);
let timeout = setTimeSec*1000;
setTimeout(() => {
    alert(`Alarma programada después de ${setTimeSec} segundos`);
}, timeout);
