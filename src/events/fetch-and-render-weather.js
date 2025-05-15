import loadHandler from '../handlers/load-handler.js';

const fetchAndRenderWeather = () => {
    window.addEventListener('load', loadHandler);
};

export default fetchAndRenderWeather;
