var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var http = require('http');
var url = require('url');
const fs = require('node:fs');

var csv = require('jquery-csv');

let events_csv;
try {
  events_csv = fs.readFileSync('./data/events.csv', 'utf8');
  events_csv = csv.toArrays(events_csv);
  events_csv.splice(0,1);
} catch (err) {
  console.error(err);
}

var transporter = nodemailer.createTransport({
    service:'GMail',
    auth: {
        user:'salace2008765@outlook.com',
        pass: 'alice123@'
   }
});
var mailOptions = {
    from:'salace2008765@outlook.com',
    to: 'jerome20090101@gmail.com',
    subject: 'This is a test: test',
    text:'TgK'
}

function generateMailOptions(subject, body){
  // TODO comp this
  var mailOptions = {
    from:'',
    to: '',
    subject: subject,
    text: body
  }
  return mailOptions;
}

router.post('/contact',function(req,res,next){
  var subject = req.body.subject;
  var body = req.body.body;
  var mailOptions = generateMailOptions(subject,body);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response)
    }
  })


})

router.get('/event-list',function(req,res,next){
  res.send(events_csv);
})

module.exports = router;
