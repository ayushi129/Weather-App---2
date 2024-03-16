const time = document.getElementById('time');
const date = document.getElementById('date');
const currentWeatherItems = document.getElementById('current-weather-items');
const timezone = document.getElementById('timezone');
const country = document.getElementById('country');
const weatherForecast = document.getElementById('weather-forecast');
const currentTemp = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const timeData = new Date();
    const month = timeData.getMonth();
    const date = timeData.getDate();
    const day = timeData.getDay();
    const hour = timeData.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = timeData.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    time.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`
    date.innerHTML = days[day] + ', ' + date + ' ' + months[month]
}, 1000);