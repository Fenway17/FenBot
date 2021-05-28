module.exports = {
    name: 'kick',
    description: "this is the kick command!",
    execute(message, args) {

        // only I or server owners can kick for safety reasons
        if (message.author.id != '233159054736883712' 
            && !message.member.hasPermission({checkOwner: true})) {
            message.react('❎');
            return message.channel.send('You are not the server owner / creator!')
        }

        const member = message.mentions.users.first();
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.react('✅');
            message.channel.send('User has been kicked!');
        } else {
            message.react('❎');
            message.channel.send('You can\'t kick someone that doesn\'t exist!');
        }
    }
}