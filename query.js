// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const music = require('./plugins/music.js')
const ban = require('./plugins/ban.js')
const money = require('./plugins/money.js')
const shop = new money.shop()
const system = require('./plugins/system.js')
const userInfo = require('./plugins/userInfo.js')
const ping = require('./plugins/ping.js')
const setup = require('./plugins/botSetup.js')
const random = require('./plugins/random.js')
const games = require('./plugins/games.js')
const yt = require('./plugins/youtube.js')
const pc = require('./plugins/computing.js')
const politics = require('./plugins/politics.js')
const market = require('./plugins/market.js')

// other requirements
const fs = require('fs')
const infoFile = fs.readFileSync('info.json')
const info = JSON.parse(infoFile)
const discordJSFile = fs.readFileSync('node_modules/discord.js/package.json')
const discordJS = JSON.parse(discordJSFile)
const secretsFile = fs.readFileSync('secrets.json')
const secrets = JSON.parse(secretsFile)
const pluginsFile = fs.readFileSync('./plugins/plugins.json')
const plugins = JSON.parse(pluginsFile)
const commandsFile = fs.readFileSync('./plugins/data/commands.json')
var commands = JSON.parse(commandsFile)

var incrementCommandUse = (id) =>{
	commands[id] += 1
	fs.writeFile('./plugins/data/commands.json', JSON.stringify(commands, null, 2))
}

var query = (x, y) =>{
	switch(y){
		case '/hello':{
			incrementCommandUse(x.author.id)
			x.reply('Hello there.')
			var getWage = money.getWage(x.author.id)
			switch(getWage){
				case false:{
					break
				}
				default:{
					var wM = "You are currently making " + getWage + " USD per 100 messages."
					x.channel.send(wM)
				}
			}
			break
		}
		case '/jazz':{
			incrementCommandUse(x.author.id)
			if(x.member.voiceChannel){
				x.reply("Here's some jazz for you.")
				music.jazz(x.member.voiceChannel, x)
			}else{
				break
			}
			break
		}
		case '/myself':{
			incrementCommandUse(x.author.id)
			userEmbed = userInfo.getUserEmbed(x.author)
			x.channel.sendEmbed(userEmbed)
			break
		}
		case '/wage':{
			incrementCommandUse(x.author.id)
			wageEmbed = money.getWageEmbed(x.author.id, x.author)
			x.channel.sendEmbed(wageEmbed)
			break
		}
		case '/status':{
			incrementCommandUse(x.author.id)
			statusEmbed = money.getStatusEmbed(x.author)
			x.channel.sendEmbed(statusEmbed)
			break
		}
		case '/changewage':{
			incrementCommandUse(x.author.id)
			if(x.author.id == '292556142952054794'){
				id = x.content.substr(13, 18)
				amount = x.content.substr(20)
				money.changeWage(amount, id)
				break
			}else{
				break
			}
		}
		case '/sys':{
			incrementCommandUse(x.author.id)
			var system = require('./plugins/system.js')
			sysEmbed = system.getSysEmbed()
			x.channel.sendEmbed(sysEmbed)
			break
		}
		case '/ping':{
			incrementCommandUse(x.author.id)
			ping.ping(x)
			break
		}
		case '/avatar':{
			incrementCommandUse(x.author.id)
			userInfo.sendUserAvatar(x)
			break
		}
		case '/setup':{
			incrementCommandUse(x.author.id)
			setup.startBotSetup(x)
			break
		}
		case '/token':{
			incrementCommandUse(x.author.id)
			setup.getToken(x)
			break
		}
		case '/register':{
			incrementCommandUse(x.author.id)
			money.createAccount(x)
			break
		}
		case '/bal':{
			incrementCommandUse(x.author.id)
			accEmbed = money.accountEmbed(x.author)
			x.channel.send(accEmbed)
			break
		}
		case '/check':{
			incrementCommandUse(x.author.id)
			money.returnCounterEmbed(x)
			break
		}
		case '/bye':{
			incrementCommandUse(x.author.id)
			if(x.author.id == '292556142952054794'){
				bot.destroy()
			}
			break
		}
		case '/reset':{
			incrementCommandUse(x.author.id)
			money.economyReset(x)
			break
		}
		case '/shop':{
			incrementCommandUse(x.author.id)
			shop.shopEmbed(x)
			break
		}
		case '/pass':{
			incrementCommandUse(x.author.id)
			games.passEmbed(x)
			break
		}
		case '/politics':{
			incrementCommandUse(x.author.id)
			politics.beliefEmbed(x)
			break
		}
		case '/beliefs':{
			incrementCommandUse(x.author.id)
			politics.beliefsEmbed(x)
			break
		}
		case '/parties':{
			incrementCommandUse(x.author.id)
			politics.partiesEmbed(x)
			break
		}
		case '/referendum':{
			incrementCommandUse(x.author.id)
			politics.startReferendum(x)
			break
		}
		case '/card':{
			card = userInfo.createProfileCard(x)
			x.channel.send(card)
			break
		}
		case '/run':{
			incrementCommandUse(x.author.id)
			userInfo.commandsRun(x)
			break
		}
		case '/markets':{
			markets.returnMarkets(x)
			break
		}
		default:{
			break
		}
	}
	if(y.startsWith('/transfer')){
		var id = y.substr(11, 28)
		var amount = y.substr(30)
		var transfer = money.transfer(x.author.id, id, amount)
		x.reply(transfer)
	}
	if(y.startsWith('/belief') && y != "/beliefs"){
		incrementCommandUse(x.author.id)
		belief = y.substr(8)
		console.log(belief)
		politics.updateBelief(x, x.author.id, belief)
	}
	if(y.startsWith('/party')){
		incrementCommandUse(x.author.id)
		party = y.substr(7)
		console.log(party)
		politics.updateParty(x, x.author.id, party)
	}
	if(y.startsWith('/pc')){
		incrementCommandUse(x.author.id)
		console.log("yay.")
		pc.main(x)
	}
	if(y.startsWith('/vidinfo')){
		incrementCommandUse(x.author.id)
		yt.videoEmbed(x)
	}
	if(y.startsWith('/acc')){
		incrementCommandUse(x.author.id)
		money.returnID(x)
	}
	if(y.startsWith('/copy')){
		incrementCommandUse(x.author.id)
		random.copy(x)
	}
	if(y.startsWith('/buy')){
		incrementCommandUse(x.author.id)
		var itemID = parseInt(y.substr(5))
		buyFunc = shop.buy(x, itemID, x.author.id)
		x.reply(buyFunc)
	}
	if(y.startsWith('/stock')){
		inst = y.substr(7)
		market.getInstrument(x, inst)
	}
}

module.exports.query = query
