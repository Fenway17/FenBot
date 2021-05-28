module.exports = {
    name: 'shutdown',
    description: "this is a shutdown command!",
    execute(message, args, client) {
        // only I can shutdown the bot
        if (message.author.id === '233159054736883712') {
            message.react('✅');
            message.channel.send('Shutting down...')
            .then(msg => client.destroy())
        } else {
            message.react('❎');
            message.channel.send('You can\'t shutdown the bot dumdum!');
        }
    }
}