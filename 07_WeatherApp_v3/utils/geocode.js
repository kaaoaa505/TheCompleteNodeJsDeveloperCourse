import { baseUrl } from "./constants.js";
import processAddressRequest from "./processAddressRequest.js";

const geocode = (address, callback) => {
    const url = baseUrl + encodeURIComponent(address);
    processAddressRequest(url, callback);
};

export default geocode;