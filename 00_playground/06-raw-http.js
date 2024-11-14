const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=Aswan';

const req = http.request(url, (res) => {
    let data = ''

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        let result = JSON.parse(data);
        console.log('result is: ', result);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.end();