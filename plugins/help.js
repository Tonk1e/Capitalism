// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// main
var economicsHelp = (x, embed) =>{
	moneyCommands = ['/bal', '/status', '/register', '/shop', '/buy', '/check']
	moneyCommandsUse = [
	'Check your bank account balance.', 
	'Check your status is terms of class, income, and employment.', 
	'Register for a bank account.', 
	'See what is available for purchase with the next command.',
	"Purchase an item from the shop using it's ID. For example, `/buy 2`.",
	'Check what is currently required of you to receive your next pay.']
	embed.setTitle("Economics Help")
	embed.setColor('ORANGE')
	var i
	for(i=0;i<moneyCommands.length;i++){
		embed.addField(moneyCommands[i], moneyCommandsUse[i])
	}
	x.channel.send(embed)
}

var stockHelp = (x, embed) =>{
	symbols = ['btc', 'eth', 'xrp', 'bch', 'doge', 'ltc', 'neo']
	symbolFuncs = ['Bitcoin', 'Ethereum', 'Ripple', 'Bitcoin-Cash', 'Dogecoin', 'Litecoin', 'NEO']
	var i
	embed.setTitle('Stocks Help')
	embed.setColor('ORANGE')
	embed.setDescription("The stocks command is for returning information about different markets. Following is a list of commands that can be used.")
	embed.addField('/markets', "Returns all market information.")
	for(i=0;i<symbols.length;i++){
		embed.addField('/stock ' + symbols[i], "Returns market information about " + symbolFuncs[i] + ".")
	}
	x.channel.send(embed)
}

var politicsHelp = (x, embed) =>{
	politicsCommands = ['/beliefs', '/belief', '/parties', '/party', '/politics']
	politicsCommandsUse = [
	'Lists all available ideological groups that you can become a part of. They are numbered with IDs that you will use with the next command.',
	'Changes your current ideological group. Use an ID from the previous command to be assigned to the group that the selected ID corresponds with. For example, `/belief 1`',
	'Lists all available parties that you can become a part of. They are numbered with IDs that you will use with the next command.',
	'Changes your current party. Use an ID from the previous command to be assigned to the party that the selected ID corresponds with. For example, `/party 1`',
	'Shows your current party and ideological group.'
	]
	embed.setTitle("Politics Help")
	embed.setColor('ORANGE')
	embed.setDescription("NOTE: This plugin is having issues right now, so it may not work correctly. This will be patched soon.")
	var i
	for(i=0;i<politicsCommands.length;i++){
		embed.addField(politicsCommands[i], politicsCommandsUse[i])
	}
	x.channel.send(embed)
}

var musicHelp = (x, embed) =>{
	musicCommands = ['/jazz']
	musicCommandsUse = [
	'Plays jazz.'
	]
	embed.setTitle("Music Help")
	embed.setColor('ORANGE')
	embed.setDescription("NOTE: This plugin hasn't been worked on that much, thus the plugin does work. It has issues when running on a Linux based OS, and it is only working with systems running with an NT based OS.")
	var i
	for(i=0;i<musicCommands.length;i++){
		embed.addField(musicCommands[i], musicCommandsUse[i])
	}
	x.channel.send(embed)
}

var computerScienceHelp = (x, embed) =>{
	var parts = ["ram", "hdd", "cpu", "ssd", "mobo"]
	var partNames = ["RAM", "Hard Drives", "CPUs", "Solid State Drives", "Motherboards"]
	var helpEmbed = new discord.RichEmbed()
	embed.setTitle("Computer Science Help")
	embed.setColor('ORANGE')
	embed.setDescription("This command is used to give information about different computing parts.")
	var i
	for(i=0;i<parts.length;i++){
		embed.addField('/pc ' + parts[i], "Returns information about " + partNames[i] + ".")
	}
	x.channel.send(embed)
}

var sendHelp = (x) =>{
	embed = new discord.RichEmbed()
	embed.setTitle("Help")
	embed.setColor('ORANGE')
	embed.setDescription("There are many different aspects of this bot. This command is to teach you how to use them. Following is a list of the different aspects of this bot.")
	aspects = ["Economics", "Stocks", "Politics", "Music", "Computer Science"]
	var i
	for(i=0;i<aspects.length;i++){
		embed.addField(aspects[i], "---")
	}
	x.reply("I sent the help embeds in your DMs. You better fucking read 'em.")
	x.author.send(embed)
	economicsHelp(x, new discord.RichEmbed())
	stockHelp(x, new discord.RichEmbed())
	politicsHelp(x, new discord.RichEmbed())
	musicHelp(x, new discord.RichEmbed())
	computerScienceHelp(x, new discord.RichEmbed())
}

module.exports.sendHelp = sendHelp