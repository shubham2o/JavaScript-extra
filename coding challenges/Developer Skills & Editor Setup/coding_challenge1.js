// Test Data 1
let temperature = [17, 21, 23];

function printForecast(arr) {
  console.log(`${temperature[0]}℃ in 1 days... ${temperature[1]}℃ in 2 days... ${temperature[2]}℃ in 3 days...
`);
  return arr;
}

printForecast();

// Test Data 2
temperature = [12, 5, -5, 0, 4];

function printForecast(arr) {
  console.log(`${temperature[0]}℃ in 1 days... ${temperature[1]}℃ in 2 days... ${temperature[2]}℃ in 3 days... ${temperature[3]}℃ in 4 days... ${temperature[4]}℃ in 5 days...
`);
  return arr;
}

printForecast();
