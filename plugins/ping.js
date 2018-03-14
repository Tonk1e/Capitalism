// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
var main = require('../main.js')
fs = require('fs')
var uptimeFile = fs.readFileSync('plugins/data/uptime.json')
var uptime = JSON.parse(uptimeFile)
const infoFile = fs.readFileSync('info.json')
var info = JSON.parse(infoFile)

// main
var getUptime = (x) =>{
	uptimeHrs = uptime["hrs"]
	uptimeMins = uptime["mins"]
	uptimeSecs = uptime["secs"]
	console.log(uptimeHrs)
	console.log(uptimeMins)
	console.log(uptimeSecs)
	uptime_ = uptime["secs"]
	console.log(uptime_)
	return uptime_
}
var ping = (x) =>{
	if(uptime["days"] >= 1){
		console.log(bot.users.array())
		console.log(bot.guilds.array())
		x.reply("I'm here! Here's some info...")
		uptime_ = getUptime(x)
		ping = bot.pings[0]
		embed = new discord.RichEmbed()
		embed.setTitle('Bot Info')
		embed.setColor('ORANGE')
		embed.addField('Ping', ping + ' ms')
		embed.addField('Current Machine', info["machine"])
		embed.addField('Uptime', uptime["days"] + ' days ' + main.getUptime(x))
		var currentGuilds = 0
		for(var i in bot.guilds.array()){
			currentGuilds++
		}
		embed.addField("Current Guilds", currentGuilds)
		var botUsers = 0
		var onlineUsers = 0
		for(var i in bot.users.array()){
			botUsers++
		}
		for(var i in bot.users){
			if(i.presence.status == 'online'){
				onlineUsers++
			}
		}
		embed.addField("Users", botUsers)
	}else{
		console.log(bot.users.array())
		console.log(bot.guilds.array())
		x.reply("I'm here! Here's some info...")
		uptime_ = getUptime(x)
		ping = bot.pings[0]
		embed = new discord.RichEmbed()
		embed.setTitle('Bot Info')
		embed.setColor('ORANGE')
		embed.addField('Ping', ping + ' ms')
		embed.addField('Current Machine', info["machine"])
		embed.addField('Uptime', main.getUptime(x))
		var currentGuilds = 0
		for(var i in bot.guilds.array()){
			currentGuilds++
		}
		embed.addField("Current Guilds", currentGuilds)
		var botUsers = 0
		var onlineUsers = 0
		for(var i in bot.users.array()){
			botUsers++
		}
		for(var i in bot.users){
			if(i.presence.status == 'online'){
				onlineUsers++
			}
		}
		embed.addField("Users", botUsers)
	}
	x.channel.sendEmbed(embed)
}

module.exports.ping = ping
