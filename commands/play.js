const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: "Joins and plays a video from Youtube",
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

        if (!args.length) {
            message.react('❎');
            return message.channel.send('You need to type a link or title!');
        }

        // validates URL (some advanced shit)
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if (validURL(args[0])) {
            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});
            
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
                message.channel.send('Leaving channel...');
            });

            const videoInfo = await ytdl.getInfo(args[0]);

            message.react('✅');
            await message.reply(`🎵 Now playing: ***${videoInfo.videoDetails.title}***`);
            
            return;
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        if (video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
                message.channel.send('Leaving channel...');
            });

            message.react('✅');
            await message.reply(`🎵 Now playing: ***${video.title}***`);
        } else {
            message.channel.send('Can\'t find video!');
        }
    }
}