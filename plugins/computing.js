// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var computing = JSON.parse(fs.readFileSync('plugins/data/computing.json'))

var parts = ["ram", "hdd", "cpu"]
var partNames = ["RAM", "Hard Drive", "CPU"]

// main
var ram = (x) =>{
  var ramEmbed = new discord.RichEmbed()
  ramEmbed.setTitle("RAM")
  ramEmbed.setColor('ORANGE')
  ramEmbed.setDescription(computing["ram"])
  x.channel.send(ramEmbed)
}

var hdd = (x) =>{
  var hddEmbed = new discord.RichEmbed()
  hddEmbed.setTitle("Hard Drive")
  hddEmbed.setColor('ORANGE')
  hddEmbed.setDescription(computing["hdd"])
  x.channel.send(hddEmbed)
}

var cpu = (x) =>{
  var cpuEmbed = new discord.RichEmbed()
  cpuEmbed.setTitle("CPU")
  cpuEmbed.setColor('ORANGE')
  cpuEmbed.setDescription(computing["cpu"])
  x.channel.send(cpuEmbed)
}

var help = (x) =>{
  var helpEmbed = new discord.RichEmbed()
  helpEmbed.setTitle("Computing Help")
  helpEmbed.setColor('ORANGE')
  var i
  for(i=0;i<parts.length;i++){
    helpEmbed.addField('/pc ' + parts[i], "Returns information about " + partNames[i] + ".")
  }
  x.channel.send(helpEmbed)
}

var main = (x) =>{
  var query = x.content.substr(4)
  console.log(query)
  switch(query){
    case 'help':{
      help(x)
      break
    }
    case 'ram':{
      ram(x)
      break
    }
    case 'hdd':{
      hdd(x)
      break
    }
    case 'cpu':{
      cpu(x)
      break
    }
    default:{
      x.channel.send("That query does not exist in our computing database.")
      break
    }
  }
}

module.exports.main = main
