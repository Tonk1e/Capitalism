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

module.exports.getWage = getWage
module.exports.getWageEmbed = getWageEmbed
module.exports.getStatusEmbed = getStatusEmbed
module.exports.changeWage = changeWage