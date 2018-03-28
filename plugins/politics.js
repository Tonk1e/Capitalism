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
var applicationCache = JSON.parse(fs.readFileSync('plugins/data/partyApply.json'))
var parties = JSON.parse(fs.readFileSync('plugins/data/appliedParties.json'))
var manifestoCache = JSON.parse(fs.readFileSync('plugins/data/manifestoCache.json'))
var partyOwners = JSON.parse(fs.readFileSync('plugins/data/partyOwners.json'))
var referendumJson = JSON.parse(fs.readFileSync('plugins/data/referendum.json'))

// main
var beginParty = (x) =>{
  x.reply("The party application process has begun in your DMs.")
  var embed = new discord.RichEmbed()
  embed.setTitle("Political Party Information")
  embed.setColor("ORANGE")
  embed.setDescription("You have applied for starting your own political party that is a candidate for referendums in `" + x.guild.name + "`. There is a few things that you must know when starting a political party.")
  info = ["1. Power", "2. Economics", "3. Manifesto", "4. Democracy"]
  infoDesc = [
  "If your political party is voted into power, this does not mean that you become the owner of the server, rather you decide on how the server is run. This will be looked at in more detail below.",
  "When in power, you will decide on how the economy is run. Whether this is a socialist economy, free market capitalistic economy, or command economy, you, as the political leader, will decide on how it is run. You will also decide on tax rates, and how much the government will interfere with the economy.",
  "You are required to write a manifesto for your party, and your party will not become a referendum candidate until this is written and the members of `" + x.guild.name + "` have access to it.",
  "You must know that all servers, including `" + x.guild.name + "`, are run in a democratic system, and this cannot be changed. Your position is absed on the will of the people, and keep this in mind, because you can be voted out as well as in."
  ]
  for(i=0;i<info.length;i++){
    embed.addField(info[i], infoDesc[i])
  }
  x.author.send(embed)
  var embed2 = new discord.RichEmbed()
  embed2.setTitle("Following is a demonstration of the format in which your party application should be written, and if it is not written in this way, then the application will not take place.")
  embed2.setColor("ORANGE")
  x.author.send(embed2)
  x.author.send('/apply {"name" : "THE PARTY NAME"}')
  applicationCache[x.author.id] = {"guildID" : x.guild.id, "cache" : true}
  fs.writeFile('plugins/data/partyApply.json', JSON.stringify(applicationCache, null, 2));
}

var beginManifesto = (x) =>{
  embed2 = new discord.RichEmbed()
  embed2.setTitle("It is now time to begin writing your manifesto.")
  embed2.setColor("ORANGE")
  x.author.send(embed2)
  var embed = new discord.RichEmbed()
  embed.setTitle("Manifesto Information")
  embed.setColor("ORANGE")
  embed.addField("Language", "There is no limit or rules on the language used, so, in other words, say whatever the fuck you want.")
  embed.addField("General Goal", "The goal of your manifesto is to persuade people to vote for you, so consider this when writing it. You will need to explain how your party's influence will have a positive effect on the server.")
  embed.addField("Importance", "Your party will not be an referendum candidate until you have a manifesto that is written in full, and approved of by at least 3 guild members.")
  x.author.send(embed)
  embed3 = new discord.RichEmbed()
  embed3.setTitle("Following is the format in which your manifesto should be created and written. Please follow it exactly so that there isn't any issues.")
  embed3.setColor("ORANGE")
  x.author.send(embed3)
  x.author.send("/createmanifesto [WRITE THE FULL MANIFESTO HERE, AS LONG AS IT MAY BE]")
  var manifestoCache = JSON.parse(fs.readFileSync('plugins/data/manifestoCache.json'))
  manifestoCache[x.author.id] = true
  fs.writeFile('plugins/data/manifestoCache.json', JSON.stringify(manifestoCache, null, 2));
  fs.writeFile('plugins/data/partyOwners.json', JSON.stringify(partyOwners, null, 2));
}

var applyManifesto = (x, manifesto) =>{
  var manifestoCache = JSON.parse(fs.readFileSync('plugins/data/manifestoCache.json'))
  var partyOwners = JSON.parse(fs.readFileSync('plugins/data/partyOwners.json'))
  if(manifestoCache[x.author.id]){
    var parties = JSON.parse(fs.readFileSync('plugins/data/appliedParties.json'))
    if(parties[applicationCache[x.author.id]["guildID"]] == undefined){
      console.log("yiay")
      parties[applicationCache[x.author.id]["guildID"]] = {}
      fs.writeFile('plugins/data/appliedParties.json', JSON.stringify(parties, null, 2));
      parties[applicationCache[x.author.id]["guildID"]][partyOwners[x.author.id]]["manifesto"] = manifesto
      manifestoCache[x.author.id] = false
      fs.writeFile('plugins/data/appliedParties.json', JSON.stringify(parties, null, 2));
      fs.writeFile('plugins/data/manifestoCache.json', JSON.stringify(manifestoCache, null, 2));
    }else{
      parties[applicationCache[x.author.id]["guildID"]][partyOwners[x.author.id]]["manifesto"] = manifesto
      manifestoCache[x.author.id] = false
      fs.writeFile('plugins/data/appliedParties.json', JSON.stringify(parties, null, 2));
      fs.writeFile('plugins/data/manifestoCache.json', JSON.stringify(manifestoCache, null, 2));
      embed = new discord.RichEmbed()
      embed.setTitle("Your manifesto has been created, the members can now view it with `/manifesto " + parties[applicationCache[x.author.id]["guildID"]][partyOwners[x.author.id]]["name"] + '`.')
      embed.setColor("ORANGE")
      x.author.send(embed)
    }
  }
}

