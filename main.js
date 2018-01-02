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
		person.send('no')
	}
	if(message.content == '/ban'){
		if(message.author.id == '292556142952054794'){
			var waitingForBanID = true
			message.reply('tell me who to ban then')
			message.channel.awaitMessages()
		}
	}
	if(message.author.id == '292556142952054794'){
		var one = 1
		if(typeof parseInt(message.content) == typeof one){
			if(waitingForBanID){
				try{
					waitingForBanID = false
					id = parseInt(message.content)
					ban.ban(id)
					message.reply("ok den I'll do it")
				}catch(Exception){
					console.log(Exception)
				}
			}else{
				return
			}
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
});

bot.login(secrets["token"])