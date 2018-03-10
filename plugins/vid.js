// discord
const discord = require('discord.js')
const mainClass = require('../mainClass.js')
const bot = mainClass.bot

// other requirements
var youtubeVideoToFrames = require('youtube-video-to-frames')

// main
var linus = (x) =>{
	var youtubeUrl = 'https://www.youtube.com/watch?v=9sxMr4IdXaU'
	var options = {videoName: 'video', fps: 60, imgFileName: "img", downloadLocation: './'}
	youtubeVideoToFrames(youtubeUrl, options)
	embed = new discord.RichEmbed()
}

module.exports.linus = linus