const Discord = require('discord.js')
const client = new Discord.Client()
//  const config = require('./config.json')

const poll = require('./poll')

client.on('ready', () => {
    console.log('The bot is online!')
}) 

poll(client)

client.login(process.env.DJS_TOKEN)