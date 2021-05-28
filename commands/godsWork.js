module.exports = {
    name: 'godsWork',
    description: "this is a joke message!",
    execute(message, args) {
        message.react('🤣');
        message.channel.send('Can\'t expect God to do all the work.');
    }
}