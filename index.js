
let searchButton = document.getElementById('search-city')
let singleDayDiv = document.getElementById('singleday-data')
let url = " https://api.openweathermap.org/data/2.5/weather?"
let API_KEY = "a1eafa60d9f83885f917e01f7708985c"

function init(){
    let cityName = document.getElementById('city-name').value
    getSingleDayData(cityName)
  
}

function getSingleDayData(city){
    let request_url =`${url}q=${city}&appid=${API_KEY}`

    fetch(request_url).then(res=>res.json()).then(data=>{
        console.log(data)
        let cityNamePara= document.createElement('p')
        cityNamePara.innerHTML= data.name 
        singleDayDiv.append(cityNamePara) 
    })
}

searchButton.addEventListener('click',init)