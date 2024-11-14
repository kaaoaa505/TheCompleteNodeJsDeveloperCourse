const request = require('postman-request');

const base_url = `http://api.weatherstack.com/current?access_key=6e437138879d3336efe31c66a1987a80&query=`;

const processAddressRequest = (url, callback) => {
  request({ url: url, json: true }, function (error, response, body) {
    try {
      console.log(`
-------------------------------------------------
`);
      if (error) callback(error, null);

      if (response && response.statusCode == 200) callback(null, body);

      console.log(`
_________________________________________________
`);
    } catch (error_by_catch) {
      callback(error_by_catch, null);
    }
  });
};

const geocode = (address, callback) => {
  const url = base_url + encodeURIComponent(address);
  processAddressRequest(url, callback);
};

const forecast = (lat, lng, callback) => {
  const url = base_url + `${lat},${lng}`;
  processAddressRequest(url, callback);
};

geocode('Aswan', (error, data) => {
  if (error) {
    console.log('geocode error is: ', error);
  } else {
    console.log('geocode data is: ', data);
  }
});

forecast(24.091, 32.8942, (error, data) => {
  if (error) {
    console.log('forecast error is: ', error);
  } else {
    console.log('forecast data is: ', data);
  }
});
