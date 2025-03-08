//  fetch() returns a promise that returns a Response object
fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
    // parse the body from the Response oject, which is a JSON object
    .then(data => data.json()) // .json() returns a promise too
    .then(output => console.log(output)) //hence need another .then()