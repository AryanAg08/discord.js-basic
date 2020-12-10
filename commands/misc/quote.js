module.exports = {
    commands: ['quote'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        //get quote from randomQuotes.json
        const { randomQuotes } = require('../../random.json');
        const Discord = require('discord.js');
        //send embed with randomquote to the channel
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('#159e10')
                .setTitle(`${message.author.username} Here is a quote:`)
                .addField('Personalized quote:', `${randomQuotes[Math.floor(Math.random() * randomQuotes.length)]}`)
                .setTimestamp()
        )
    }
}