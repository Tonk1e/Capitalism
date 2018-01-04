// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// main
var jazz = (channel, message) =>{
	channel.join()
		.then(connection => {
    		const dispatcher = connection.playFile('./music/jazz.mp3');
  		})
  		.catch(console.error);
}