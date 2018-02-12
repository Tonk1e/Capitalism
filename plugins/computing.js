// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const ramInfoFile = fs.readFileSync('plugins/data/computing/ram.json')
var ramInfo = JSON.parse(ramInfoFile)
const hddInfoFile = fs.readFileSync('plugins/data/computing/hdd.json')
var hddInfo = JSON.parse(hddInfoFile)
const cpuInfoFile = fs.readFileSync('plugins/data/computing/cpu.json')
var cpuInfo = JSON.parse(cpuInfoFile)

// main
var ram = (x) =>{
  var ramEmbed = new discord.RichEmbed()
  console.log(ramInfo)
  ramEmbed.setTitle("RAM")
  ramEmbed.setColor('ORANGE')
  ramEmbed.setDescription(ramInfo["info"])
  x.channel.send(ramEmbed)
}

var hdd = (x) =>{
  var hddEmbed = new discord.RichEmbed()
  console.log(hddInfo)
  hddEmbed.setTitle("Hard Drive")
  hddEmbed.setColor('ORANGE')
  hddEmbed.setDescription(hddInfo["info"])
  x.channel.send(hddEmbed)
}

var cpu = (x) =>{
  var cpuEmbed = new discord.RichEmbed()
  console.log(cpuInfo)
  cpuEmbed.setTitle("CPU")
  cpuEmbed.setColor('ORANGE')
  cpuEmbed.setDescription(cpuInfo["info"])
  x.channel.send(cpuEmbed)
}

var main = (x) =>{
  var query = x.content.substr(4)
  console.log(query)
  switch(query){
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
