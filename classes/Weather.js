class Weather {
	constructor(city) {
		this.key = 'ae283fd21026f903724fe0bd7811dee2';
		this.city = city;
	}

	async getWeather() {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
		const responseData = await response.json();
		return responseData;
	}

	changeCity(city){
		this.city = city;
	}
}