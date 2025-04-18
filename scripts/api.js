const apiKey = "YOUR_API_KEY";

document.addEventListener("DOMContentLoaded", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById("weather");
            weatherDiv.innerHTML = `
                <p>${data.weather[0].description}, Temp: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            `;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});