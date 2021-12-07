const { nextISSTimesForMyLocation,  } = require('./iss_promised');
const { nextPass } = require('./index');



// see index.js for printPassTimes
// copy it from there, or better yet, moduralize and require it in both files

nextISSTimesForMyLocation()
  .then((passTimes) => {
    nextPass(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });