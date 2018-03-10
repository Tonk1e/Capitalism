// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')

// main
var ftp = (x, file) =>{
	if(fs.existsSync(file)){
		x.reply("Here is the file you requested.")
		x.channel.send({files:[{attachment: file}]})
	}else{
		x.reply("That file does not exist on the server.")
	}
}

var handleFtpRequest = (x, file) =>{
	switch(x.author.id){
		case '292556142952054794':{
			ftp(x, file)
			break
		}
		case '337333673781100545':{
			ftp(x, file)
			break
		}
		default:{
			x.reply("Not for you, tosspot.")
		}
	}
}

module.exports.handleFtpRequest = handleFtpRequest