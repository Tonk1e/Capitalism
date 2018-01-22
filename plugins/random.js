// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

//main
var copy = (x) =>{
	if(x.author.id == '337333673781100545'){
		x.channel.send("I don't like **gay** people like **you**.")
	}else{
		var lastMessage = x.author.lastMessage
		x.channel.send(lastMessage.content.substr(6))
		lastMessage.delete()
	}
}

module.exports.copy = copy