// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')

// main
var ftpHelp = (x) =>{
	embed = new discord.RichEmbed()
	fs.readdirSync('/home/ftp/').forEach(file => {
		fs.lstat(file, (err, stats) => {
	    if(err)
	        return console.log(err); //Handle error
	    if(stats.isDirectory()){
	    	embed.addField(file)
	    }
	});
	x.channel.send(embed)
}
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
			switch(file){
				case '/home/ftp/':{
					ftpHelp(x)
					break
				}
				default:{
					ftp(x, file)
					break
				}
			}
		}
		case '337333673781100545':{
			switch(file){
				case '/home/ftp/':{
					ftpHelp(x)
					break
				}
				default:{
					ftp(x, file)
					break
				}
			}
		}
		default:{
			x.reply("Not yours tosspot.")
		}
	}
}

module.exports.handleFtpRequest = handleFtpRequest