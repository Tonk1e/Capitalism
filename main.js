// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const money = require('./plugins/money.js')

// other requirements
const query = require('./query.js')
const uptimeFile = fs.readFileSync('plugins/data/uptime.json')
var uptime = JSON.parse(uptimeFile)

// main
var incrementSecs = () =>{
	if(uptime["secs"] == 60){
		uptime["secs"] = 0
		uptime["mins"] = uptime["mins"] + 1
	}
	if(uptime["mins"] == 60){
		uptime["mins"] = 0
		uptime["hrs"] = uptime["hrs"] + 1
	}
	if(uptime["hrs"] == 24){
		uptime["hrs"] = 0
		uptime["days"] = uptime["days"] + 1
		uptime["daysBool"] = true
	}
	uptime["secs"] = uptime["secs"] + 1
	fs.writeFile('plugins/data/uptime.json', JSON.stringify(uptime, null, 2));
}

var getUptime = (x) =>{
	uptimeHrs = uptime["hrs"] + ' hrs '
	uptimeMins = uptime["mins"] + ' mins '
	uptimeSecs = uptime["secs"] + ' secs'
	console.log(uptimeHrs)
	console.log(uptimeMins)
	console.log(uptimeSecs)
	uptime_ = uptimeHrs + uptimeMins + uptimeSecs
	console.log(uptime_)
	return uptime_
}

var updateStatus = () =>{
	uptimeHrs = uptime["hrs"] + ' hrs '
	uptimeMins = uptime["mins"] + ' mins '
	uptimeSecs = uptime["secs"] + ' secs'
	uptime_ = uptimeHrs + uptimeMins + uptimeSecs
	bot.user.setGame(uptime_)
}

var startUpMessage1 = () =>{
	bot.user.setGame("You")
}

var startUpMessage2 = () =>{
	bot.user.setGame("Are")
}

var startUpMessage3 = () =>{
	bot.user.setGame("Gay.")
}

var startUpMessage = (int) =>{
	if(int == 1){
		startUpMessage1()
	}else if(int == 2){
		startUpMessage2()
	}else if(int == 3){
		startUpMessage3()
	}
}

bot.on('ready', () =>{
	bot.user.setStatus('dnd')
	bot.user.setGame("with money.")
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
	uptime["secs"] = 0
	uptime["mins"] = 0
	uptime["hrs"] = 0
	uptime["days"] = 0
	uptime["daysBool"] = false
	fs.writeFile('plugins/data/uptime.json', JSON.stringify(uptime, null, 2));
	setInterval(incrementSecs, 1000)
});
bot.on('message', (message) => {
	money.incrementCounter(message.author)
	var check = money.checkAndUpdateBalance(message.author)
	switch(check){
		case 1:{
			message.reply("You have received your pay.")
		}
		case 2:{
			message.reply("Interest has been payed on the money in your account.")
		}
	}
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

module.exports.getUptime = getUptime