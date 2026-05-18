async function getWeather() {

    let city = document.getElementById("city").value;

    let result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    result.innerHTML = "Loading...";

    try {

        let response = await fetch(`https://wttr.in/${city}?format=j1`);

        let data = await response.json();

        let temperature = data.current_condition[0].temp_C;

        let humidity = data.current_condition[0].humidity;

        let weather = data.current_condition[0].weatherDesc[0].value;

        result.innerHTML = `
<h2>${city}</h2>
<p>🌡 Temperature: ${temperature}°C</p>
<p>💧 Humidity: ${humidity}%</p>
<p>🌤 Weather: ${weather}</p>
`;

    } catch (error) {

        result.innerHTML = "Error fetching weather data";

    }

}