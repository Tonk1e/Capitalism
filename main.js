// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const money = require('./plugins/money.js')

// other requirements
const query = require('./query.js')

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
	query.query(message, message.content)
	if(message.content.startsWith('/changewage')){
		if(message.author.id == '292556142952054794'){
			id = message.content.substr(12, 18)
			console.log(id)
			amount = message.content.substr(31)
			console.log(amount)
			wageChange = money.changeWage(amount, id)
			message.reply(wageChange)
		}else{
			return
		}
	}
});