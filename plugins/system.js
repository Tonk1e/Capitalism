// discord
const discord = require('discord.js')
const bot = new discord.Client()

// other requirements
const os = require('os')

// main
class System{
	constructor(){
		this.cpuArray = os.cpus()
		this.cpuModel = this.cpuArray.model
		this.cpuArchitecture = os.arch()
		this.freeMemB = os.freemem()
		this.freeMemGB = Math.floor(os.freemem()/1073741824)
	}
}

const sys = new System()

var getSysEmbed = (img) =>{
	embed = new discord.RichEmbed()
	embed.setTitle('System Info')
	embed.setThumbnail('https://oss.adm.ntu.edu.sg/ayeshafa001/wp-content/uploads/sites/848/2017/02/free-3d-computer-flat-hd-wallpapers-download.jpg')
	embed.setColor('ORANGE')
	embed.addField('CPU Model', sys.cpuModel)
	embed.addField('Architecture', sys.cpuArchitecture)
	embed.addField('Free Memory (B)', sys.freeMemB + ' Bytes')
	embed.addField('Free Memory', sys.freeMemGB + ' GB' + ' (Floored)')
	return embed
}

module.exports.getSysEmbed = getSysEmbed