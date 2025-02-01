document.getElementById('weather-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const city = document.getElementById('city').value.trim();

    if (city === '') {
        displayError('Please enter a city name');
        return;
    }

    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'cdb36aac01e50efe78f5825fba2ccf3d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayWeather(data);
        } else {
            displayError('City not found');
        }
    };

    xhr.onerror = function () {
        displayError('Error fetching data');
    };

    xhr.send();
}

function displayWeather(data) {
    document.getElementById('error-message').textContent = '';

    const temperature = `${data.main.temp}°C`;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const condition = data.weather[0].description;
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById('temperature').textContent = temperature;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('condition').textContent = condition;
    document.getElementById('weather-icon').src = iconUrl;

    document.getElementById('weather-details').style.display = 'block';
}

function displayError(message) {
    document.getElementById('weather-details').style.display = 'none';
    document.getElementById('error-message').textContent = message;
}
