// LS object - for location data
const ls = new LS();
// init location data
const weatherLocation = ls.getLocationData();
// weather object - init location
const weather = new Weather(weatherLocation);
// UI object
const ui = new UI();
// init DOM reload event
document.addEventListener('DOMContentLoaded', getWeather);

// change city and get weather data
const form = document.querySelector('form');
form.addEventListener('submit', changeCity);

function changeCity(event){
	const newWeather = form.firstElementChild.value;
	weather.changeCity(newWeather);
	ls.setLocationData(newWeather);
	getWeather();
	document.querySelector('#city-name').value = "";
	event.preventDefault();
}

// get city weather and display it
function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}