let apiKey = "&units=metric&appid=21e13228478ed72a8c109984617da8fc"
let testUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=21e13228478ed72a8c109984617da8fc"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
let input = document.getElementById('cityInput')
input.addEventListener('change', sendRequest)
let updButton = document.querySelector('.btn');
updButton.addEventListener('click', sendRequest);

function sendRequest() {
    let cityName = input.value
    let reqUrl = apiUrl + cityName + apiKey
    fetch(reqUrl)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            if (data.name == undefined) {
                alert("Некорректный город");
            } else {
                document.querySelector('.cityName').innerHTML = data.name;
                document.querySelector('.weatherLogo').innerHTML = '<img src="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '.png">';
                document.querySelector('.grad').innerHTML = data.main.temp + '°';
                updButton.style.visibility = 'visible';
            }
        })
    // input.value.innerText=cityName;
}
