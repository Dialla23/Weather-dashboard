
let searchButton = document.getElementById('search-city')
let singleDayDiv = document.getElementById('singleday-data')
let url = " https://api.openweathermap.org/data/2.5/weather?"
let API_KEY = "a1eafa60d9f83885f917e01f7708985c"

const init= async()=>{
    let cityName = document.getElementById('city-name').value
    const singleDayData= await getSingleDayData(cityName)
    // console.log(data)
    // let cityNamePara= document.createElement('p')
    // cityNamePara.innerHTML=data.cityName
    // singleDayDiv.append(cityNamePara)
}

const getSingleDayData= async (city)=>{
    let request_url =`${url}q=${city}&appid=${API_KEY}`


    fetch(request_url).then(res=>res.json()).then(data=>{
        console.log(data)
        let cityNamePara= document.createElement('p')
        cityNamePara.innerHTML= data.name 
        singleDayDiv.append(cityNamePara)   

        let main = document.createElement('p')
        main.innerHTML= data.main.temp
        singleDayDiv.append(main)

        let clouds = document.createElement('p')
        clouds.innerHTML=data.clouds.all
        singleDayDiv.append(clouds)

        let coord = document.createElement('p')
        coord.innerHTML=data.coord.lon
        singleDayDiv.append(coord)

        let sys = document.createElement('p')
        sys.innerHTML=data.sys.type
        singleDayDiv.append(sys)

        let wind = document.createElement('p')
        wind.innerHTML=data.wind.speed
        singleDayDiv.append(wind)

        return data 
        
       
    }) 
}


searchButton.addEventListener('click',init)