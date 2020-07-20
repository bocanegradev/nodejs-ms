// document.getElementById("linkActivo").addEventListener("click", enviarMensajeWA);

require('dotenv').config();
const twilio = require('twilio');
console.log();
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// client.messages.create({
//     to: 'whatsapp:+573506854921',
//     from: 'whatsapp:+14155238886',
//     body: 'Segunda forma ;)',
//     mediaUrl: 'https://images.unsplash.com/photo-1510577804152-feaaa3ecb296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
// })
//     .then(message => {
//         console.log(message.sid)
//     })

//     .catch(err => {
//         console.log(err)
//     });



function enviarMensajeWA() {
    client.messages.create({
        to: 'whatsapp:+573506854921',
        from: 'whatsapp:+14155238886',
        body: 'Eviando desde el servidor :)',
        mediaUrl: 'https://images.unsplash.com/photo-1510577804152-feaaa3ecb296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    })
        .then(message => {
            console.log(message.sid)
        })

        .catch(err => {
            console.log(err)
        });
}
enviarMensajeWA();


// require('dotev').config();

// const accSID = process.env.ACCOUNT_SID;
// const auTK = process.env.AUTH_TOKEN;

// const client = require('twilio')(accSID, auTK);
// client.messages.create({
//     to: process.env.TO_NUMBER,
//     from: process.env.FROM_NUMBER,
//     body: 'Hello my lovely friend!'
// }).then(message => console.log(message.sid));