//this file contains information about time function in js

function updatedUTCTime() {
const utcTime = document.querySelector('[data-testId= "currentUTCTime"]');
const currentTime = new Date().toUTCString();

utcTime.textContent = currentTime;
}
updatedUTCTime();
setInterval(updatedUTCTime, 1000)