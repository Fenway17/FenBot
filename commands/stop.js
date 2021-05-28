module.exports = {
    name: 'stop',
    description: "Stop the bot and leave channel",
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.react('❎');
            return message.channel.send('You need to be in a voice channel!');
        }

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            message.react('❎');
            return message.channel.send('You need to have the correct permissions!');
        }
        
        message.react('✅');
        await voiceChannel.leave();
        await message.channel.send('Leaving channel...');

    }
}