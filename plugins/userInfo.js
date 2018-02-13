// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const wagesFile = fs.readFileSync('plugins/data/wages.json')
const wages = JSON.parse(wagesFile)
var commandsFile = fs.readFileSync('./plugins/data/commands.json')
var commands = JSON.parse(commandsFile)
var profilesFile = fs.readFileSync('./plugins/data/profiles.json')
var profiles = JSON.parse(profilesFile)

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

var incrementCommandUse = (id) =>{
	if(id in commands){
		commands[id] += 1
	}else{
		 commands[id] = 1
	}
	fs.writeFile('plugins/data/commands.json', JSON.stringify(commands, null, 2))
}

var createProfileCard = (x) =>{
	var profileCard = new discord.RichEmbed()
	profileCard.setTitle(x.author.username + "'s Profile Card")
	profileCard.setColor('ORANGE')
	profileCard.setThumbnail(x.author.avatarURL)
	profileCard.addField("ID", x.author.id)
	profileCard.addField("Last Message", x.author.lastMessage)
	profileCard.addField("Created At", x.author.createdAt)
	profiles[x.author.id] = profileCard
	fs.writeFile('plugins/data/profiles.json', JSON.stringify(profiles), null, 2)
	return profileCard
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
module.exports.createProfileCard = createProfileCard
