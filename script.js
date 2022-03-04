const apiKey = 'qfAeyxlvQA2mvGmsWvn1cbfqZnlgHHsF'

const getCityInfo = async (city) =>{
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${apiKey}&q=${city}`;
    const cityInfo = await fetch(baseURL + query);   
    const data = await cityInfo.json();
    return data[0]
    // console.log(data[0]);
    
}
getCityInfo('lahore')

const getWeather = async (id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${apiKey}`
    const res = await fetch(baseURL + query)
    const data = await res.json();
    // console.log(data);
    return data[0]
}
getWeather('260622')