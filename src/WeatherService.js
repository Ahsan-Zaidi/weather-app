const API_KEY = '15b48c28fee889409a41091092e6d514'

const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) => data);

        console.log(data);
};

export { getFormattedWeatherData };