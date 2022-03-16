const socket = io()

// DOM Elements

let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', () => {
    console.log(username.value, message.value)
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    })
    
})

message.addEventListener('keypress', function () {
    socket.emit('chat:typing', username.value)
})


socket.on('chat:message', function (data){
    //Aca seteamos el output en blanco 
    actions.innerHTML = ''
    output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
    </p>`
})

socket.on('chat:typing', function (data) {
    actions.innerHTML = `<p><em>${data} is typing. ..</em></p> `
})
