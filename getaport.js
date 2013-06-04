var net = require('net');
module.exports = function(host, cb){
  "use strict";
  if(host.constructor===Function){
    cb = host;
    host = '0.0.0.0';
  }
  var server = net.createServer(function(){
  });
  server.on('error', cb);
  server.listen(0, host, function(e){
    if(e){
      return cb(e);
    }
    var port = server.address().port;
    server.close();
    cb(null, port);
  });
};
