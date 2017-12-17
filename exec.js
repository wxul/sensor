var exec = require('child_process').exec;

function DHT(){
}

DHT.prototype.getTemp = function(){
  return new Promise((resolve, reject)=>{
    var dht = exec('python dht11.py');
    dht.stdout.on('data',  function(data){
      if(data.indexOf('right')>=0){
        var str = data.split('\n').filter(e=>!!e);
        console.log(str);
        var temp = str[str.length-1];
        temp = temp.split(' ');
        resolve({temp:temp[0], temp_point:temp[1], humi:temp[2], humi_point:temp[3]});
      }else{
        console.log(false);
        resolve(false);
      }
    });
    dht.stderr.on('data', function(data){
      reject(data);
    });
    dht.on('exit', function(code){
      console.log('exit:', code);
    });
  });
}

module.exports.getDHT = function(){
  return new DHT();
}
