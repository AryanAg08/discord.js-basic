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
          value: owner.user.tag,
        },
        {
          name: 'Afk Timeout (in min.)', 
          value: afkTimeout / 60,
        },
        { name: ` This server is for Studying purpose only. Feel free to ask anything. We all want happy and  productive environment. I hope you all help in creating such environment. Looking forward to see you all studying and Happy. :smile: ` ,  value: '\u200B' },
        )
      
        message.channel.send(embed)
    },
}
