const axios = require('axios');

const forecast = (city) => {
    // Make a request for a user with a given ID
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=2936837189a155d3300ce58cf542d877&units=metric')
        .then(function ({ data }) {
            // handle success
            return (`It is currently ${data.main.temp} in ${city}. Looks like ${data.weather[0].main} there.`)
        })
        .catch(function ({ response:errorResponse }) {
            // handle error
            if (!errorResponse) {
                return ('Connect to Internet')
            }
                return (errorResponse.data.message)
        })
}

module.exports = forecast;