// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const music = require('./plugins/music.js')
const ban = require('./plugins/ban.js')
const money = require('./plugins/money.js')
var system = require('./plugins/system.js')
const userInfo = require('./plugins/userInfo.js')
const ping = require('./plugins/ping.js')
const setup = require('./plugins/botSetup.js')


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

var query = (x, y) =>{
	switch(y){
		case '/hello':{
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
			if(x.member.voiceChannel){
				x.reply("Here's some jazz for you.")
				music.jazz(x.member.voiceChannel, x)
			}else{
				break
			}
			break
		}
		case '/myself':{
			userEmbed = userInfo.getUserEmbed(x.author)
			x.channel.sendEmbed(userEmbed)
			break
		}
		case '/wage':{
			wageEmbed = money.getWageEmbed(x.author.id, x.author)
			x.channel.sendEmbed(wageEmbed)
			break
		}
		case '/status':{
			statusEmbed = money.getStatusEmbed(x.author)
			x.channel.sendEmbed(statusEmbed)
			break
		}
		case '/changewage':{
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
			var system = require('./plugins/system.js')
			sysEmbed = system.getSysEmbed()
			x.channel.sendEmbed(sysEmbed)
			break
		}
		case '/ping':{
			ping.ping(x)
			break
		}
		case '/avatar':{
			userInfo.sendUserAvatar(x)
			break
		}
		case '/setup':{
			setup.startBotSetup(x)
			break
		}
		case '/token':{
			setup.getToken(x)
			break
		}
		case '/register':{
			money.createAccount(x)
			break
		}
		case '/bal':{
			accEmbed = money.accountEmbed(x.author)
			x.channel.send(accEmbed)
			break
		}
		default:{
			break
		}
	}
	if(y.startsWith('/play')){
		search = y.substr(6)
		music.getYoutubeURL(x, search)
	}
}

module.exports.query = query