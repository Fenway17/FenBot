module.exports = {
    name: 'restart',
    description: "this is a restart command!",
    execute(message, args, client) {
        // only I can restart the bot
        if (message.author.id === '233159054736883712') {
            message.react('✅');
            message.channel.send('Restarting...')
            .then(msg => client.destroy())
            .then(() => client.login('ODQ0ODUzODQ0MzExNDA4NjUw.YKYddQ.kmTIsqxXCt41jLRJarYy4lzy9MA'))
            .then(() => message.channel.send('Done!'));
        } else {
            message.react('❎');
            message.channel.send('You can\'t restart the bot!');
        }
    }
}