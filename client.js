const io = require('socket.io-client')

if (process.argv[2] == null) {
 console.error('Please specify socket.io server address in valid URL. E.g. http://host:port');
 process.exit(1)
}
const socket = io(process.argv[2])

console.log('[' +  process.argv[3] + ']')

if (process.argv[3] != null && isNaN(Number(process.argv[3]))) {
 console.error('Interval allow interger only')
 process.exit(1)
} 
let interval = process.argv[3] || 10000 // 10 seconds default

console.log('Price data is generating at every ' + interval + ' milliseconds')

socket.on('connect', function(){
 console.log('Established connection!')

  setInterval(() => {
    let newPrice = (Math.random() * 10).toFixed(2)
    let datetime = new Date()

    console.log('Publish ' + newPrice + ' at ' + datetime)

    socket.emit('price-queue', {
     price: newPrice,
     timestamp: datetime
    });
  }, interval)
});

socket.on('event', function(data){
 console.log('Receiving feedback ....')
});

socket.on('disconnect', function(){
 console.log('Being disconnecting ....')
});