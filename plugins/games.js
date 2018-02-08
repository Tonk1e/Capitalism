// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var gamePassFile = fs.readFileSync('plugins/data/gamePass.json')
var gamePass = JSON.parse(gamePassFile)

// main
var passEmbed = (x) =>{
  var gamePassFile = fs.readFileSync('plugins/data/gamePass.json')
  var gamePass = JSON.parse(gamePassFile)
  var gamePassAmount = gamePass[x.author.id]
  var embed = new discord.RichEmbed()
  embed.setTitle("Game Pass Embed")
  embed.setColor('ORANGE')
  embed.setThumbnail(x.author.avatarURL)
  embed.addField("Passes", gamePassAmount)
  x.channel.send(embed)
}

var playGame = (x) =>{
  var gamePassFile = fs.readFileSync('plugins/data/gamePass.json')
  var gamePass = JSON.parse(gamePassFile)
  if(x.author.id in gamePass){
    if((gamePass[x.author.id] - 1) >= 0){
      gamePass[x.author.id] = gamePass[x.author.id] - 1
      fs.writeFile('plugins/data/gamePass.json', JSON.stringify(gamePass, null, 2))
      playGame(x)
    }else{
      x.reply("You do not have a game pass. Please buy one at the /shop.")
    }
  }else{
    x.reply("You do not have a game pass. Please buy one at the /shop.")
  }
  var games = [1]
  var i = games[Math.floor(Math.random()*games.length)]
  switch(i){
    case 1:{
      x.reply("The game has begun.")
      var cases = [1]
      var y = cases[Math.floor(Math.random()*cases.length)]
      switch(y){
        case 1:{
          x.reply("An armored warrior approaches you, holding a blade.")
          var cases1 = [1]
          var u = cases1[Math.floor(Math.random()*cases1.length)]
          switch(u){
            case 1:{
              x.reply("You grab your sword and swing.")
              var cases2 = [1]
              var z = cases2[Math.floor(Math.random()*cases2.length)]
              switch(z){
                case 1:{
                  x.reply("Your opponent blocked your attack and decapitated you.")
                  x.reply("You lose.")
                }
                case 2:{

                }
              }
            }
          }
        }
      }
    }
  }
}

module.exports.passEmbed = passEmbed
module.exports.playGame = playGame