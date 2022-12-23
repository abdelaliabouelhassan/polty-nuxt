const express = require('express')
const app = express()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
//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
//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
app.get('/send', (req, res) => {
    const msg = {
        to: 'abdelaliabouelhassan@gmail.com',
        from: 'abdelaliabouelhassan@gmail.com',
        subject: 'Hello World',
        text: 'Hello World!',
        html: '<strong>Hello World!</strong>',
      };

    sgMail.send(msg)
    .then(() => {
        console.log('Email sent')
        res.send('Email sent')
    })
    .catch((error) => {
        console.error(error)
        res.send(error)
    })
})





module.exports = {
    path: '/api',
    handler: app
}


