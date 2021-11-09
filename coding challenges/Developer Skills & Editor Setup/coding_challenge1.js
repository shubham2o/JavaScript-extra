// Test Data 1
const temperature = [17, 21, 23];

console.log(`1> ${temperature[0]}℃ in 1 days... ${temperature[1]}℃ in 2 days... ${temperature[2]}℃ in 3 days...
`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days... `;
  }
  console.log(str);
};
printForecast(temperature);
