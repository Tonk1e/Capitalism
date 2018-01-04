// discord
const discord = require('discord.js')
const bot = new discord.Client()

// plugins
const music = require('./plugins/music.js')
const ban = require('./plugins/ban.js')
const money = require('./plugins/money.js')

// other requirements
const fs = require('fs')
const infoFile = fs.readFileSync('info.json')
const info = JSON.parse(infoFile)
const discordJSFile = fs.readFileSync('node_modules/discord.js/package.json')
const discordJS = JSON.parse(discordJSFile)
const secretsFile = fs.readFileSync('secrets.json')
const secrets = JSON.parse(secretsFile)

// main
bot.on('ready', () =>{
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
});
bot.on('message', (message) => {
	if(message.content == '/hello'){
		message.reply('Hello there.')
		var getWage = money.getWage(message.author.id)
		if(getWage == false){
			return
		}else{
			var wageMessage = "You are currently making " + getWage + " USD per day."
			message.channel.sendMessage(wageMessage)
		}
	}
	if(message.content == '/helpme'){
		person = message.author
		console.log(person)
		person.send('no')
	}
	if(message.content == '/helpme?'){
		person = message.author
		console.log(person)
		person.send('no')
		message.channel.send(person)
	}
	if(message.content == '/ban'){ 
		if(message.author.id == '292556142952054794'){
			var waitingForBanID = true
			message.reply('tell me who to ban then')
			const filter = message.author.id.startsWith(292556142952054794)
			idStr = message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
			id = parseInt(idStr)
			ban.ban(id)
		}
	}

	if(message.content == '/info'){
		embed = new discord.RichEmbed()
		embed.setTitle('Bot Info')
		embed.setColor('ORANGE')
		embed.addField("Creator", info["creator"])
		embed.addField("Bot Version", info["version"])
		embed.addField("discord.js Version", discordJS["version"])
		embed.addField("Language", info["language"])
		message.channel.sendEmbed(embed)
	}
	if(message.content == '/nomore'){
		if(message.author.id == '292556142952054794'){
			bot.destroy()
		}
	}
	if(message.content == '/wage'){
		var wageEmbed = money.getWageEmbed(message.author.id, message.author)
		message.channel.sendEmbed(wageEmbed)
	}
});

bot.login(secrets["token"])