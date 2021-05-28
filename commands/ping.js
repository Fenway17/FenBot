module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args) {
        message.react('👋');
        message.channel.send('pong!');

    }
}