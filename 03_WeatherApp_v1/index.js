const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=Washington';
// const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=38.895,-77.037';
const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=24.091,32.8942';

// request(url, function (error, response, body) {
request({ url: url, json: true }, function (error, response, body) {
  try {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log(`
    ________________________
    `);

    console.log('data.current:', body.current);


  } catch (errorTryCatch) {
    console.log('errorTryCatch:', errorTryCatch);
    console.log('error:', error);
    temperature
  }

});