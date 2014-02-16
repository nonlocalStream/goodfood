var http = require('http');
var querystring = require('querystring');
var name = "Hackathon";
var img = ":)";
var lat = 3;
var lon = 2;
var time = "12:46";

var post_data = querystring.stringify({
    'name' : name,
    'lat' : lat,
    'lon' : lon,
    'time' : time,
    'img' : img,
});


var post_options = {
      host: 'data.marcomontagna.com',
      port: '80',
      path: '/put.php',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };



callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

var post_req = http.request(post_options, callback);

post_req.write(post_data);
post_req.end();




