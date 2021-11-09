// Test Data 1
const temperature1 = [17, 21, 23];

console.log(`1 ~~~~~~~~~~> 
${temperature1[0]}℃ in 1 days ... ${temperature1[1]}℃ in 2 days ... ${temperature1[2]}℃ in 3 days ...
`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(temperature1);

// Test Data 2
const temperature2 = [12, 5, -5, 0, 4];

console.log(`2 ~~~~~~~~~~> 
${temperature2[0]}℃ in 1 days ... ${temperature2[1]}℃ in 2 days ... ${temperature2[2]}℃ in 3 days ... ${temperature2[3]}℃ in 3 days ... ${temperature2[4]}℃ in 3 days ...
`);

const printForecast2 = function (arr2) {
  let str2 = "";
  for (let x = 0; x <= arr2.length - 1; x++) {
    str2 = str2 + `${arr2[x]}℃ in ${x + 1} days ... `;
  }
  console.log(str2);
};

printForecast2(temperature2);
