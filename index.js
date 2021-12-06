// // index.js
// const { fetchMyIP } = require('./iss');
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('IP', ip);
  return ip;
});

fetchCoordsByIP('67.216.50.67', (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});