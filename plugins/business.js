// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var cache = JSON.parse(fs.readFileSync('./plugins/data/businessCache.json'))
var applications = JSON.parse(fs.readFileSync('./plugins/data/applications.json'))

// main
var startBusiness = (x) =>{
	var applications = JSON.parse(fs.readFileSync('./plugins/data/applications.json'))
	x.reply("The application process has begun in your DMs.")
	var cache = JSON.parse(fs.readFileSync('./plugins/data/businessCache.json'))
	cache[x.author.id] = true
	fs.writeFile('plugins/data/businessCache.json', JSON.stringify(cache), null, 2);
	embed = new discord.RichEmbed()
	embed.setTitle("Thank you for applying for a business.")
	embed.setColor("ORANGE")
	embed.setDescription("We just need a few pieces of information to get it started.")
	embed.addField("1. Your full name.", '-')
	embed.addField("2. Your DOB in a `DD/MM/YYYY` format.", '-')
	embed.addField("3. The name of the company.", '-')
	embed.addField("4. The company type. See `/companies`.", '-')
	embed.addField("5. Your discord ID.", '-')
	x.author.send(embed)
	embed2 = new discord.RichEmbed()
	embed2.setTitle("When sending your application form, please use the following format.")
	embed2.setColor("ORANGE")
	x.author.send(embed2)
	fs.readFile('./plugins/data/exampleForm.txt', 'utf8', function(err, data) {
		if (err) throw err; 

		x.author.send(data)
	});
	embed3 = new discord.RichEmbed()
	embed3.setTitle("Please use `/apply {your form}` to apply.")
	x.author.send(embed3)
}
var addApplication = (y) =>{
	var applications = JSON.parse(fs.readFileSync('./plugins/data/applications.json'))
	applications["counter"] = applications["counter"] + 1
	fs.writeFile('plugins/data/applications.json', JSON.stringify(applications), null, 2);
	var applications = JSON.parse(fs.readFileSync('./plugins/data/applications.json'))
	applications["application " + applications["counter"]] = y
	fs.writeFile('plugins/data/applications.json', JSON.stringify(applications), null, 2);
}
var companies = (x) =>{
	companyList = ["Private Limited", "Private Unlimited", "Public Limited", "Public Unlimited"]
	companyListDesc = [
	"A company in which shares cannot be bought by the public, and all finances are disconnected from that of each shareholder or director.",
	"A company in which shares cannot be bought by the public, but all finances can be connected to that of each shareholder or director.",
	"A company in which shares can be bought by the public, and all finances are disconnected from that of each shareholder or director.",
	"A company in which shares can be bought by the public, but all finances can be connected to that of each shareholder or director."
	]
	embed = new discord.RichEmbed()
	embed.setTitle("Company Types")
	embed.setColor("ORANGE")
	embed.setDescription("To start your own company/business please use `/business`.")
	var i
	for(i=0;i<companyList.length;i++){
		embed.addField(companyList[i], companyListDesc[i])
	}
	x.channel.send(embed)
}

module.exports.startBusiness = startBusiness
module.exports.companies = companies
module.exports.addApplication = addApplication