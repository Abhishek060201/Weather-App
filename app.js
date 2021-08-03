const forecast = require('./forecast');

const address = process.argv[2]

if (!address) {
  console.log('Please, provide address!')
} else {
  console.log(forecast(address));
}