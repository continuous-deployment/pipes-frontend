var nodeStatic = require('node-static');

var file = new nodeStatic.Server('./build');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(3000);
