// discord
const discord = require('discord.js')
const bot = new discord.Client()

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

module.exports.getUserEmbed = getUserEmbed