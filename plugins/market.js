// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var http = require('http')

// main
var returnInstrumentData = (x, inst) =>{
	url = "https://api.coinmarketcap.com/v1/ticker/" + inst
	http.get(url function(res){
		data = JSON.parse(res)
		instEmbed = new dicord.RichEmbed()
		instEmbed.setTitle(data["name"] + ' Information')
		x.channel.send(instEmbed)
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