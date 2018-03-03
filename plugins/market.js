// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var http = require('http')
var request = require('request')

// main
var stockHelp = (x) =>{
	symbols = ['btc', 'eth', 'xrp', 'bch', 'doge', 'ltc', 'neo']
	symbolFuncs = ['Bitcoin', 'Ethereum', 'Ripple', 'Bitcoin-Cash', 'Dogecoin', 'Litecoin', 'NEO']
	var i
	helpEmbed = new discord.RichEmbed()
	helpEmbed.setTitle('Stocks Help')
	helpEmbed.setColor('ORANGE')
	helpEmbed.setDescription("The stocks command is for returning information about different markets. Following is a list of commands that can be used.")
	for(i=0;i<symbols.length;i++){
		helpEmbed.addField('/stock ' + symbols[i], "Returns market information about " + symbolFuncs[i] + ".")
	}
	x.channel.send(helpEmbed)
}
var returnInstrumentData = (x, inst) =>{
	console.log("Yay.")
	console.log(inst)
	instImg = {
		"bitcoin" : bot.user.avatarURL,
		"ethereum" : "https://i0.wp.com/www.easycryptopacks.com/wp-content/uploads/2017/10/ETHEREUM-LOGO-2.png?fit=1920%2C1920&ssl=1",
		"ripple" : "https://dontpanicsell.files.wordpress.com/2017/06/mark.png?w=768",
		"bitcoin-cash" : "https://i.warosu.org/data/biz/img/0043/89/1510809334515.png",
		"dogecoin" : "http://www.unixstickers.com/image/cache/data/stickers/dogecoin/Dogecoin.sh-600x600.png",
		"litecoin" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Litecoin.svg/2500px-Litecoin.svg.png",
		"neo" : "http://scet.berkeley.edu/wp-content/uploads/High-Res-NEO-Logo.png"
	}
	url = "http://api.coinmarketcap.com/v1/ticker/" + inst 
	request({url: url, json: true}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        console.log(body[0])
	        instEmbed = new discord.RichEmbed()
	        instEmbed.setTitle(body[0]["name"] + " Information")
	        instEmbed.setColor('ORANGE')
	        instEmbed.setThumbnail(instImg[body[0]["id"]])
	        instEmbed.addField("Symbol", body[0]["symbol"])
	        instEmbed.addField("Price", body[0]["price_usd"] + " USD")
	        instEmbed.addField("Market Cap", body[0]["market_cap_usd"] + " USD")
	        instEmbed.addField("Max Supply", body[0]["max_supply"])
	        instEmbed.addField("Percentage Change in Last Hour", body[0]["percent_change_1h"] + "%")
	        x.channel.send(instEmbed)
	    }
	})
}

var returnMarkets = (x) =>{
	console.log("Yay.")
	symbolFuncs = ['Bitcoin', 'Ethereum', 'Ripple', 'Bitcoin-Cash', 'Dogecoin', 'Litecoin', 'NEO']
	var i
	for(inst in symbolFuncs){
		returnInstrumentData(x, inst)
	}
}

// handler for markets
var getInstrument = (x, inst) =>{
	switch(inst){
		case 'help':{
			stockHelp(x)
			break
		}
		case 'btc':{
			returnInstrumentData(x, 'bitcoin')
			break
		}
		case 'eth':{
			returnInstrumentData(x, 'ethereum')
			break
		}
		case 'xrp':{
			returnInstrumentData(x, 'ripple')
			break
		}
		case 'bch':{
			returnInstrumentData(x, 'bitcoin-cash')
			break
		}
		case 'doge':{
			returnInstrumentData(x, 'dogecoin')
			break
		}
		case 'ltc':{
			returnInstrumentData(x, 'litecoin')
			break
		}
		case 'neo':{
			returnInstrumentData(x, 'neo')
			break
		}
		default:{
			x.channel.send("That symbol does not have a stocks db entry. Please use `/stock help` for a list of commands.")
			break
		}
	}
}

module.exports.getInstrument = getInstrument
module.exports.returnMarkets = returnMarkets