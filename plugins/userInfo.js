// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const wagesFile = fs.readFileSync('plugins/data/wages.json')
const wages = JSON.parse(wagesFile)

// main
var getUserEmbed = (user) =>{
	userEmbed = new discord.RichEmbed()
	userEmbed.setTitle(user.username + '#' + user.discriminator + "'s Info")
	userEmbed.setColor('ORANGE')
	userEmbed.setThumbnail(user.avatarURL)
	userEmbed.addField('Username', user.username)
	userEmbed.addField('Discriminator', user.discriminator)
	userEmbed.addField('ID', user.id)
	userEmbed.addField('Last Message', user.lastMessage)
	userEmbed.addField('Joined Discord on', user.createdAt)
	userEmbed.addField('Bot', user.bot)
	userEmbed.addField('Status', user.presence)
	return userEmbed
}

var getUserAvatar = (x) =>{
	avatar = x.avatarURL
	return avatar
}

var sendUserAvatar = (x) =>{
	avatar = getUserAvatar(x.author)
	x.channel.send(avatar)
}

module.exports.getUserEmbed = getUserEmbed
module.exports.sendUserAvatar = sendUserAvatar