const form = document.querySelector('form');
const output = document.querySelector('#output');
const forecast = new Forecat();

const updateUI = async (city)=>{
    const cityDets = await forecast.getLocation(city);
    const weatherDets = await forecast.getWeather(cityDets[0].Key);

    console.log(cityDets,weatherDets);
    const src = "img/icons/"+weatherDets[0].WeatherIcon+".svg";
    const cityName = cityDets[0].LocalizedName;
    const cityStatus = weatherDets[0].WeatherText;
    const temperature = weatherDets[0].Temperature.Metric.Value;

    output.innerHTML = `
        <div id="image"></div>
        <div id="logo"><img src="${src}"></div>
        <div id="city-name">${cityName}</div>
        <div id="status">${cityStatus}</div>
        <div id="temp"><span>${temperature}</span>&deg;C</div>
    `;
    
    const bg = weatherDets[0].IsDayTime ? "img/day.svg": "img/night.svg";
    
    document.querySelector('#image').style.backgroundImage = "url("+bg+")";
    document.querySelector('#logo').style.backgroundImage = "url("+bg+")";

    if(output.classList.contains("display")){
        output.classList.remove("display");
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.city.value = "";

    updateUI(city);
})

