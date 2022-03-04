const cityForm = document.querySelector('.city-form')
const icon =document.querySelector('.icon')

const updateCity = async (city) =>{
const cityDetails = await getCityInfo(city)

const weatherDetails = await getWeather(cityDetails.Key)

return {cityDetails, weatherDetails}
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city).then(data => updateUI(data)).catch(err => console.log(err))

})

const time = document.querySelector('.time')
const details = document.querySelector('.details')

const updateUI = (data) =>{
    const {cityDetails, weatherDetails} = data;

    details.innerHTML = `
    
    <h5 class=" my-5">${cityDetails.EnglishName}</h5> 
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">${weatherDetails.Temperature.Metric.Value} <span class="display-5">&#176;C</span> </div>
    
    `



    let timesource = null;

    if(weatherDetails.isDaytime){
        timesource = './images/day.svg'

    }else {
        timesource = './images/night.svg'
    }

    time.setAttribute('src', timesource);

    let iconSource = `./images/icons/${weatherDetails.WeatherIcon}.svg`

    icon.setAttribute('src', iconSource)
}