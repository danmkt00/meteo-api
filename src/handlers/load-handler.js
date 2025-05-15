import booksData from '../../apis/books-data.js';
import organizeWeather from '../utils/organize-weather.js';
import dom from '../dom.js';
import renderWeatherCard from '../components/render-weather-card.js';

const loadHandler = async () => {
    try {
        const data = await booksData();

        const organizedData = organizeWeather(data);

        for (const day in organizedData.days) {
            const weatherDom = renderWeatherCard(day, organizedData.days[day]);

            dom.weatherCard.append(weatherDom);
        }
    } catch (err) {
        console.error(err);
    }
};

export default loadHandler;
