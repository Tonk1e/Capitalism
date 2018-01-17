// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// main
var ping = (x) =>{
	x.reply("I'm here! Here's some info...")
	x.channel.startTyping()
	x.channel.stopTyping()
	uptimeSecs = bot.uptime / 1000
	uptimeMins = uptimeSecs / 60
	uptimeHrs = uptimeMins / 60
	uptime = (Math.floor(uptimeHrs) + ' hrs ' + Math.floor(uptimeMins) + ' mins ' + Math.floor(uptimeSecs) + ' secs ')
	ping = bot.pings[0]
	embed = new discord.RichEmbed()
	embed.setTitle('Bot Info')
	embed.setColor('ORANGE')
	embed.addField('Ping', ping + ' ms')
	embed.addField('Status', bot.status)
	embed.addField('Uptime', uptime)
	x.channel.sendEmbed(embed)
}

module.exports.ping = ping