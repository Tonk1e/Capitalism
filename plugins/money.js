// discord
const discord = require('discord.js')
const bot = new discord.Client()

// other requirements
const fs = require('fs')
const wagesFile = fs.readFileSync('plugins/data/wages.json')
var wages = JSON.parse(wagesFile)
const employersFile = fs.readFileSync('plugins/data/employers.json')
var employers = JSON.parse(employersFile)

// main
var getWage = (id) =>{
	if(id in wages){
		var userWage = wages[id]
		return userWage
	}else{
		return false
	}
}

var getWageEmbed = (id, user) =>{
	if(id in wages){
		if(id in employers){
			var userWage = wages[id]
			var embed = new discord.RichEmbed()
			console.log(user.username)
			var title = user.username + "'s" + " Wage"
			embed.setTitle(title)
			embed.addField('Wage', userWage + ' USD/day')
			embed.addField('Employer', employers[id])
			embed.setColor('ORANGE')
			return embed
		}else{
			return false
		}
	}else{
		return false
	}
}

module.exports.getWage = getWage
module.exports.getWageEmbed = getWageEmbed