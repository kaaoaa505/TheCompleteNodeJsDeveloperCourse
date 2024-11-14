import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

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

