const renderWeatherCard = (day, data) => {
    //main container
    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';

    //day
    const dayEl = document.createElement('h2');
    dayEl.innerText = day; //have to update it

    weatherCard.append(dayEl);

    //weather hourly
    data.forEach((element) => {
        const pEl = document.createElement('p');
        pEl.innerText = `${element.hour} - ${element.temperature} °C`;

        weatherCard.append(pEl);
    });

    return weatherCard;
};

export default renderWeatherCard;
