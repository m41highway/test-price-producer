// var socket = require('socket.io-client')('http://localhost:5000');
var io = require('socket.io-client')

if (process.argv[2] == null) {
 console.error('Please specify socket.io server address in valid URL. E.g. http://host:port');
 process.exit(1);
}

var socket = io(process.argv[2])

console.log(process.argv[2])

socket.on('connect', function(){
 console.log(' i am connecting....')

  setInterval(() => {
    
    let newPrice = (Math.random() * 10).toFixed(2);

    console.log('Publish ' + newPrice)

    socket.emit('price-queue', {
     price: newPrice,
     timestamp: new Date()
    });

  }, 3000)

});

socket.on('event', function(data){
 console.log(' i am receiving....')
});

socket.on('disconnect', function(){
 console.log(' i am disconnecting....')

});