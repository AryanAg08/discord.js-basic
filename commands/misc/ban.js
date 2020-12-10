module.exports = {
    commands: ['ban'],
    expectedArgs: '<userid>',
    permissionError: 'You do not have the required permission to run this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const { member, mentions } = message

const tag = `<@${member.id}>`
const target = mentions.users.first()

if (target) {
const targetMember = message.guild.members.cache.get(target.id)
targetMember.ban()
message.channel.send(`${tag} The user has been banned.`)
} else {
 message.channel.send(`${tag} Please mention whom to ban. `)
}
    }, 
    permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
    requiredRoles: []
}