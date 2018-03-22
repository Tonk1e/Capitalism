// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const money = require('./plugins/money.js')
const games = require('./plugins/games.js')
var system = require('./plugins/system.js')
const userInfo = require('./plugins/userInfo.js')
const politics = require('./plugins/politics.js')
const help = require('./plugins/help.js')

// other requirements
const fs = require('fs')
const query = require('./query.js')
const http = require('http')
const port1 = 1000
const port2 = 1500;
const uptimeFile = fs.readFileSync('plugins/data/uptime.json')
var uptime = JSON.parse(uptimeFile)


// main
const requestHandler = (request, response) =>{
	var system = require('./plugins/system.js')
	response.end(system.getSysEmbed())
}

var incrementSecs = () =>{
	if(uptime["secs"] == 60){
		uptime["secs"] = 0
		uptime["mins"] = uptime["mins"] + 1
	}
	if(uptime["mins"] == 60){
		uptime["mins"] = 0
		uptime["hrs"] = uptime["hrs"] + 1
	}
	if(uptime["hrs"] == 24){
		uptime["hrs"] = 0
		uptime["days"] = uptime["days"] + 1
		uptime["daysBool"] = true
	}
	uptime["secs"] = uptime["secs"] + 1
	fs.writeFile('plugins/data/uptime.json', JSON.stringify(uptime, null, 2));
}

var getUptime = (x) =>{
	uptimeHrs = uptime["hrs"] + ' hrs '
	uptimeMins = uptime["mins"] + ' mins '
	uptimeSecs = uptime["secs"] + ' secs'
	console.log(uptimeHrs)
	console.log(uptimeMins)
	console.log(uptimeSecs)
	uptime_ = uptimeHrs + uptimeMins + uptimeSecs
	console.log(uptime_)
	return uptime_
}

var updateStatus = () =>{
	uptimeHrs = uptime["hrs"] + ' hrs '
	uptimeMins = uptime["mins"] + ' mins '
	uptimeSecs = uptime["secs"] + ' secs'
	uptime_ = uptimeHrs + uptimeMins + uptimeSecs
	bot.user.setGame(uptime_)
}

var startUpMessage1 = () =>{
	bot.user.setGame("You")
}

var startUpMessage2 = () =>{
	bot.user.setGame("Are")
}

var startUpMessage3 = () =>{
	bot.user.setGame("Gay.")
}

var startUpMessage = (int) =>{
	if(int == 1){
		startUpMessage1()
	}else if(int == 2){
		startUpMessage2()
	}else if(int == 3){
		startUpMessage3()
	}
}

var welcome = (x) =>{
	x.send("Hello @everyone! My name is Capitalism. I have a few features that I think you'll like.")
	help.welcomeHelp(x)
}

var ownerMessage = (x, y) =>{
	embed = new discord.RichEmbed()
	text = ""
	text += ":wave: Hello, @"
	text += x.user.username
	text += "#"
	text += x.user.discriminator
	text += ". Thank you for adding me to `"
	text += y.name
	text += "`"
	embed.setTitle(text)
	x.send(embed)
}
bot.on('ready', () =>{
	bot.user.setStatus('dnd')
	bot.user.setGame("with money.")
	for (guild in bot.guilds){
		for (channel in guild.channels){
			console.log(channel.type)
			if(channel.type == 'text'){
				channel.sendMessage('I am online and ready for the private ownership of the means of production.')
			}else{
				return
			}
		}
	}
	uptime["secs"] = 0
	uptime["mins"] = 0
	uptime["hrs"] = 0
	uptime["days"] = 0
	uptime["daysBool"] = false
	fs.writeFile('plugins/data/uptime.json', JSON.stringify(uptime, null, 2));
	setInterval(incrementSecs, 1000)
});
bot.on('guildCreate', (guild) =>{
	console.log(guild.owner.lastMessage)
	ownerMessage(guild.owner, guild)
	welcome(guild.owner.lastMessage.channel)
})
bot.on('message', (message) => {
	money.incrementCounter(message.author)
	var check = money.checkAndUpdateBalance(message.author)
	switch(check){
		case 1:{
			message.reply("You have received your pay.")
		}
		case 2:{
			message.reply("Interest has been payed on the money in your account.")
		}
	}
	query.query(message, message.content)
	if(message.content.startsWith('/play')){
		games.playGame(message)
	}
	if(message.content.startsWith('/changewage')){
		if(message.author.id == '292556142952054794'){
			id = message.content.substr(12, 18)
			console.log(id)
			amount = message.content.substr(31)
			console.log(amount)
			wageChange = money.changeWage(amount, id)
			message.reply(wageChange)
		}else{
			return
		}
	}
});

module.exports.getUptime = getUptime
