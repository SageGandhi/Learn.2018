//Do npm install request After cd JavaScript/Js.01/04.NodeIntroduction/Chap.01/
var request = require('request');

request('https://www.google.com/', function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
});