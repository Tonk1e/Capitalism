// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const music = require('./plugins/music.js')
const ban = require('./plugins/ban.js')
const money = require('./plugins/money.js')
const system = require('./plugins/system.js')
const userInfo = require('./plugins/userInfo.js')

// other requirements
const fs = require('fs')
const infoFile = fs.readFileSync('info.json')
const info = JSON.parse(infoFile)
const discordJSFile = fs.readFileSync('node_modules/discord.js/package.json')
const discordJS = JSON.parse(discordJSFile)
const secretsFile = fs.readFileSync('secrets.json')
const secrets = JSON.parse(secretsFile)
const moneyTxt = fs.readFileSync('./money.txt')
const banTxt = fs.readFileSync('./ban.txt')
const pluginsFile = fs.readFileSync('./plugins/plugins.json')
const plugins = JSON.parse(pluginsFile)

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
	if(message.content == '/reload'){
		if(message.author.id == '292556142952054794'){
			message.channel.send('I shall be back.')
			message.channel.send('Goodbye.')
			bot.destroy()
			bot.login(secrets["token"])
		}
	}
	if(message.content == '/wage'){
		var wageEmbed = money.getWageEmbed(message.author.id, message.author)
		message.channel.sendEmbed(wageEmbed)
	}
	if(message.content == '/sys'){
		sysEmbed = system.getSysEmbed(message.author.avatarURL)
		message.channel.sendEmbed(sysEmbed)
		message.reply()
	}
	if(message.content == '/myself'){
		message.delete()
		userEmbed = userInfo.getUserEmbed(message.author)
		message.channel.sendEmbed(userEmbed)
	}
	if(message.content == '/profpic'){
		message.channel.sendMessage(message.author.avatarURL)
	}
	if(message.content == '/money -p'){
		if(plugins["money"] == "ready"){
			message.channel.sendCode('js', moneyTxt)
			message.channel.send('https://github.com/Tonk1e/Capitalism/blob/master/plugins/money.js')
			message.channel.send('All of the plugins are also on the GitHub repository.')
		}else{
			message.channel.send('That plugin is not ready for viewing.')
		}
	}
	if(message.content == '/ban -p'){
		if(plugins["ban"] == "ready"){
			message.channel.sendCode('js', banTxt)
			message.channel.send('https://github.com/Tonk1e/Capitalism/blob/master/plugins/ban.js')
			message.channel.send('All of the plugins are also on the GitHub repository.')
		}else{
			message.channel.send('That plugin is not ready for viewing.')
		}
	}
});