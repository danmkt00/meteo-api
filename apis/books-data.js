/**
 * Fetches 10 weather forecasts from the Weather API.
 *
 * @async
 * @param {string} countryName - The parameter to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error!
 */

const weatherData = async () => {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=51.2089&longitude=3.2242&hourly=temperature_2m&forecast_days=10`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};

export default weatherData;
