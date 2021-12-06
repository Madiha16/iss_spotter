// // index.js
// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');

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


// fetchISSFlyOverTimes({ latitude: '45.4676', longitude: '-73.6529' }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', data);

// });

const { nextISSTimesForMyLocation } = require('./iss');



const nextPass = passTimes => {
  for (let pass of passTimes) {
    let time = pass.duration;
    //let date = pass.risetime; //mine
    const datetime = new Date(0); //using a new? a class of Date objects, like making a new object using the word new // Date Constructor??
    datetime.setUTCSeconds(pass.risetime); //getter/setter, setUTC is a method that accepts risetime as a param
    // Date.setUTCSeconds // setUTC sets the seconds value in the Date object using Universal Coordinated Time (UTC)

    // console.log(new Date, "newDate");//2021-12-06T23:08:02.096Z
    // console.log(new Date(0), "newDate(0)");//1970-01-01T00:00:00.000Z
    // console.log(new Date(pass.risetime), "newDate(pass.risetime)");//1970-01-19T23:17:02.665Z
    // console.log(datetime, "datetime");//2021-12-07T22:24:45.000Z datetime
    // console.log(datetime.setUTCSeconds, "datetime.setUTCSeconds");//[Function: setUTCSeconds] datetime.setUTCSeconds
    //console.log(datetime.setUTCSeconds(pass.risetime));//3278045305000
    //console.log(datetime, "datetime after setUTC (pass.risetime)")//2073-11-16T06:08:11.000Z
    console.log(`Next pass at ${datetime} for ${time} seconds!`);
    //console.log(`${datetime}`);// works for string literals
    //console.log(typeof datetime);// different format???
  }
  //console.log(passTimes); //array of 5 risetime and duraion values
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  nextPass(passTimes);
});
