module.exports = {
    name: 'clear',
    description: "clear messages! (only works for messages <14 days old)",
    async execute(message, args) {

        // potential checks
        // if (message.members.hasPermission('MANAGE_MESSAGES'))

        // only I or server owners can clear messages for safety reasons
        if (message.author.id != '233159054736883712' 
            && !message.member.hasPermission({checkOwner: true})) {
            message.react('❎');
            return message.channel.send('You are not the server owner / creator!')
        }

        if (!args[0]) {
            message.react('❎');
            return message.reply('Enter the number of messages to clear!');
        }

        if (isNaN(args[0])) {
            message.react('❎');
            return message.reply('Use a real number dumdum.');
        }

        if (args[0] > 100) {
            message.react('❎');
            return message.reply('You can\'t clear more than 100 messages!');
        }

        if (args[0] < 1) {
            message.react('❎');
            return message.reply('You can\'t clear less than 1 messages dumdum.');
        }

        message.react('✅');
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}