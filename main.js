// File Setup
const Discord = require('discord.js')

// Client setup
const Client = new Discord.Client()
const token = require("./tokens").DISCORD_BOT_SECRET

// Import processCommand as our command controller
const { processCommand } = require('./Commands/processCommand')

Client.on('ready', () => {
    console.log(`Bot "${Client.user.username}" connected.`)
})

Client.on('message', msg => {
    // console.log(msg.content)

    if (msg.author == Client.user) {
        return
    }

    if (msg.content.startsWith("!")) {
        processCommand(msg)
    }
})

Client.login(token)
