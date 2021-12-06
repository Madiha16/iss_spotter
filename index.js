// // index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
//   //console.log(typeof ip) check if ip is a string
// });


////////////////////////////////////////////////////////////////////////////////

// fetchCoordsByIP("67.216.50.67", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', data);
//   //console.log(typeof data);//check type of data
// });

////////////////////////////////////////////////////////////////////////////////


fetchISSFlyOverTimes({ latitude: '45.4676', longitude: '-73.6529' }, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned flyover times:', data);

});
