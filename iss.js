/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org?format=json`, function(error, response, body) {
    // inside the request callback ...
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      return callback(error, null);
      //return; //same thing
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    ////alternate way of writing non-200 error
    // if (response.statusCode !== 200) {
    //   callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
    //   return;
    // }

    // if we get here, all's well and we got the data
    //const ip = JSON.parse(body).ip;

    data = JSON.parse(body)
    return callback(null, data.ip);
    return callback(null, ip);//body.ip here would have given same thing (ip as a string)

  });
};

const fetchCoordsByIP = function(ip, callback) {
  console.log(`https://api.freegeoip.app/json/${ip}?apikey=db70a6e0-563a-11ec-891d-c7ecd1a4922c`);
  request(`https://api.freegeoip.app/json/${ip}?apikey=db70a6e0-563a-11ec-891d-c7ecd1a4922c`, function (error, response, body) {

    //if error, return error, and null(?)
    if (error) {
      return callback(error, null);
    }

    // if non-200 status, assume server error
    // if (response.statusCode !== 200) {
    //   const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    //   callback(Error(msg), null);
    //   return;
    // }

    const apiResponse = JSON.parse(body);
    
    return callback(null, { lat: apiResponse.latitude, long: apiResponse.latitude });

  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };