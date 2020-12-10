module.exports = {
    commands: 'serverinfo',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        
        const Discord = require('discord.js');
        
        const { guild} = message
        console.log(guild)
      
        const { name, region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()
        
      
        const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
          {
          name: 'Region', 
          value: region,
        },
        {
          name: 'Members', 
          value: memberCount,
        },
        {
          name: 'Owner', 
          value: Kharmamedic(nasir),
        },
        {
          name: 'Afk Timeout (in min.)', 
          value: afkTimeout / 60,
        })
      
        message.channel.send(embed)
    },
}
