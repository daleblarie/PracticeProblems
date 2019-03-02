let movieArr = [100, 50, 75, 5];

function entertainment(flightLength, movieArray) {
  let possible = false;
  for (var i = 0; i < movieArray.length - 1; i++) {
    for (var j = i + 1; j < movieArray.length; j++) {
      let combinedLength = movieArray[i] + movieArray[j];
      if (combinedLength == flightLength) {
        possible = true;
      }
    }
  }
  return possible;
}

console.log(entertainment(150, movieArr));

function betterEntertainment(flightLength, movieArray) {

  const movieLengthsSeen = new Set();
  for (var i = 0; i < movieArray.length; i++) {
    const firstMovieLength = movieArray[i];
    const secondMovieLength = flightLength - firstMovieLength;

    if (movieLengthsSeen.has(secondMovieLength)) {
      return true;
    }
    movieLengthsSeen.add(firstMovieLength);
  }
  return false;
}

console.log(betterEntertainment(150, movieArr));
