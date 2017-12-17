var axios = require('axios');

var spawn = require('child_process').spawn;
//var dht = spawn('python dht11.py');

/*dht.stdout.on('data', function(data){
  console.log('out:', data);
});

dht.stderr.on('data', function(data){
  console.log('err:', data);
});

dht.on('exit', function(code, signal){
  console.log('exit:', code);
})*/

/*var exec = require('child_process').exec;
var dht = exec('python dht11.py');

dht.stdout.on('data', function(data){
  console.log('out:', data, typeof data);
})
dht.on('exit', function(code){
  console.log('exit:', code);
})*/

var exe = require('./exec');
var dht = exe.getDHT();
dht.getTemp().then(e=>{
  console.log(e);
  console.log(`temp:${e.temp}.${e.temp_point} C`);
});
