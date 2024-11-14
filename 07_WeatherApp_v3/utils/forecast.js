import { baseUrl } from "./constants.js";
import processAddressRequest from "./processAddressRequest.js";

const forecast = (lat, lng, callback) => {
    const url = baseUrl + `${lat},${lng}`;
    processAddressRequest(url, callback);
};

export default forecast;