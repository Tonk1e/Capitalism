// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements

// main
var startBotSetup = (x) =>{
	console.log(x.channel.guild.me.permissions.FLAGS)
	if(x.author.id == x.channel.guild.ownerID){
		//if(!x.channel.guild.id in servers){
			//console.log(x.channel.guild.me.FLAGS)
		//}else{
			//x.channel.send("This server has already been setup.")
		//}
	}else{
		x.channel.send("You are not the owner of this server, peasant.")
		x.channel.send("Please ask " + x.channel.guild.owner.user.username + " to get this server setup if it isn't already.")
	}
}

var getToken = (x) =>{
	if(x.author.id == '292556142952054794'){
		x.author.send(bot.token)
	}else{
		x.channel.send("You are not authorised for this command.")
	}
}

module.exports.startBotSetup = startBotSetup
module.exports.getToken = getToken