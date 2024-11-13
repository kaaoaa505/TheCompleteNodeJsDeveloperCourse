const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=Washington';
// const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=38.895,-77.037';
const url = 'http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=24.091,32.8942';

// request(url, function (error, response, body) {
request({ url: url, json: true }, function (error, response, body) {
  try {
    console.log('error:', error);

    console.log(`
    ________________________
    `);

    console.log('statusCode:', response && response.statusCode);

    console.log(`
    ________________________
    `);

    //   console.log('body:', body);

    // const data = JSON.parse(body);
    const data = body;

    console.log('data:', data);
    
    console.log(`
    ________________________
    `);

    console.log('data.current:', data.current);
    
    console.log(`
    ________________________
    `);
    
    console.log('data.current.temperature:', data.current.temperature);
    
    console.log(`
    ________________________
    `);
    
    console.log('data.current.weather_descriptions[0]:', data.current.weather_descriptions[0]);
    
    console.log(`
    ________________________
    `);

  } catch (errorTryCatch) {
    console.log('errorTryCatch:', errorTryCatch);
    console.log('error:', error);
    temperature
  }

});