var returnManifesto = (x, party) =>{
  console.log(party)
  if(parties[x.guild.id][party] == undefined){
    x.reply("That party does not exist. Please use /parties to receieve a list of this guild's parties.")
  }else{
    if(parties[x.guild.id][party]["manifesto"] == undefined){
      x.reply("Sorry, but this party has not yet written their manifesto. Please urge the leader to do so.")
    }else{
      manifesto = parties[x.guild.id][party]["manifesto"]
      embed = new discord.RichEmbed()
      embed.setColor("ORANGE")
      embed.setTitle(parties[x.guild.id][party]["name"] + "'s Manifesto")
      embed.setDescription(manifesto)
      x.channel.send(embed)
    }
  }
}

var applyParty = (x, application) =>{
  var applicationCache = JSON.parse(fs.readFileSync('plugins/data/partyApply.json'))
  console.log(applicationCache[x.author.id]["guildID"])
  if(applicationCache[x.author.id]["cache"]){
    applicationJson = JSON.parse(application)
    if(applicationJson["name"] == undefined){
      x.author.send("An error has occurred, please make sure that you follow the steps carefully. Try again.")
    }else{
      embed = new discord.RichEmbed()
      embed.setTitle("Party Information")
      embed.setColor("ORANGE")
      embed.addField("Name", applicationJson["name"])
      embed.addField("Leader", x.author.username)
      x.author.send(embed)
      applicationCache[x.author.id]["cache"] = false
      fs.writeFile('plugins/data/partyApply.json', JSON.stringify(applicationCache, null, 2));
      var parties = JSON.parse(fs.readFileSync('plugins/data/appliedParties.json'))
      applicationJson = JSON.parse(application)
      console.log(parties[applicationCache[x.author.id]["guildID"]])
      if(parties[applicationCache[x.author.id]["guildID"]] == undefined){
        console.log("yiay")
        parties[applicationCache[x.author.id]["guildID"]] = {}
        fs.writeFile('plugins/data/appliedParties.json', JSON.stringify(parties, null, 2));
        parties[applicationCache[x.author.id]["guildID"]][applicationJson["name"]] = {"name" : applicationJson["name"], "leader" : x.author.username}
        partyOwners[x.author.id] = applicationJson["name"]
        var embed2 = new discord.RichEmbed()
        fs.writeFile('plugins/data/partyOwners.json', JSON.stringify(partyOwners, null, 2));
        fs.writeFile('plugins/data/appliedParties.json', JSON.stringify(parties, null, 2));
        embed2.setTitle("Thank you for applying, your party is now registered.")
        embed2.setColor("ORANGE")
        x.author.send(embed2)
        beginManifesto(x)
      }else{
        parties[applicationCache[x.author.id]["guildID"]][applicationJson["name"]] = {"name" : applicationJson["name"], "leader" : x.author.username}
        partyOwners[x.author.id] = applicationJson["name"]
        var embed2 = new discord.RichEmbed()
        fs.writeFile('plugins/data/partyOwners.json', JSON.stringify(partyOwners, null, 2));
        fs.writeFile('plugins/data/appliedParties.json', JSON.stringify(parties, null, 2));
        embed2.setTitle("Thank you for applying, your party is now registered.")
        embed2.setColor("ORANGE")
        x.author.send(embed2)
        beginManifesto(x)
      }
    }
  }
}

var returnParties = (x) =>{
  var parties = JSON.parse(fs.readFileSync('plugins/data/appliedParties.json'))
  embed = new discord.RichEmbed()
  embed.setTitle("Available Parties")
  embed.setColor("ORANGE")
  embed.setDescription("This is a list of all the parties in this server that have been accepted by Capitalism into the system of democracy.")
  if(parties[x.guild.id] == undefined){
    x.reply("There are no parties in this server.")
  }else{
    if(referendumJson[x.guild.id]["cache"]){
      for(party in parties[x.guild.id]){
        console.log(party)
        if(parties[x.guild.id][party]["manifesto"] == undefined){}else{
          embed.addField(parties[x.guild.id][party]["name"], "Leader: **" + parties[x.guild.id][party]["leader"] + "**. Use `/manifesto " + parties[x.guild.id][party]["name"] + "` to read their manifesto.")
        }
      }
    }else{
      for(party in parties[x.guild.id]){
        console.log(party)
        embed.addField(parties[x.guild.id][party]["name"], "Leader: **" + parties[x.guild.id][party]["leader"] + "**. Use `/manifesto " + parties[x.guild.id][party]["name"] + "` to read their manifesto.")
      }
    }
    console.log(embed)
    x.channel.send(embed)
  }
}

