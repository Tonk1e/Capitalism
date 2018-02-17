// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const os = require('os')

// main
class System{
	constructor(){
		this.cpuArray = os.cpus()
		this.cpuModel = this.cpuArray[0].model
		this.cpuArchitecture = os.arch()
		this.cpuSpeed = this.cpuArray[0].speed / 1000
		this.freeMemB = os.freemem()
		this.freeMemGB = Math.floor(os.freemem()/1073741824)
		this.sysUptime = os.uptime()
	}
}

const sys = new System()

var getSysEmbed = () =>{
	console.log(os.networkInterfaces())
	console.log(sys.cpuArray)
	embed = new discord.RichEmbed()
	embed.setTitle('System Info')
	embed.setThumbnail(bot.user.avatarURL)
	embed.setColor('ORANGE')
	embed.addField('CPU Model', sys.cpuModel)
	embed.addField('Architecture', sys.cpuArchitecture)
	embed.addField('Speed', sys.cpuSpeed + 'GHz')
	embed.addField('Operating System', os.type())
	embed.addField('Free Memory', sys.freeMemGB + ' GB' + ' (Floored)')
	return embed
}

module.exports.getSysEmbed = getSysEmbed