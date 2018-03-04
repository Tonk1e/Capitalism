// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const wagesFile = fs.readFileSync('plugins/data/wages.json')
var wages = JSON.parse(wagesFile)
const employersFile = fs.readFileSync('plugins/data/employers.json')
var employers = JSON.parse(employersFile)
const userEmployersFile = fs.readFileSync('plugins/data/userEmployers.json')
var userEmployers = JSON.parse(userEmployersFile)
var accountsFile = fs.readFileSync('plugins/data/accounts.json')
var accounts = JSON.parse(accountsFile)
const counterFile = fs.readFileSync('plugins/data/counter.json')
var counter = JSON.parse(counterFile)
const invoiceFile = fs.readFileSync('plugins/data/invoices.json')
var invoices = JSON.parse(invoiceFile)
const interestFile = fs.readFileSync('plugins/data/interest.json')
var interest = JSON.parse(interestFile)
const gamePassFile = fs.readFileSync('plugins/data/gamePass.json')
var gamePass = JSON.parse(gamePassFile)

// main
var getWage = (id) =>{
	if(id in wages){
		var userWage = wages[id]
		return userWage
	}else{
		return false
	}
}

var checkAndUpdateEmployer = (id) =>{
	if(id in wages){
		if(wages[id] == 0){
			var employer = "Their Belly"
			userEmployers[id] = employer
		}else if(wages[id] > 0){
			if(wages[id] < 10){
				var employer = "Their Belly"
				userEmployers[id] = employer
			}else if(wages[id] == 10){
				var employer = "Mom"
				userEmployers[id] = employer
			}else if(wages[id] > 10){
				if(wages[id] < 20){
					var employer = "Mom"
					userEmployers[id] = employer
				}else if(wages[id] == 20){
					var employer = "Mom"
					userEmployers[id] = employer
				}else if(wages[id] > 20){
					if(wages[id] < 30){
						var employer = "The Paper Round Manager"
						userEmployers[id] = employer
					}else if(wages[id] == 30){
						var employer = "Denny's Doughnuts"
						userEmployers[id] = employer
					}else if(wages[id] > 30){
						if(wages[id] < 40){
							var employer = "Denny's Doughnuts"
							userEmpoyers[id] = employer
						}else if(wages[id] == 40){
							var employer = "Sammy's Sausages"
							userEmployers[id] = employer
						}else if(wages[id] > 40){
							if(wages[id] < 50){
								var employer = "Sammy's Sausages"
								userEmployers[id] = employer
							}else if(wages[id] == 50){
								var employer = "Henry's Hospital"
								userEmployers[id] = employer
							}else if(wages[id] > 50){
								if(wages[id] < 60){
									var employer = "Cameron's Cakes"
									userEmployers[id] = employer
								}else if(wages[id] == 60){
									var employer = "Cameron's Cakes"
									userEmployers[id] = employer
								}else if(wages[id] > 60){
									if(wages[id] < 80){
										var employer = "Cameron's Cakes"
										userEmployers[id] = employer
									}else if(wages[id] == 80){
										var employer = "Andy's Alcohol"
										userEmployers[id] = employer
									}else if(wages[id] > 80){
										if(wages[id] < 100){
											var employer = "Andy's Alcohol"
											userEmployers[id] = employer
										}else if(wages[id] == 100){
											var employer = "Jenny's Jewellry"
											userEmployers[id] = employer
										}else if(wages[id] > 100){
											if(wages[id] < 120){
												var employer = "Jenny's Jewellry"
												userEmployers[id] = employer
											}else if(wages[id] == 120){
												var employer = "Zack's Zoo"
												userEmployers[id] = employer
											}else if(wages[id] > 120){
												if(wages[id] < 150){
													var employer = "Zack's Zoo"
													userEmployers[id] = employer
												}else if(wages[id] == 150){
													var employer = "Barry's Bar"
													userEmployers[id] = employer
												}else if(wages[id] > 150){
													if(wages[id] < 200){
														var employer = "Barry's Bar"
														userEmployers[id] = employer
													}else if(wages[id] == 200){
														var employer = "Kalvin's Klothez"
														userEmployers[id] = employer
													}else if(wages[id] > 200){
														if(wages[id] < 250){
															var employer = "Kalvin's Klothez"
															userEmployers[id] = employer
														}else if(wages[id] == 250){
															var employer = "Gertrude Groceries"
															userEmployers[id] = employer
														}else if(wages[id] > 250){
															if(wages[id] < 260){
																var employer = "Gertrude Groceries"
																userEmployers[id] = employer
															}else if(wages[id] == 260){
																var employer = "Vikky's Vegetables"
																userEmployers[id] = employer
															}else if(wages[id] > 260){
																if(wages[id] < 300){
																	var employer = "Vikky's Vegetables"
																	userEmployers[id] = employer
																}else if(wages[id] == 300){
																	var employer = "Peter's Plumbing"
																	userEmployers[id] = employer
																}else if(wages[id] > 300){
																	if(wages[id] < 350){
																		var employer = "Peter's Plumbing"
																		userEmployers[id] = employer
																	}else if(wages[id] == 350){
																		var employer = "Heather's Hair"
																		userEmployers[id] = employer
																	}else if(wages[id] > 350){
																		if(wages[id] < 360){
																			var employer = "Heather's Hair"
																			userEmployers[id] = employer
																		}else if(wages[id] == 360){
																			var employer = "Marcy's Makeup"
																			userEmployers[id] = employer
																		}else if(wages[id] > 360){
																			if(wages[id] < 400){
																				var employer = "Marcy's Makeup"
																				userEmployers[id] = employer
																			}else if(wages[id] == 400){
																				var employer = "Oscar's Office"
																				userEmployers[id] = employer
																			}else if(wages[id] > 400){
																				if(wages[id] < 450){
																					var employer = "Oscar's Office"
																					userEmployers[id] = employer
																				}else if(wages[id] == 450){
																					var employer = "Tommy's Trading"
																					userEmployers[id] = employer
																				}else if(wages[id] > 450){
																					if(wages[id] < 500){
																						var employer = "Tommy's Trading"
																						userEmployers[id] = employer
																					}else if(wages[id] == 500){
																						var employer = "Penelope's Planes"
																						userEmployers[id] = employer
																					}else if(wages[id] > 500){
																						if(wages[id] < 650){
																							var employer = "Penelope's Planes"
																							userEmployers[id] = employer
																						}else if(wages[id] == 650){
																							var employer = "Ayah's Airport"
																							userEmployers[id] = employer
																						}else if(wages[id] > 650){
																							if(wages[id] < 700){
																								var employer = "Ayah's Airport"
																								userEmployers[id] = employer
																							}else if(wages[id] == 700){
																								var employer = "Ben's Bank"
																								userEmployers[id] = employer
																							}else if(wages[id] > 700){
																								if(wages[id] < 800){
																									var employer = "Ben's Bank"
																									userEmployers[id] = employer
																								}else if(wages[id] == 800){
																									var employer = "Winston's Websites"
																									userEmployers[id] = employer
																								}else if(wages[id] > 800){
																									if(wages[id] < 1000){
																										var employer = "Winston's Websites"
																										userEmployers[id] = employer
																									}else if(wages[id] == 1000){
																										var employer = "Garry's Games"
																										userEmployers[id] = employer
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		fs.writeFile('plugins/data/userEmployers.json', JSON.stringify(userEmployers, null, 2));
	}else{
		return "The ID is not in the wages database."
	}
}

var changeWage = (amount, id) =>{
	if(id in wages){
		wages[id] = parseInt(amount)
		fs.writeFile('plugins/data/wages.json', JSON.stringify(wages, null, 2), function (err) {
  			if (err) return console.log(err);
  			console.log(JSON.stringify(wages));
  			console.log('writing to ' + 'wages.json');
		});
		var success_message = "Successfully changed the wage."
		return success_message
	}else{
		var error_message = "That ID is not in the wages database."
		return error_message
	}
}

var getWageEmbed = (id, user) =>{
	if(id in wages){
		if(id in userEmployers){
			var userWage = wages[id]
			var embed = new discord.RichEmbed()
			console.log(user.username)
			var title = user.username + "'s" + " Wage"
			embed.setTitle(title)
			embed.addField('Wage', userWage + ' USD/day')
			embed.addField('Employer', userEmployers[id])
			embed.setColor('ORANGE')
			return embed
		}else{
			return false
		}
	}else{
		return false
	}
}

var getStatusEmbed = (user) =>{
	if(user.id in wages){
		if(wages[user.id] == 0){
			checkAndUpdateEmployer(user.id)
			statusEmbed = new discord.RichEmbed()
			statusEmbed.setTitle(user.username + "'s Status")
			statusEmbed.setColor('ORANGE')
			statusEmbed.addField('Class', 'Worthless')
			statusEmbed.addField('Wage', wages[user.id] + ' USD/100 messages')
			statusEmbed.addField('Job', employers[userEmployers[user.id]])
			statusEmbed.addField('Employer', userEmployers[user.id])
			return statusEmbed
		}else if(wages[user.id] > 0){
			if(wages[user.id] < 385){
				if(wages[user.id] > 110){
					checkAndUpdateEmployer(user.id)
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.setThumbnail(user.avatarURL)
					statusEmbed.addField('Class', 'Working Class')
					statusEmbed.addField('Wage', wages[user.id] + ' USD/100 messages')
					statusEmbed.addField('Job', employers[userEmployers[user.id]])
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}else if(wages[user.id] <= 110){
					checkAndUpdateEmployer(user.id)
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.setThumbnail(user.avatarURL)
					statusEmbed.addField('Class', 'Lower Working Class')
					statusEmbed.addField('Wage', wages[user.id] + ' USD/100 messages')
					statusEmbed.addField('Job', employers[userEmployers[user.id]])
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}
			}else if(wages[user.id] > 386){
				if(wages[user.id] < 2000){
					checkAndUpdateEmployer(user.id)
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.setThumbnail(user.avatarURL)
					statusEmbed.addField('Class', 'Upper Working Class')
					statusEmbed.addField('Wage', wages[user.id] + ' USD/100 messages')
					statusEmbed.addField('Job', employers[userEmployers[user.id]])
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}else if(wages[user.id] >= 2000){
					checkAndUpdateEmployer(user.id)
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.setThumbnail(user.avatarURL)
					statusEmbed.addField('Class', 'Capitalist Class')
					statusEmbed.addField('Wage', wages[user.id] + ' USD/100 messages')
					statusEmbed.addField('Job', employers[userEmployers[user.id]])
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}
			}
		}
	}
}

var accountInfoEmbed = (x, y, z) =>{
	var embed = new discord.RichEmbed()
	embed.setTitle(y +  " Account Info")
	embed.setColor('ORANGE')
	embed.addField("Account ID", z)
	embed.addField("Account Name", bot.fetchUser(z).username)
	embed.addField("Status", "idk rn")
	return embed
}

var createInvoice = (x, y, date, amount) =>{
	var invoice = new discord.RichEmbed()
	var invoiceID = Math.random() * 100000000000000000
	if(invoiceID in invoices){
		createInvoice(x, y, date, amount)
	}else{
		invoices[invoiceID] = 1
		invoice.setTitle('Invoice ' + invoiceID)
		invoice.setThumbnail(bot.user.avatarURL)
		invoice.setColor('ORANGE')
		invoice.addField("Billing Agreement Date", date)
		invoice.addField("Transaction Amount", amount + " USD")
		invoice.addField("Payer ID", x.author.id)
		invoice.addField("Recipient ID", y)
		x.channel.send("The invoice was sent in your DMs.")
		x.author.send(invoice)
	}
	fs.writeFile('plugins/data/invoices.json', JSON.stringify(invoices, null, 2));
}

var payInterest = (x) =>{
	if(x in accounts){
		accounts[x] = accounts[x] * 1.03
		fs.writeFile('plugins/data/accounts.json', JSON.stringify(accounts, null, 2));
		return "The interest was payed successfully."
	}else{
		return "There is no account with the specified ID."
	}
}

var accountEmbed = (x) =>{
	var accountsFile = fs.readFileSync('plugins/data/accounts.json')
	var accounts = JSON.parse(accountsFile)
	var accEmbed = new discord.RichEmbed()
	accEmbed.setTitle(x.username)
	accEmbed.setThumbnail(x.avatarURL)
	accEmbed.setColor('ORANGE')
	accEmbed.addField('ID', x.id)
	accEmbed.addField('Balance', accounts[x.id])
	return accEmbed
}

var createAccount = (x) =>{
	if(x.author.id in accounts){
		x.reply("You already have an account.")
	}else{
		accounts[x.author.id] = 0
		fs.writeFile('plugins/data/accounts.json', JSON.stringify(accounts, null, 2));
		x.reply("Your account has been created with the ID of " + x.author.id + ".")
		var accEmbed = accountEmbed(x.author)
		x.channel.send(accEmbed)
	}
}

var incrementCounter = (x) =>{
	if(x.id in counter && x.id in interest){
		counter[x.id] = counter[x.id] + 1
		interest[x.id] = interest[x.id] + 1
		fs.writeFile('plugins/data/counter.json', JSON.stringify(counter, null, 2));
		fs.writeFile('plugins/data/interest.json', JSON.stringify(interest, null, 2));
	}else{
		counter[x.id] = 1
		interest[x.id] = 1
	}
}

var checkAndUpdateBalance = (x) =>{
	var value = counter[x.id]
	var value2 = interest[x.id]
	if(value == 100){
		if(x.id in accounts){
			accounts[x.id] = accounts[x.id] + wages[x.id]
			counter[x.id] = 0
			fs.writeFile('plugins/data/accounts.json', JSON.stringify(accounts, null, 2));
			fs.writeFile('plugins/data/counter.json', JSON.stringify(counter, null, 2));
			return 1
		}
	}
	if(value2 == 200){
		if(x.id in accounts){
			payInterest(x.id)
			interest[x.id] = 1
			fs.writeFile('plugins/data/interest.json', JSON.stringify(interest, null, 2));
			return 2
		}
	}
}

var checkMessagesUntilPaid = (x) =>{
	amount = 100 - counter[x]
	return amount
}

var returnCounterEmbed = (x) =>{
	var counterEmbed = new discord.RichEmbed()
	var messageCountdown = checkMessagesUntilPaid(x.author.id)
	counterEmbed.setTitle(x.author.username + "'s Pay")
	counterEmbed.setThumbnail(x.author.avatarURL)
	counterEmbed.setColor('ORANGE')
	counterEmbed.addField('Messages Until Pay', messageCountdown)
	counterEmbed.addField('Amount Due to be Paid', wages[x.author.id])
	x.channel.send(counterEmbed)
}

var transfer = (account1, account2, amount) =>{
	if((accounts[account1] - amount) >= 0){
		accounts[account1] -= amount
		accounts[account2] += amount
		fs.writeFile('plugins/data/accounts.json', JSON.stringify(accounts, null, 2))
		return "The transfer was successful."
	}else{
		return "There was not sufficient funds in the account."
	}
}

var returnID = (x) =>{
	if(!null in x.mentions.users){
		idEmbed = new discord.RichEmbed()
		idEmbed.setTitle(x.mentions.users.username + "'s Account ID")
		idEmbed.setThumbnail(x.mentions.users.avatarURL)
		idEmbed.setColor('ORANGE')
		x.channel.send(idEmbed)
	}else{
		console.log(x.mentions)
		idEmbed = new discord.RichEmbed()
		idEmbed.setTitle(x.author.username + "'s Account ID")
		idEmbed.setThumbnail(x.author.avatarURL)
		idEmbed.setColor('ORANGE')
		x.channel.send(idEmbed)
	}
}

var processTransferRequest = (x, y, account1, account2, amount) =>{
	createInvoice(x, y, new Date(), amount)
	transfer_ = transfer(account1, account2, amount)
	x.channel.send(transfer_)
}

var economyReset = (x) =>{
	for(member in x.guild.members){
		if(member.id in wages){
			wages[member.id] = 0
		}
		if(member.id in accounts){
			accounts[member.id] = 0
		}
		fs.writeFile('plugins/data/wages.json', JSON.stringify(wages, null, 2));
		fs.writeFile('plugins/data/accounts.json', JSON.stringify(accounts, null, 2));
		x.channel.send("**The Economy for this server has been __reset__**")
	}
}

class shop{
	constructor(){
		this.musicAccess = [1, 500]
		this.gamePass = [2, 50, "Get one pass to play a game."]
		this.items = [this.vipList, this.gamePass]
		this.buy = (x, itemID, id) =>{
			console.log(itemID + 1)
			if(id in accounts){
				var i;
				for(i=0;i<this.items.length;i++){
					console.log(this.items[i])
					if(this.items[i][0] == itemID){
						if((accounts[id] - this.items[i][1]) >= 0){
							if(itemID == 2){
								if(id in gamePass){
									gamePass[id] = gamePass[id] + 1
								}else{
									gamePass[id] = 1
								}
								fs.writeFile('plugins/data/gamePass.json', JSON.stringify(gamePass, null, 2))
							}
							transfer(id, '292556142952054794', this.items[i][1])
							createInvoice(x, '292556142952054794', new Date(), this.items[i][1])
							fs.writeFile('plugins/data/accounts.json', JSON.stringify(accounts, null, 2))
							return "The purchase was successful."
						}else{
							return "You do not have sufficient funds to complete the purchase."
						}
					}
				}
			}else{
				return "You do not have an account."
			}
		}
		this.shopEmbed = (x) =>{
			var shopEmbed = new discord.RichEmbed()
			shopEmbed.setTitle("Shop")
			shopEmbed.setColor('ORANGE')
			var i;
			for(i=0;i<this.items.length;i++){
				var desc = this.items[i][2] + ' Price: ' + this.items[i][1] + ' USD.'
				shopEmbed.addField(this.items[i][0], desc)
			}
			x.channel.send(shopEmbed)
		}
	}
}

module.exports.shop = shop
module.exports.getWage = getWage
module.exports.getWageEmbed = getWageEmbed
module.exports.getStatusEmbed = getStatusEmbed
module.exports.changeWage = changeWage
module.exports.createAccount = createAccount
module.exports.checkAndUpdateBalance = checkAndUpdateBalance
module.exports.incrementCounter = incrementCounter
module.exports.accountEmbed = accountEmbed
module.exports.returnCounterEmbed = returnCounterEmbed
module.exports.returnID = returnID
module.exports.createInvoice = createInvoice
module.exports.economyReset = economyReset
module.exports.transfer = transfer
