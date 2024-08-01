let temperatureField = document.querySelector(".temp");
let locationdata = document.querySelector(".timeLocation p");
let dateAndTime = document.querySelector(".timeLocation span");
let weatherCondition = document.querySelector(".weatherCondition span");
let iconData = document.querySelector(".weatherCondition img");
let searchField = document.querySelector(".searchField");
let form = document.querySelector("form");

let target = "gurgaon";

form.addEventListener("submit", function (e) {
  console.log(e);
  e.preventDefault();
  target = searchField.value;
  fetchData(target);
});

async function fetchData(target) {
  try {
    let url = `http://api.weatherapi.com/v1/current.json?key=8c88b75e5384477faed74426240406&q=${target}&aqi=no`;
    let response = await fetch(url);
    // console.log("check response  " + response);
    let data = await response.json();
    console.log("check data" + data);

    let currentTemp = data.current.temp_c;
    let currentCondition = data.current.condition.text;
    let locationName = data.location.name;
    let localTime = data.location.localtime;
    let conditionEmoji = data.current.condition.icon;

    console.log(
      currentTemp,
      currentCondition,
      locationName,
      localTime,
      conditionEmoji
    );
    updateDOM(
      currentTemp,
      currentCondition,
      locationName,
      localTime,
      conditionEmoji
    );
  } catch (error) {
    alert("Please put a valid data");
    console.log(error);
  }
}

function updateDOM(
  currentTemp,
  currentCondition,
  locationName,
  localTime,
  conditionEmoji
) {
  console.log(
    currentTemp,
    currentCondition,
    locationName,
    localTime,
    conditionEmoji
  );

  temperatureField.innerText = currentTemp;
  weatherCondition.innerText = currentCondition;
  locationdata.innerText = locationName;
  dateAndTime.innerText = localTime;
  iconData.src = conditionEmoji;
}

fetchData(target);
