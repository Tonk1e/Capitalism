// discord
const discord = require('discord.js')
const bot = new discord.Client()

// other requirements
const fs = require('fs')
const wagesFile = fs.readFileSync('plugins/data/wages.json')
var wages = JSON.parse(wagesFile)
const employersFile = fs.readFileSync('plugins/data/employers.json')
var employers = JSON.parse(employersFile)
const userEmployersFile = fs.readFileSync('plugins/data/userEmployers.json')
var userEmployers = JSON.parse(userEmployersFile)


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
		checkAndUpdateEmployer(user.id)
		if(wages[user.id] == 0){
			statusEmbed = new discord.RichEmbed()
			statusEmbed.setTitle(user.username + "'s Status")
			statusEmbed.setColor('ORANGE')
			statusEmbed.addField('Class', 'Worthless')
			statusEmbed.addField('Employer', userEmployers[id])
			return statusEmbed
		}else if(wages[user.id] > 0){
			if(wages[user.id] < 385){
				if(wages[user.id] > 110){
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.addField('Class', 'Working Class')
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}else if(wages[user.id] <= 110){
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.addField('Class', 'Lower Working Class')
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}
			}else if(wages[user.id] > 386){
				if(wages[user.id] < 2000){
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.addField('Class', 'Upper Working Class')
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}else if(wages[user.id] >= 2000){
					statusEmbed = new discord.RichEmbed()
					statusEmbed.setTitle(user.username + "'s Status")
					statusEmbed.setColor('ORANGE')
					statusEmbed.addField('Class', 'Capitalist Class')
					statusEmbed.addField('Employer', userEmployers[user.id])
					return statusEmbed
				}
			}
		}
	}
}

module.exports.getWage = getWage
module.exports.getWageEmbed = getWageEmbed
module.exports.getStatusEmbed = getStatusEmbed
module.exports.changeWage = changeWage