function countAllStars(galaxies) {
  console.log("\n\n--> All the Galaticals :: " + galaxies);
  var totalStars = 0;
  
  galaxies.forEach(function(stars) {
    totalStars += stars; // fix me
  }, this);

  console.log("Final calulations :: " + totalStars);
  return totalStars;
}

// { autofold
module.exports = {
  countAllStars: countAllStars
};
// }
