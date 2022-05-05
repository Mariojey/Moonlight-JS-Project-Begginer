const daysElementValue = document.getElementById('days');
const hoursElementValue = document.getElementById('hours');
const minutesElementValue = document.getElementById('minutes');
const secondsElementValue = document.getElementById('seconds');




const holiday = '24 June 2022';

function countDown() {
    const holidayDate = new Date(holiday);
    const currentDate = new Date();

    const secondsTotalValue = (holidayDate - currentDate) / 1000;

    const days = Math.floor(secondsTotalValue / 3600 / 24);
    const hours = Math.floor(secondsTotalValue / 3600) % 24;
    const minutes = Math.floor(secondsTotalValue / 60) % 60;
    const seconds = Math.floor(secondsTotalValue) % 60;

    daysElementValue.innerHTML = days;
    hoursElementValue.innerHTML = formatTime(hours);
    minutesElementValue.innerHTML = formatTime(minutes);
    secondsElementValue.innerHTML = formatTime(seconds);



}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown, 1000);