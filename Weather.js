class Forecat{
    constructor(){
        this.key = "1nKlTpl6A4peqse5jKkhp7TZdkC7xOF3";
        this.cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherURL = "http://dataservice.accuweather.com/currentconditions/v1/";
    }

    async getLocation(city){
        const params = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL+params);
        return response.json();
    }

    async getWeather(id){
        const params = `${id}?apikey=${this.key}`; 
        const response = await fetch(this.weatherURL+params);
        const data = await response.json();
        return data;
    }
}