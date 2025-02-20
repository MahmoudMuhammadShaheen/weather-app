




/* https://api.openweathermap.org/data/2.5/weather?q=germany&863242cfb2b1d357e6093d9a4df19a4b&units=metric */


const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="863242cfb2b1d357e6093d9a4df19a4b";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const res = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(res.status == 404) {

        document.querySelector("error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else {

    
    let data = await res.json();
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerText = data.main.humidity+"%";
    document.querySelector(".wind").innerText = data.wind.speed+"km/h";
    weatherIcon.src =`images/${weather.main[0]}.png`
    document.querySelector(".weather").style.display = "block";
    document.querySelector("error").style.display = "none";

}
}


let arr = [1,2,3,4,5,6]
console.log(arr[0]);

searchBtn.addEventListener("click", () => {
    getWeather( searchBox.value);
});



