// if you haven't already, install the SDK with "npm install sightengine --save"
var sightengine = require('sightengine')('{api_user}', '{api_secret}');
sightengine.check(['nudity', 'wad', 'properties', 'celebrities', 'offensive', 'faces', 'scam', 'face-attributes', 'text']).set_url('https://media2.fdncms.com/clevescene/imager/rapper-ice-cube-discusses-nwas-legacy/u/original/3587882/1371843424-icecube3.jpg').then(function (result) {
    // The result of the API
    console.log(result)
}).catch(function (err) {
    // Error
});