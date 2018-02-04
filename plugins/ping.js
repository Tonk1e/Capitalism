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
	if(uptime["daysBool"] == true){
		x.reply("I'm here! Here's some info...")
		uptime_ = getUptime(x)
		ping = bot.pings[0]
		embed = new discord.RichEmbed()
		embed.setTitle('Bot Info')
		embed.setColor('ORANGE')
		embed.addField('Ping', ping + ' ms')
		embed.addField('Current Machine', info["machine"])
		embed.addField('Uptime', uptime["days"] + ' days ' + main.getUptime(x))
	}else{
		x.reply("I'm here! Here's some info...")
		uptime_ = getUptime(x)
		ping = bot.pings[0]
		embed = new discord.RichEmbed()
		embed.setTitle('Bot Info')
		embed.setColor('ORANGE')
		embed.addField('Ping', ping + ' ms')
		embed.addField('Current Machine', info["machine"])
		embed.addField('Uptime', main.getUptime(x))
	}
	x.channel.sendEmbed(embed)
}

module.exports.ping = ping