// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
var beliefsFile = fs.readFileSync('plugins/data/beliefs.json')
var beliefs = JSON.parse(beliefsFile)
var partiesFile = fs.readFileSync('plugins/data/parties.json')
var parties = JSON.parse(partiesFile)
var timer_ = JSON.parse(fs.readFileSync('plugins/data/timer.json'))

// main
var updateParty = (x, id, party) =>{
  var partyGroups = [
    "Republican",
    "Democrat"
  ]
  if(beliefs[id] == "Communist" || beliefs[id] == "Socialist" || beliefs[id] == "Feminist" || beliefs[id] == "Liberal"){
    if(partyGroups[party] == "Republican"){
      x.reply("That makes no sense.")
    }else if(partyGroups[party] == "Democrat"){
      parties[id] = partyGroups[party]
      fs.writeFile('plugins/data/parties.json', JSON.stringify(parties, null, 2))
      x.reply("You are now a " + partyGroups[party] + ".")
    }else if(party == 'clear'){
        beliefs[id] = null
        fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
        x.reply("Your party has been cleared.")
    }else{
      x.reply("That is not an available party.")
    }
  }else if(beliefs[id] == "Conservative" || beliefs[id] == "Neo-Nazi" || beliefs[id] == "Eco/Green"){
    if(partyGroups[party] == "Democrat"){
      x.reply("That makes no sense.")
    }else if(partyGroups[party] == "Republican"){
      parties[id] = partyGroups[party]
      fs.writeFile('plugins/data/parties.json', JSON.stringify(parties, null, 2))
      x.reply("You are now a " + partyGroups[party] + ".")
    }else if(party == 'clear'){
        beliefs[id] = null
        fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
        x.reply("Your party has been cleared.")
    }else{
      x.reply("That is not an available party.")
    }
  }else{
    if(party == 'clear'){
        beliefs[id] = null
        fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
        x.reply("Your party has been cleared.")
    }else{
      parties[id] = partyGroups[party]
      fs.writeFile('plugins/data/parties.json', JSON.stringify(parties, null, 2))
      x.reply("You are now a " + partyGroups[party] + ".")
    }
  }
}

var updateBelief = (x, id, belief) =>{
  var groups = [
    "Communist",
    "Conservative",
    "Socialist",
    "Neo-Nazi",
    "Eco/Green",
    "Feminist",
    "Liberal"]
  if(parties[id] == "Republican"){
    if(groups[belief] == "Communist" || groups[belief] == "Socialist" || groups[belief] == "Feminist" || groups[belief] == "Liberal"){
      x.reply("That makes no sense.")
    }else if(beliefs[id] == "Conservative" || beliefs[id] == "Neo-Nazi" || beliefs[id] == "Eco/Green"){
      beliefs[id] = groups[belief]
      fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
      x.reply("You are now a " + groups[belief] + ".")
    }else if(belief == 'clear'){
      beliefs[id] = null
      fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
      x.reply("Your group has been cleared.")
    }else{
      x.reply("That is not an available group.")
    }
  }else if(parties[id] == "Democrat"){
    if(groups[belief] == "Conservative" || groups[belief] == "Neo-Nazi"){
        x.reply("That doesn't make any sense.")
    }else if(parties[id] == "Republican"){
      beliefs[id] = groups[belief]
      fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
      x.reply("You are now a " + groups[belief] + ".")
    }else if(belief == 'clear'){
      beliefs[id] = null
      fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
      x.reply("Your group has been cleared.")
    }else{
      x.reply("That is not an available group.")
    }
  }else{
    if(belief == 'clear'){
      beliefs[id] = null
      fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
      x.reply("Your group has been cleared.")
    }else{
      beliefs[id] = groups[belief]
      fs.writeFile('plugins/data/beliefs.json', JSON.stringify(beliefs, null, 2))
      x.reply("You are now a " + groups[belief] + ".")
    }
  }
}

var partiesEmbed = (x) =>{
  var partyGroups = [
    "Republican",
    "Democrat"
  ]
  var embed = new discord.RichEmbed()
  embed.setTitle('Available Parties')
  embed.setColor('ORANGE')
  var i;
  for(i=0;i<partyGroups.length;i++){
    embed.addField(i, partyGroups[i])
  }
  x.channel.send(embed)
}

var beliefsEmbed = (x) =>{
  var groups = [
    "Communist",
    "Conservative",
    "Socialist",
    "Neo-Nazi",
    "Eco/Green",
    "Feminist",
    "Liberal"]
  var embed = new discord.RichEmbed()
  embed.setTitle('Available Idealogical Groups')
  embed.setColor('ORANGE')
  var i;
  for(i=0;i<groups.length;i++){
    embed.addField(i, groups[i])
  }
  x.channel.send(embed)
}

var beliefEmbed = (x) =>{
  var beliefsFile = fs.readFileSync('plugins/data/beliefs.json')
  var beliefs = JSON.parse(beliefsFile)
  var partiesFile = fs.readFileSync('plugins/data/parties.json')
  var parties = JSON.parse(partiesFile)
  var embed = new discord.RichEmbed()
  embed.setTitle("Politics")
  embed.setColor('ORANGE')
  embed.setThumbnail(x.author.avatarURL)
  if(x.author.id in parties)(
    embed.addField('Party', parties[x.author.id])
  )
  if(x.author.id in beliefs){
    embed.addField('Idealogical Group', beliefs[x.author.id])
  }
  x.channel.send(embed)
}

var startTimer = (condition, time) =>{
  timer = setInterval(() =>{
    var timer_ = JSON.parse(fs.readFileSync('plugins/data/timer.json'))
    timer_["timer"] += 1
    fs.writeFile('plugins/data/timer.json', JSON.stringify(timer))
    if(timer_["timer"] >= time){
      return false
      clearInterval(timer)
    }
    if(condition){
      return true
      clearInterval(timer)
    }
  })
}

var memberCounter = (array) =>{
  var i
  var x
  for(i in array){
    if(!i.bot){x += 1}
  }
  return x
}
var valueCounter = (array) =>{
  var i
  var x
  for(i in array){
    x += 1
  }
  return x
}

var holdReferendum = (x) =>{
  x.channel.send("A referendum is taking place.")
  x.channel.send("This will decide on who, as a collective, governs " + x.guild.name + ".")
}

var startReferendum = (x) =>{
  x.channel.send("A referendum has been requested.")
  x.channel.send("If the referendum is supported by a majority, then it will be held.")
  x.channel.send("A referendum will take a full hour, so keep this in mind.")
  x.channel.send("Leave a reaction on the following message to show your support:")
  referendum = x.channel.send("**Should a referendum be held?**")
  console.log(referendum)
  members = memberCounter(x.guild.members.array())
  var i = true
  // var y = startTimer(reactions > (members / 2), 3600)
  while(i){
    x.channel.send("Suck my dick.")
  }
}

module.exports.beliefEmbed = beliefEmbed
module.exports.updateBelief = updateBelief
module.exports.updateParty = updateParty
module.exports.beliefsEmbed = beliefsEmbed
module.exports.partiesEmbed = partiesEmbed
module.exports.startReferendum = startReferendum
