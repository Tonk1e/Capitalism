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
	url = "http://api.coinmarketcap.com/v1/ticker/" + inst
	request({url: url, json: true}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        console.log(body)
	        instEmbed = new discord.RichEmbed()
	        instEmbed.setTitle(body[name] + " Information")
	        instEmbed.setColor('ORANGE')
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