// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var http = require('http')
var request = require('request')

// main
var returnInstrumentData = (x, inst) =>{
	instImg = {
		"bitcoin" : "plugins/data/marketImg/bitcoin.jpg",
		"ethereum" : "plugins/data/marketImg/ethereum.jpg",
		"ripple" : "plugins/data/marketImg/ripple.jpg",
		"bitcoin-cash" : "plugins/data/marketImg/bitcoin-cash.png"
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
	        instEmbed.addField("Percentage Change in Last Hour", body[0]["percent_change_1h"] + "%")
	        x.channel.send(instEmbed)
	    }
	})
}

var getInstrument = (x, inst) =>{
	switch(inst){
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
	}
}

module.exports.getInstrument = getInstrument