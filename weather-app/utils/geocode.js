import request from 'request';

export const geocode = (address, callback) => {
    if (!address) {
        return console.log('Address is missing, please try another search.')
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoia2FtaWwtYmRiZWxmb3J0IiwiYSI6ImNsMHc2cHMybDA3cW0zY215eWE1bGFvNmQifQ.Y3PYArfuFiSU3h7vTJMqcQ&limit=1`;

    request({url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find a location, try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}