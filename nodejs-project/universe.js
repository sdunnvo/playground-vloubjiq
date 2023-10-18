const _ = require('lodash');
const nodemailr = require('nodemailer');

function countAllStars(galaxies) {
  console.log("\n\n--> All the Galaticals :: " + galaxies);
  var totalStars = 0;
  
  galaxies.forEach(function(stars) {
    totalStars += stars; // fix me
  }, this);

  var reducted = _.reduce(galaxies, (iter, accum) => (accum + iter), 0);
  console.log("\n\n----------\nREDUCTED calulations :: " + reducted);
  
  console.log("Final calulations :: " + totalStars);
  return totalStars;
}

// {
module.exports = {
  countAllStars: countAllStars
};
// }
