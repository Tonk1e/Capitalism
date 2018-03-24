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
const help = require('./plugins/help.js')
const dev = require('./plugins/dev.js')
const ftp = require('./plugins/ftp.js')
const logging = require('./plugins/logging.js')
const business = require('./plugins/business.js')
const news = require('./plugins/news.js')

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
const nutFile = fs.readFileSync('./nut.txt')
var businessCache = JSON.parse(fs.readFileSync('./plugins/data/businessCache.json'))

runCommands = 0

var incrementCommandUse = (id) =>{
	runCommands += 1
	commands[id] += 1
	fs.writeFile('./plugins/data/commands.json', JSON.stringify(commands, null, 2))
}

var query = (x, y) =>{
	switch(y){
		case '/hello':{
			logging.loggingHandler(x, '/nut', 'nut.nut(x)')
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
			logging.loggingHandler(x, '/jazz', 'music.jazz(x.member.voiceChannel, x)')
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
			logging.loggingHandler(x, '/myself', 'userInfo.getUserEmbed(x.author)')
			incrementCommandUse(x.author.id)
			userEmbed = userInfo.getUserEmbed(x.author)
			x.channel.sendEmbed(userEmbed)
			break
		}
		case '/wage':{
			logging.loggingHandler(x, '/wage', 'money.getWageEmbed(x.author.id, x.author)')
			incrementCommandUse(x.author.id)
			wageEmbed = money.getWageEmbed(x.author.id, x.author)
			x.channel.sendEmbed(wageEmbed)
			break
		}
		case '/status':{
			logging.loggingHandler(x, '/status', 'money.getStatusEmbed(x.author)')
			incrementCommandUse(x.author.id)
			statusEmbed = money.getStatusEmbed(x.author)
			x.channel.sendEmbed(statusEmbed)
			break
		}
		case '/changewage':{
			logging.loggingHandler(x, '/changewage', 'nut.nut(x)')
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
			logging.loggingHandler(x, '/sys', 'system.getSysEmbed()')
			incrementCommandUse(x.author.id)
			var system = require('./plugins/system.js')
			sysEmbed = system.getSysEmbed()
			x.channel.sendEmbed(sysEmbed)
			break
		}
		case '/ping':{
			logging.loggingHandler(x, '/ping', 'ping.ping(x)')
			incrementCommandUse(x.author.id)
			ping.ping(x, runCommands)
			break
		}
		case '/avatar':{
			logging.loggingHandler(x, '/avatar', 'userInfo.sendUserAvatar(x)')
			incrementCommandUse(x.author.id)
			userInfo.sendUserAvatar(x)
			break
		}
		case '/setup':{
			logging.loggingHandler(x, '/setup', 'setup.startBotSetup(x)')
			incrementCommandUse(x.author.id)
			setup.startBotSetup(x)
			break
		}
		case '/token':{
			logging.loggingHandler(x, '/token', 'setup.getToken(x)')
			incrementCommandUse(x.author.id)
			setup.getToken(x)
			break
		}
		case '/register':{
			logging.loggingHandler(x, '/register', 'money.createAccount(x)')
			incrementCommandUse(x.author.id)
			money.createAccount(x)
			break
		}
		case '/bal':{
			logging.loggingHandler(x, '/bal', 'money.accountEmbed(x.author)')
			incrementCommandUse(x.author.id)
			accEmbed = money.accountEmbed(x.author)
			x.channel.send(accEmbed)
			break
		}
		case '/check':{
			logging.loggingHandler(x, '/check', 'money.returnCounterEmbed(x)')
			incrementCommandUse(x.author.id)
			money.returnCounterEmbed(x)
			break
		}
		case '/bye':{
			logging.loggingHandler(x, '/bye', 'bot.destroy()')
			incrementCommandUse(x.author.id)
			if(x.author.id == '292556142952054794'){
				bot.destroy()
			}
			break
		}
		case '/reset':{
			logging.loggingHandler(x, '/reset', 'money.economyReset(x)')
			incrementCommandUse(x.author.id)
			money.economyReset(x)
			break
		}
		case '/shop':{
			logging.loggingHandler(x, '/shop', 'shop.shopEmbed(x)')
			incrementCommandUse(x.author.id)
			shop.shopEmbed(x)
			break
		}
		case '/pass':{
			logging.loggingHandler(x, '/pass', 'games.passEmbed(x)')
			incrementCommandUse(x.author.id)
			games.passEmbed(x)
			break
		}
		case '/politics':{
			logging.loggingHandler(x, '/politics', 'politics.beliefEmbed(x)')
			incrementCommandUse(x.author.id)
			politics.beliefEmbed(x)
			break
		}
		case '/beliefs':{
			logging.loggingHandler(x, '/beliefs', 'nut.nut(x)')
			incrementCommandUse(x.author.id)
			politics.beliefsEmbed(x)
			break
		}
		case '/parties':{
			logging.loggingHandler(x, '/parties', 'politics.partiesEmbed(x)')
			incrementCommandUse(x.author.id)
			politics.returnParties(x)
			break
		}
		case '/referendum':{
			logging.loggingHandler(x, '/referendum', 'politics.startReferendum(x)')
			incrementCommandUse(x.author.id)
			politics.startReferendum(x)
			break
		}
		case '/card':{
			logging.loggingHandler(x, '/card', 'userInfo.createProfileCard(x)')
			card = userInfo.createProfileCard(x)
			x.channel.send(card)
			break
		}
		case '/run':{
			logging.loggingHandler(x, '/run', 'userInfo.commandsRun(x)')
			incrementCommandUse(x.author.id)
			userInfo.commandsRun(x)
			break
		}
		case '/markets':{
			logging.loggingHandler(x, '/markets', 'market.returnMarkets(x)')
			market.returnMarkets(x)
			break
		}
		case '/help':{
			logging.loggingHandler(x, '/help', 'help.sendHelp(x)')
			help.sendHelp(x)
			break
		}
		case '/update':{
			logging.loggingHandler(x, '/update', 'dev.update(x)')
			dev.update(x)
			break
		}
		case '/nut':{
			logging.loggingHandler(x, '/nut', 'nut.nut(x)')
			fs.readFile('nut.txt', 'utf8', function(err, data) {
			    if (err) throw err;
			    console.log(data);
			    x.channel.send(data)
			});
			break
		}
		case '/business':{
			business.startBusiness(x)
			break
		}
		case '/companies':{
			business.companies(x)
			break
		}
		case '/applications':{
			if(x.author.id == '292556142952054794'){
				embed = new discord.RichEmbed()
				embed.setTitle("Here are all of the pending business application forms.")
				embed.setColor("ORANGE")
				x.author.send(embed)
				var applications = JSON.parse(fs.readFileSync('./plugins/data/applications.json'))
				for(i in applications){
					if(i == false){
					}else{
						x.author.send(applications[i])
					}
				}			
			}
			break
		}
		case '/party':{
			if(x.author.bot){
				break
			}else{
				politics.beginParty(x)
				break
			}
		}
		default:{
			break
		}
	}
	if(y.startsWith('/manifesto')){
		party = y.substr(11)
		politics.returnManifesto(x, party)
	}
	if(y.startsWith('/createmanifesto')){
		manifesto = y.substr(17)
		politics.applyManifesto(x, manifesto)
	}
	if(y.startsWith('/news')){
		news.requestHandler(x.channel, y.substr(6))
	}
	if(y.startsWith('/transfer')){
		logging.loggingHandler(x, '/transfer', 'money.transfer(x.author.id, id, amount)')
		var id = y.substr(11, 28)
		var amount = y.substr(30)
		var transfer = money.transfer(x.author.id, id, amount)
		x.reply(transfer)
	}
	if(y.startsWith('/belief') && y != "/beliefs"){
		logging.loggingHandler(x, '/belief', 'politics.updateBelief(x, x.author.id, belief)')
		incrementCommandUse(x.author.id)
		belief = y.substr(8)
		console.log(belief)
		politics.updateBelief(x, x.author.id, belief)
	}
	if(y.startsWith('/pc')){
		logging.loggingHandler(x, '/pc', 'pc.main(x)')
		incrementCommandUse(x.author.id)
		console.log("yay.")
		pc.main(x)
	}
	if(y.startsWith('/vidinfo')){
		logging.loggingHandler(x, '/vidinfo', 'yt.videoEmbed(x)')
		incrementCommandUse(x.author.id)
		yt.videoEmbed(x)
	}
	if(y.startsWith('/acc')){
		logging.loggingHandler(x, '/acc', 'money.returnID(x)')
		incrementCommandUse(x.author.id)
		money.returnID(x)
	}
	if(y.startsWith('/copy')){
		logging.loggingHandler(x, '/copy', 'random.copy(x)')
		incrementCommandUse(x.author.id)
		random.copy(x)
	}
	if(y.startsWith('/buy')){
		logging.loggingHandler(x, '/buy', 'shop.buy(x, itemID, x.author.id)')
		incrementCommandUse(x.author.id)
		var itemID = parseInt(y.substr(5))
		buyFunc = shop.buy(x, itemID, x.author.id)
		x.reply(buyFunc)
	}
	if(y.startsWith('/stock')){
		logging.loggingHandler(x, '/stock', 'market.getInstrument(x, inst)')
		inst = y.substr(7)
		market.getInstrument(x, inst)
	}
	if(y.startsWith('/ftp')){
		logging.loggingHandler(x, '/ftp', 'ftp.handleFtpRequest(x, file)')
		console.log(y.substr(5))
		file = '/home/ftp/' + y.substr(5)
		ftp.handleFtpRequest(x, file)
	}
	if(y.startsWith('/logs')){
		flag = y.substr(6)
		logging.returnLogs(x, flag)
	}
}

module.exports.query = query
