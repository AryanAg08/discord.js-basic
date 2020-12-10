const path = require('path')
const fs = require('fs')

const Discord = require('discord.js')
const client = new Discord.Client()
//  const config = require('./config.json')

const poll = require('./poll')
const { O_DIRECTORY } = require('constants')

client.on('ready', () => {
    console.log('The bot is online!')
    let logchannel = client.channels.cache.get('786604561242128423')

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)
  
    const readCommands = dir => {
      const files = fs.readdirSync(path.join(__dirname, dir))
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file))
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file))
          commandBase(client, option)
        }
    }
}
        readCommands('commands')
}) 

poll(client)

client.login(process.env.DJS_TOKEN)