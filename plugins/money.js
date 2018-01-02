// discord
const discord = require('discord.js')
const bot = new discord.Client()

// other requirements
const fs = require('fs')
const wagesFile = fs.readFileSync('plugins/data/wages.json')
var wages = JSON.parse(wagesFile)

var getWage = (id) =>{
	if(id in wages){
		var userWage = wages[id]
		return userWage
	}else{
		return false
	}
}

var getWageEmbed = (id) =>{
	if(id in wages){
		var userWage = wages[id]
		return userWage
	}else{
		return false
	}
}

module.exports.getWage = getWage