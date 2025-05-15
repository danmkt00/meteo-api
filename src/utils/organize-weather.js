const formatHours = (hour) => {
    return hour < 10 ? `0${hour}:00` : `${hour}:00`;
};

const organizeWeather = (data) => {
    const newData = {
        days: {}
    };

    data.hourly.time.forEach((element, index) => {
        const now = new Date(element);
        const day = `${now.getDate()}/0${now.getMonth()}`;
        if (!newData.days[day]) {
            newData.days[day] = [];
        }
        newData.days[day].push({
            hour: formatHours(now.getHours()),
            temperature: data.hourly.temperature_2m[index].toFixed(1)
        });
    });
    return newData;
};

export default organizeWeather;