var vote = (x, party) =>{
  var referendumJson = JSON.parse(fs.readFileSync('plugins/data/referendum.json'))
  var parties = JSON.parse(fs.readFileSync('plugins/data/appliedParties.json'))
  if(referendumJson[x.guild.id]["cache"]){
    if(parties[x.guild.id] == undefined){
      x.reply("There are no parties in this server.")
    }else if(parties[x.guild.id][party] == undefined){
      x.reply("That party doesn't exist.")
    }else if(x.author.id in referendumJson[x.guild.id]["voters"]){
      x.reply("You have already voted.")
    }else{
      referendumJson[x.guild.id]["votes"][party] += 1
      referendumJson[x.guild.id]["voters"] += x.author.id
      x.reply("Your vote for " + party + " has been counted.")
      console.log("yiay")
      fs.writeFile('plugins/data/referendum.json', JSON.stringify(referendumJson, null, 2));
    }
  }
}

var referendumCountdown = (x) =>{
  var referendumJson = JSON.parse(fs.readFileSync('plugins/data/referendum.json'))
  if(referendumJson[x.guild.id]["cache"]){
    if(referendumJson[x.guild.id]["counter"] == undefined){
      referendumJson[x.guild.id]["counter"] = 1
      fs.writeFile('plugins/data/referendum.json', JSON.stringify(referendumJson, null, 2));
    }else{
      referendumJson[x.guild.id]["counter"] += 1
      fs.writeFile('plugins/data/referendum.json', JSON.stringify(referendumJson, null, 2));
    }
  }
}

var beginReferendum = (x) =>{
  var referendumJson = JSON.parse(fs.readFileSync('plugins/data/referendum.json'))
  var parties = JSON.parse(fs.readFileSync('plugins/data/appliedParties.json'))
  embed = new discord.RichEmbed()
  embed.setTitle("A referendum has begun in this server.")
  embed.setColor("ORANGE")
  x.channel.send(embed)
  embed2 = new discord.RichEmbed()
  embed2.setTitle("Referendum Information")
  embed2.setColor("ORANGE")
  embed2.addField("How to vote", "To vote, please use `/vote [NAME OF PARTY]`. If you need to find which parties are available to vote for in this server, then please wait for the embed for available parties that will soon follow.")
  embed2.addField("Why to vote", "This referendum will dictate who has power in this server. If the wrong person is elected, they may do corrupt things, that will affect you. So please, stand for your server and vote for the best government and leader.")
  embed2.addField("How to begin your own party", "To start a party, please use `/party`, then follow the steps in your DMs with me, and get it set up.")
  x.channel.send(embed2)
  console.log(embed)
  referendumJson[x.guild.id] = {}
  referendumJson[x.guild.id]["cache"] = true
  referendumJson[x.guild.id]["votes"] = {}
  referendumJson[x.guild.id]["voters"] = []
  if(parties[x.guild.id] == undefined){
    embed3 = new discord.RichEmbed()
    embed3.setTitle("There are no parties registered for this server, so the referendum has been terminated. Please create a political party with `/party`.")
    embed3.setColor("ORANGE")
    x.channel.send(embed3)
    referendumJson[x.guild.id]["cache"] = false
    fs.writeFile('plugins/data/referendum.json', JSON.stringify(referendumJson, null, 2));
  }else{
    embed4 = new discord.RichEmbed()
    embed4.setTitle("Parties Available for Vote")
    embed4.setColor("ORANGE")
    for(party in parties[x.guild.id]){
      if(parties[x.guild.id][party]["manifesto"] == undefined){}else{
        referendumJson[x.guild.id]["votes"][party] = 0
        embed4.addField(party, "Leader: **" + parties[x.guild.id][party]["leader"] + "**. Use `/manifesto " + parties[x.guild.id][party]["name"] + "` to read their manifesto.")
      }
    }
    x.channel.send(embed4)
  }
  fs.writeFile('plugins/data/referendum.json', JSON.stringify(referendumJson, null, 2));
}

module.exports.beginParty = beginParty
module.exports.applyParty = applyParty
module.exports.returnParties = returnParties
module.exports.applyManifesto = applyManifesto
module.exports.returnManifesto = returnManifesto
module.exports.beginReferendum = beginReferendum
module.exports.vote = vote
