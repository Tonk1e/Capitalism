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
		"bitcoin" : "https://steemitimages.com/DQmW4EVkx43qDM7eZ2YFiqY5SMmgejn2t9MfN8ZCPh5wDhC/bitcoin%20logo.jpg",
		"ethereum" : "https://res.cloudinary.com/teepublic/image/private/s--N6OLsMPW--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1512525647/production/designs/2144768_1.jpg",
		"ripple" : "https://res.cloudinary.com/teepublic/image/private/s--TDvly_yb--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1512526599/production/designs/2144847_1.jpg",
		"bitcoin-cash" : "https://i.redd.it/nus982esrz901.png"
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