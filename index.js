//npm run dev
const path = require('path')
const express = require ('express');
const app = express();


//Settings 
app.set('port', process.env.PORT || 3001)

app.use(express.static((path.join(__dirname, 'public'))))


//Server connection
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})


const socketIo = require('socket.io')
const io = socketIo(server)

// WEBSCOKETS 

io.on('connection', (socket) => {
    console.log('new connection --- Socket ID ---> ', socket.id)
})



