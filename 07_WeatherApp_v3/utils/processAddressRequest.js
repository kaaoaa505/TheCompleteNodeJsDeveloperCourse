import request from 'postman-request';

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

export default processAddressRequest;