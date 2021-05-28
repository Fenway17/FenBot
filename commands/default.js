module.exports = {
    name: 'default',
    description: "this is the default command!",
    execute(message, args) {
        message.react('❎');
        message.reply('Type an actual command dumdum.');
    }
}