// discord
const discord = require('discord.js')
const bot = new discord.Client()

// other requirements
const fs = require('fs')
const banFile = fs.readFileSync('plugins/data/ban.json')
var banContents = JSON.parse(banFile)


// main
var ban = (userID) => {
	try{
		data = {
			"id" : userID,
			"status" : true
		}
		banContents.users.push(data)
		fs.writeFile('plugins/data/ban.json', JSON.stringify(banContents), 'utf-8')
	}catch(Exception){
		console.log(Exception)
	}
}

module.exports.ban = ban