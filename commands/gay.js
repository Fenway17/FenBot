module.exports = {
    name: 'gay',
    description: "this is a joke message!",
    execute(message, args) {
        message.react('🤣');
        message.channel.send('I don\'t know man, sounds pretty gay to me!');
    }
}