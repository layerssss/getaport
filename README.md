# getaport

Get a random free tcp port.

## Usage

```javascript
var getaport = require('getaport');
getaport(function(err, port){ // get a tcp port for 0.0.0.0
  if(err) return console.error('oops!'); 
  console.log('got a port of ' + port);
});

getaport('127.0.0.1', function(err, port){ // get a tcp port for 127.0.0.1
  if(err) return console.error('oops!'); 
  console.log('got a port of ' + port);
});
```
