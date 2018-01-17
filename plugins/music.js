// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const secretsFile = fs.readFileSync('secrets.json')
const secrets = JSON.parse(secretsFile)
var search = require('youtube-search')
const ytdl = require('ytdl-core')


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

var play = (x, url) =>{
	const broadcast = bot.createVoiceBroadcast();
	x.member.voiceChannel.join()
		.then(connection =>{
    		const stream = ytdl(url, { filter : 'audioonly' });
    		broadcast.playStream(stream);
   			const dispatcher = connection.playBroadcast(broadcast);
   			dispatcher.setVolume(0.5)
		})
}

var getYoutubeURL = (x, y) =>{
	var opts = {
	  maxResults: 1,
	  key: secrets["GOOGLE_API_KEY"]
	}
	
	search(y, opts, function(err, results) {
	  if(err) return console.log(err);
	 
	  console.dir(results);
	  play(x, results.values().link)
	});
}

module.exports.jazz = jazz
module.exports.getYoutubeURL = getYoutubeURL