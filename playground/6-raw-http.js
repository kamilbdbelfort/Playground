const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=c4cbb6fa43cb7ed3ec9474126d5ce539&query=45,-75&units=f`;

const request = http.request(url, (response) => {
    let data = "";

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})
request.end();