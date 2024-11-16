const OPENWEATHER_API_KEY = '1ab2dde3c0b06c67bbf1d72cb9945ac9';
const WEATHERAPI_KEY = '025e115fdfc446e29c573001241611';

if (document.getElementById('city-search') && document.getElementById('search-button')) {
    document.getElementById('search-button').addEventListener('click', () => {
        const city = document.getElementById('city-search').value;
        if (!city) return alert('Please enter a city');
        window.location.href = `weatherinfo.html?city=${encodeURIComponent(city)}`;
    });

    loadGuimbaInfo();
}

function loadGuimbaInfo() {
    fetch('guimba.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const location = xml.getElementsByTagName('location')[0];

            const name = location.getElementsByTagName('name')[0].textContent;
            const region = location.getElementsByTagName('region')[0].textContent;
            const country = location.getElementsByTagName('country')[0].textContent;
            const population = location.getElementsByTagName('population')[0].textContent;
            const area = location.getElementsByTagName('area')[0].textContent;
            const about = location.getElementsByTagName('about')[0].textContent;

            document.getElementById('guimba-info').innerHTML = `
                <h2>About ${name}</h2>
                <p><strong>Location:</strong> ${name}, ${region}, ${country}</p>
                <p><strong>Population:</strong> ${population}</p>
                <p><strong>Area:</strong> ${area}</p>
                <p><strong>About:</strong> ${about}</p>
            `;
        })
        .catch(error => {
            console.error('Error loading Guimba XML:', error);
            document.getElementById('guimba-info').innerHTML = '<p>Unable to load Guimba information.</p>';
        });
}

if (window.location.pathname.includes('weatherinfo.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city') || "Guimba";
    fetchWeather(city);
}

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) return alert('City not found');
            const { lat, lon } = data.coord;
            const { temp, humidity } = data.main;
            const { description } = data.weather[0];

            document.getElementById('weather-info').innerHTML = `
                <h2>Current Weather for ${city}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${description}</p>
            `;
            updateMap(lat, lon);
            fetchForecast(lat, lon, city);
        });
}

function updateMap(lat, lon) {
    const map = document.getElementById('map');
    map.innerHTML = `<iframe
        width="100%"
        height="100%"
        src="https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed"
        frameborder="0"
        allowfullscreen>
    </iframe>`;
}

function fetchForecast(lat, lon, city) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_KEY}&q=${lat},${lon}&days=3&alerts=yes`)
        .then(response => response.json())
        .then(data => {
            const forecast = data.forecast.forecastday;
            let forecastHTML = `<h2>3-Day Weather Forecast for ${city}</h2>`;
            forecast.forEach(day => {
                forecastHTML += `
                    <div>
                        <p><strong>Date:</strong> ${day.date}</p>
                        <p><strong>Condition:</strong> ${day.day.condition.text}</p>
                        <p><strong>Max Temp:</strong> ${day.day.maxtemp_c}°C</p>
                        <p><strong>Min Temp:</strong> ${day.day.mintemp_c}°C</p>
                    </div>
                    <hr>
                `;
            });
            document.getElementById('forecast-info').innerHTML = forecastHTML;

            if (data.alerts && data.alerts.alert.length > 0) {
                displayAlerts(data.alerts.alert);
            } else {
                document.getElementById('storm-warning').innerHTML =
                    '<p>No active weather alerts at this time.</p>';
            }
        });
}

function displayAlerts(alerts) {
    let alertHTML = '<h2>Weather Alerts</h2>';
    alerts.forEach(alert => {
        alertHTML += `
            <div class="alert">
                <p><strong>${alert.headline}</strong></p>
                <p><strong>Event:</strong> ${alert.event}</p>
                <p><strong>Severity:</strong> ${alert.severity}</p>
                <p><strong>Urgency:</strong> ${alert.urgency}</p>
                <p><strong>Areas:</strong> ${alert.areas}</p>
                <p><strong>Description:</strong> ${alert.desc}</p>
                <p style="color: red; font-weight: bold;">Instruction: ${alert.instruction}</p>
            </div>
            <hr>
        `;
    });
    document.getElementById('storm-warning').innerHTML = alertHTML;
}
