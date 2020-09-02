
// Underscore string problem - Algoexpert


function myFunction() {
    
    console.log(underscorifySubstring(
        "testthis is a testtest to see if testestest it works",
        "test"
      ));

}


function underscorifySubstring(string, substring) {
  // Write your code here.
  const locations = collapseLocation(getLocations(string, substring));
  return underscorify(string, locations);
}

function getLocations(string, substring) {
  let locations = [];
  let startIdx = 0;
  while(startIdx < string.length) {
    const nextIdx = string.indexOf(substring, startIdx);
    if(nextIdx !== -1) {
      locations.push([nextIdx,nextIdx+substring.length]);
      startIdx = nextIdx + 1;
    } else {
      break;
    }
    
  }
  return locations;
}

function collapseLocation(locations) {
  if(!locations.length) return locations;
  let newLocations = [locations[0]];
  let prev = locations[0];
  for(let i=1; i< locations.length; i++) {
    const curr = locations[i];
    if(curr[0] <= prev[1]) {
      prev[1] = curr[1];
    } else {
      newLocations.push(curr);
      prev = curr;
    }
  }
  return newLocations;
}

function underscorify(string, locations) {
  let finalChars = [];
  let locationIdx = 0;
  let strIdx = 0;
  let InBetweenUnderscores = false;
  let i = 0;
  while(strIdx < string.length && locationIdx < locations.length) {
    if(strIdx == locations[locationIdx][i]) {
      finalChars.push("_");
      InBetweenUnderscores = !InBetweenUnderscores;
      if(!InBetweenUnderscores) locationIdx++;
      i = (i === 1) ? 0: 1;
    }
    finalChars.push(string[strIdx]);
    strIdx++;
  }
  if(locationIdx < locations.length) {
    finalChars.push("_");
  } else if(strIdx < string.length) {
    finalChars.push(string.slice(strIdx));
  }
  return finalChars.join("");
}