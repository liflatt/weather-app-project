function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  // Add leading zero to minutes if less than 10
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }

  let formattedTime = `${currentDay} ${currentHour}:${currentMinutes}`;
  return formattedTime;
}
let currentTime = new Date();
let timeNow = document.querySelector("#current-time");
timeNow.innerHTML = formatDate(currentTime);

function displayTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector(
    "#current-temp-number-display"
  );
  temperatureElement.innerHTML = `${temperature}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let cityDisplay = document.querySelector("#current-city-display");
  cityDisplay.innerHTML = searchInput.value;
  let city = `${searchInput.value}`;

  let apiKey = "b0452f91cd75631eoba398t0f42a2100";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
