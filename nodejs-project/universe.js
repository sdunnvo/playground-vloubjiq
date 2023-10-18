function countAllStars(galaxies) {
  console.log("Galaticals :: " + galaxies);
  var totalStars = 0;
  galaxies.forEach(function(stars) {
    totalStars += stars; // fix me
  }, this);
  return totalStars;
}

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
