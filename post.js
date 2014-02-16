var http = require('http');
var req = require('request');
var querystring = require('querystring');
var name = "jpg";
var img = "I AM AN IMAGE";
var lat = 1;
var lon = 2;
var time = 12345;

var url = '127.0.0.1:5000/add';
var form = { 'name' : name,
    'img' : img,
    'lat' : lat,
    'long' : lon,
    'time' : time,
};

var headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': form.length
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

req.post({url: url, form: form, headers: headers}, callback);




