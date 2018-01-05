// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// main
var jazz = (channel, message) =>{
	channel.join()
		.then(connection => {
    		const dispatcher = connection.playFile('plugins/music/jazz.mp3');
    		dispatcher.setVolume(0.5)
    		dispatcher.on('error', e => {
	    		channel.send(e)
	  			console.log(e);
	  		})
		})
    	.catch(console.error);
}

module.exports.jazz = jazz