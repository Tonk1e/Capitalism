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
  for(party in parties[x.guild.id]){
    console.log(party)
    embed.addField(parties[x.guild.id][party]["name"], "Leader: **" + parties[x.guild.id][party]["leader"] + "**. Use `/manifesto " + parties[x.guild.id][party]["name"] + "` to read their manifesto.")
  }
  console.log(embed)
  x.channel.send(embed)
}

var beginReferendum = (x) =>{
  embed = new discord.RichEmbed()
  embed.setTitle("A referendum has begun in this server.")
  x.channel.send(embed)
  console.log(embed)
}

module.exports.beginParty = beginParty
module.exports.applyParty = applyParty
module.exports.returnParties = returnParties
module.exports.applyManifesto = applyManifesto
module.exports.returnManifesto = returnManifesto
module.exports.beginReferendum = beginReferendum
