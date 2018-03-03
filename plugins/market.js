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
		"bitcoin" : bot.user.avatarURL,
		"ethereum" : "https://i0.wp.com/www.easycryptopacks.com/wp-content/uploads/2017/10/ETHEREUM-LOGO-2.png?fit=1920%2C1920&ssl=1",
		"ripple" : "https://dontpanicsell.files.wordpress.com/2017/06/mark.png?w=768",
		"bitcoin-cash" : "https://i.warosu.org/data/biz/img/0043/89/1510809334515.png",
		"dogecoin" : "http://www.unixstickers.com/image/cache/data/stickers/dogecoin/Dogecoin.sh-600x600.png"
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
		case 'doge':{
			returnInstrumentData(x, 'dogecoin')
			break
		}
	}
}

module.exports.getInstrument = getInstrument