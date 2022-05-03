import request from 'request';

export const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c4cbb6fa43cb7ed3ec9474126d5ce539&query=${latitude},${longitude}&units=f`;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.error) {
            callback('Unable to find a location, try another search.', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of a rain.`);
        }
    })
}