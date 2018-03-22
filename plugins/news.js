// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
var apiKey = "5b276bb5fa7c40e9ad3c30f1a22598ed"
var request = require('request')

// main
var help = (channel) =>{
	var embed = new discord.RichEmbed()
	embed.setTitle("News Help")
	embed.setColor("ORANGE")
	sources = ['bbc', 'fox', 'bloom', 'breitbart', 'cnn', '-r']
	sourceDescription = [
	"Returns one of the latest articles from BBC News.", 
	"Returns one of the latest articles from Fox News.", 
	"Returns one of the latest articles from Bloomberg.", 
	"Returns one of the latest articles from Breitbart News.",
	"Returns one of the latest articles from CNN.",
	"Returns a random article."
	]
	embed.setDescription("The news command is to keep you updated on all of the latest affairs, as I hope you had guessed.")
	for(var i=0;i<sources.length;i++){
		embed.addField("/news " + sources[i], sourceDescription[i])
	}
	channel.send(embed)
}

var getArticle = (channel, source) =>{
	url = "https://newsapi.org/v2/top-headlines?sources=" + source + "&apiKey=" + apiKey
	request({url: url, json: true}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
	    	article = body.articles[Math.floor(Math.random() * body.articles.length)]
	    	var embed = new discord.RichEmbed()
	    	embed.setTitle(article.title)
	    	embed.setDescription(article.description)
	    	embed.setColor("ORANGE")
	    	embed.setFooter(article.author)
	    	embed.setTimestamp(article.publishedAt)
	    	embed.setThumbnail(article.urlToImage)
	    	embed.addField("Full Article", article.url)
	    	channel.send(embed)
	    }
	})
}

var getRandomArticle = (channel) =>{
	sources = ['bbc-news', 'bloomberg', 'breitbart-news', 'cnn', 'fox-news']
	url = "https://newsapi.org/v2/top-headlines?sources=" + sources[Math.floor(Math.random() * sources.length)] + "&apiKey=" + apiKey
	request({url: url, json: true}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
	    	article = body.articles[Math.floor(Math.random() * body.articles.length)]
	    	var embed = new discord.RichEmbed()
	    	embed.setTitle(article.title)
	    	embed.setDescription(article.description)
	    	embed.setColor("ORANGE")
	    	embed.setFooter(article.author)
	    	embed.setTimestamp(article.publishedAt)
	    	embed.setThumbnail(article.urlToImage)
	    	embed.addField("Full Article", article.url)
	    	channel.send(embed)
	    }
	})
}

var requestHandler = (channel, source) =>{
	switch(source){
		case 'help':{
			help(channel)
			break
		}
		case 'bbc':{
			getArticle(channel, 'bbc-news')
			break
		}
		case 'fox':{
			getArticle(channel, 'fox-news')
			break
		}
		case 'bloom':{
			getArticle(channel, 'bloomberg')
			break
		}
		case 'breitbart':{
			getArticle(channel, 'breitbart-news')
			break
		}
		case 'cnn':{
			getArticle(channel, 'cnn')
			break
		}
		case '-r':{
			getRandomArticle(channel)
			break
		}
		default:{
			channel.send("That is not a valid command. Please use `/news help` to receive a list of commands.")
		}
	}
}

module.exports.getRandomArticle = getRandomArticle
module.exports.help = help
module.exports.requestHandler = requestHandler