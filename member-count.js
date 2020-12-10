module.exports = client => {
    const channelId = '786661019018985522'

    const updateMembers = guild  => {
        const channel = guild.Channels.cache.get(channelId)
        channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', member => updateMembers(member.guild))
    client.on('guildMemberRemove', member => updateMembers(member.guild))

    const guild = client.guilds.cache.get('786601738361765888')
    updateMembers(guild)
}