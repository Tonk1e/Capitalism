// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const { spawn } = require('child_process');

// main
var update = (x) =>{
	switch(x.author.id){
		case '292556142952054794':{
			embed = new discord.RichEmbed()
			embed.setTitle("Updating...")
			embed.setColor('ORANGE')
			embed.setDescription("Pulling from repository and restarting process...")
			spawn('sh update.sh')
			x.channel.send(embed)
			process.exit()
			break
		}
		default:{
			break
		}
	}
}

module.exports.update = update