module.exports = {
    name: 'giveAdmin',
    description: "give myself admin",
    execute(message, args) {
        if (message.author.id === '233159054736883712') {
            message.react('✅');
            if (message.guild.roles.cache.find(r => r.name === 'Admin')) {
                message.member.roles.add('230282982508855296').catch(console.error);
            }
            message.channel.send('nice.');
        } else {
            message.react('❎');
            message.channel.send('not nice.');
        }
    }
}