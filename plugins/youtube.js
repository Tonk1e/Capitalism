// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var search = require('youtube-search')
const ytdl = require('ytdl-core')
const secretsFile = fs.readFileSync('secrets.json')
const secrets = JSON.parse(secretsFile)

// main
var videoEmbed = (x) =>{
  var query = x.content.substr(9)
  console.log(query)
  var opts = {
	  maxResults: 1,
	  key: secrets["GOOGLE_API_KEY"]
	}
  search(query, opts, function(err, results) {
    if(err) return console.log(err);

    var results_ = JSON.stringify(results)
    console.log(results_)
    console.log(results_["link"])
    var embed = new discord.RichEmbed()
    embed.setTitle(results_["title"])
    embed.setColor('ORANGE')
    //embed.setThumbnail(results_["thumbnails"]["default"]["url"])
    x.channel.send(embed)
  });
}

module.exports.videoEmbed = videoEmbed
