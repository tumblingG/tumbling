var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
	service: 'qq',
	auth: {
		user: '1101258845@qq.com',
		pass: 'ykzhgsqbqynqjiga'
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/email', function(req, res, next) {
	// console.log(req);
	
	var email = req.body.email;
	var name = req.body.name;
	var subject = req.body.subject;
	var message = req.body.content;
	console.log(email);
	//setup email data with unicode symbols
	var mailOption = {
		from: '1101258845@qq.com',
		to: email,
		secureConnection: true,
		port: 465,
		subject: subject,
		text: 'we have recived your email!'
	};

	// send mail with defined transport object
	transporter.sendMail(mailOption, function (err, info) {
		if (err) {
			return console.log(err);
		}
		 console.log('Message %s sent: %s', info.messageId, info.response);
		 res.send(200,'已经收到邮件');
	});

});


module.exports = router;
