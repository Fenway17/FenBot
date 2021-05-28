module.exports = {
    name: 'ban',
    description: "this is the ban command!",
    execute(message, args) {
        // only I or server owners can ban for safety reasons
        if (message.author.id != '233159054736883712' 
            && !message.member.hasPermission({checkOwner: true})) {
            message.react('❎');
            return message.channel.send('You are not the server owner / creator!')
        }

        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.react('✅');
            message.channel.send('User has been banned!');
        } else {
            message.react('❎');
            message.channel.send('You can\'t ban someone that doesn\'t exist!');
        }
    }
}