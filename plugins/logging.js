// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// main
var randID = () =>{
  	var text = ""
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  	for (var i = 0; i < 5; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length))
  	}

	return text
}

var returnLogs = (x, flag) =>{
	switch(flag){
		case '-h':{
			embed = new discord.RichEmbed()
			embed.setTitle("Logs Help")
			embed.setColor('ORANGE')
			flags = ['', '-h', '-c']
			flagUse = ['Returns the log file.', 'Returns a log help embed.', 'Sends the logs to the chat.']
			var i
			for(i=0;i<flags.length;i++){
				embed.addField("/logs " + flags[i], flagUse[i])
			}
			x.channel.send(embed)
			break
		}
		case '-c':{
			fs.readFile('./logs.log', (err, data) => {
				if (err) throw err;
			  	
			  	x.reply("Here are the logs.")
			  	x.channel.send("```" + data + "```")
			})
			break
		}
		default:{
			fs.readFile('./logs.log', (err, data) => {
				if (err) throw err;
			  	
			  	x.reply("Here are the logs.")
			  	x.channel.send({files: [{attachment: "./logs.log"}]})
			}
			break
		}
	}
}

var loggingHandler = (x, comm, func) =>{
	fs.appendFile("./logs.log", "[command] " + randID() + ": " + x.author.username + "#" + x.author.discriminator + " @ " + x.guild.name + " >> " + comm + "\r\n", function(err) {
	    if(err) {
	        return console.log(err);
	    }

    	console.log("[command] " + randID() + ": " + x.author.username + "#" + x.author.discriminator + " @ " + x.guild.name + " >> " + comm);
	}); 
}

module.exports.loggingHandler = loggingHandler
module.exports.returnLogs = returnLogs