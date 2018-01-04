// discord
const discord = require('discord.js')
const bot = new discord.Client()

// other requirements
const fs = require('fs')
const secretsFile = fs.readFileSync('secrets.json')
const secrets = JSON.parse(secretsFile)

bot.login(secrets["token"])
module.exports.bot = bot